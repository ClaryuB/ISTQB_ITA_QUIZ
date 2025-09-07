import { useFocusEffect } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';
import { useTheme } from '../../context/ThemeContext';
import { RisultatoQuiz } from '../../types/RisultatoQuiz';
import { caricaStoricoQuiz } from '../../utils/storage';
import { getStyles } from '../../utils/themeStyles';

const filtri = ['1', '5', '10', '30', 'all'] as const;
type FiltroTipo = typeof filtri[number];

export default function StoricoScreen() {
  const [storico, setStorico] = useState<RisultatoQuiz[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState<FiltroTipo>('all');

  const { theme } = useTheme();
  const colors = getStyles(theme);

  useFocusEffect(
    React.useCallback(() => {
      setLoading(true);
      caricaStoricoQuiz().then((data) => {
        setStorico(data);
        setLoading(false);
      });
    }, [])
  );

  const storicoFiltrato = useMemo(() => {
    const ordinato = [...storico].sort((a, b) =>
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

    switch (filtro) {
      case '1': return ordinato.slice(0, 1);
      case '5': return ordinato.slice(0, 5);
      case '10': return ordinato.slice(0, 10);
      case '30': return ordinato.slice(0, 30);
      default: return ordinato;
    }
  }, [storico, filtro]);

  const superati = storicoFiltrato.filter(q => q.superato).length;
  const nonSuperati = storicoFiltrato.length - superati;

  const pieData = [
    {
      name: 'Superati',
      count: superati,
      color: '#2e7d32',
      legendFontColor: colors.text,
      legendFontSize: 14
    },
    {
      name: 'Non superati',
      count: nonSuperati,
      color: '#c62828',
      legendFontColor: colors.text,
      legendFontSize: 14
    }
  ];

  const badge = (() => {
    const percent = storicoFiltrato.length > 0
      ? Math.round((superati / storicoFiltrato.length) * 100)
      : 0;

    if (percent >= 80) return '🏅 Ottimo! Preparazione eccellente';
    if (percent >= 65) return '✅ Buono! Sei sulla strada giusta';
    if (percent > 0) return '⚠️ Attenzione: serve più ripasso';
    return '📭 Nessun quiz completato';
  })();

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>📊 Storico Quiz</Text>

      <View style={styles.filterRow}>
        {filtri.map((key) => (
          <TouchableOpacity key={key} onPress={() => setFiltro(key)}>
            <Text style={[
              styles.filterText,
              filtro === key && { color: colors.accent, fontWeight: 'bold' }
            ]}>
              {key === '1' ? 'Ultimo' : key === 'all' ? 'Tutti' : `Ultimi ${key}`}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {loading && <ActivityIndicator size="large" color={colors.accent} style={{ marginTop: 20 }} />}

      {!loading && storicoFiltrato.length > 0 && (
        <>
          <LineChart
            data={{
              labels: storicoFiltrato.map(item =>
                new Date(item.timestamp).toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit' })
              ),
              datasets: [
                {
                  data: storicoFiltrato.map(item =>
                    Math.round((item.corrette / item.domande) * 100)
                  ),
                  strokeWidth: 2
                },
                {
                  data: Array(storicoFiltrato.length).fill(65),
                  withDots: false,
                  color: () => 'rgba(255, 0, 0, 0.3)'
                }
              ]
            }}
            width={Dimensions.get('window').width - 40}
            height={220}
            yAxisSuffix="%"
            chartConfig={{
              backgroundColor: colors.card,
              backgroundGradientFrom: colors.card,
              backgroundGradientTo: colors.card,
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
              labelColor: () => colors.text,
              propsForDots: {
                r: '4',
                strokeWidth: '2',
                stroke: colors.accent
              }
            }}
            bezier
            style={{ marginVertical: 20, borderRadius: 8 }}
          />

          <PieChart
            data={pieData}
            width={Dimensions.get('window').width - 40}
            height={180}
            chartConfig={{
              color: () => colors.text
            }}
            accessor="count"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />

          <Text style={[styles.badge, { color: colors.text }]}>{badge}</Text>
        </>
      )}

      {!loading && storicoFiltrato.length === 0 && (
        <Text style={[styles.empty, { color: colors.text }]}>Nessun quiz completato finora.</Text>
      )}

      {!loading && storicoFiltrato.map((item, index) => {
        const percent = Math.round((item.corrette / item.domande) * 100);
        const data = new Date(item.timestamp).toLocaleString('it-IT', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });

        return (
          <View key={index} style={[styles.card, { backgroundColor: colors.card }]}>
            <Text style={[styles.date, { color: colors.text }]}>🗓 {data}</Text>
            <Text style={[styles.text, { color: colors.text }]}>Domande: {item.domande}</Text>
            <Text style={[styles.text, { color: colors.text }]}>Corrette: {item.corrette} ({percent}%)</Text>
            <Text style={[
              styles.text,
              { color: item.superato ? '#2e7d32' : '#c62828' }
            ]}>
              {item.superato ? '✅ Superato' : '❌ Non superato'}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 20, textAlign: 'center' },
  filterRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
  filterText: { fontSize: 14, color: '#888' },
  empty: { fontSize: 16, textAlign: 'center', marginTop: 40 },
  badge: { fontSize: 16, textAlign: 'center', marginVertical: 10 },
  card: { padding: 15, borderRadius: 8, marginBottom: 15 },
  date: { fontSize: 14, marginBottom: 5 },
  text: { fontSize: 16 }
});
