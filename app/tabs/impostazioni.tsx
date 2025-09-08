import React, { useEffect, useState } from 'react';
import { Linking, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { caricaImpostazioni, salvaImpostazioni } from '../../utils/settings';

export default function ImpostazioniScreen() {
  const [darkMode, setDarkMode] = useState(true);
  const [timerAttivo, setTimerAttivo] = useState(true);

  useEffect(() => {
    caricaImpostazioni().then((s) => {
      setDarkMode(s.darkMode);
      setTimerAttivo(s.timerAttivo);
    });
  }, []);

  useEffect(() => {
    salvaImpostazioni({ darkMode, timerAttivo });
  }, [darkMode, timerAttivo]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>⚙️ Impostazioni</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Timer attivo di default</Text>
        <Switch
          value={timerAttivo}
          onValueChange={setTimerAttivo}
          thumbColor="#fff"
          trackColor={{ false: '#555', true: '#007aff' }}
        />
      </View>

      <Text style={styles.note}>Le modifiche vengono salvate automaticamente.</Text>

      {/* Crediti e Autori */}
      <Text style={styles.sectionTitle}>🧾 Crediti e Autori</Text>
      <Text style={styles.paragraph}>Creatore: Claudio</Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/ClaryuB')}>
        GitHub: github.com/ClaryuB
      </Text>
      <Text style={styles.paragraph}>Ringraziamenti: ISTQB syllabus</Text>

      {/* Informazioni sull’app */}
      <Text style={styles.sectionTitle}>📄 Informazioni sull’app</Text>
      <Text style={styles.paragraph}>Versione: v1.0.0</Text>
      <Text style={styles.paragraph}>Stato: Work in progress</Text>
      <Text style={styles.paragraph}>Ultimo aggiornamento: 09/09/2025</Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/ClaryuB/ISTQB_ITA_QUIZ')}>
        Changelog su GitHub
      </Text>

      {/* Fonti e Riferimenti */}
      <Text style={styles.sectionTitle}>📚 Fonti e Riferimenti</Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://www.istqb.org')}>
        Syllabus ISTQB ufficiale
      </Text>
      <Text style={styles.paragraph}>Disclaimer: Questa app non è affiliata ufficialmente con ISTQB.</Text>

      {/* Contatti e Feedback */}
      <Text style={styles.sectionTitle}>📬 Contatti e Feedback</Text>
      <Text style={styles.link} onPress={() => Linking.openURL('mailto:claryub@gmail.com')}>
        Invia feedback via email
      </Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/ClaryuB/ISTQB_ITA_QUIZ/issues')}>
        Segnala un bug su GitHub
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { fontSize: 22, color: '#fff', marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  label: { color: '#ccc', fontSize: 16 },
  note: { color: '#888', fontSize: 14, marginBottom: 30 },
  sectionTitle: { fontSize: 18, color: '#fff', marginTop: 20, marginBottom: 10, fontWeight: 'bold' },
  paragraph: { fontSize: 15, color: '#ccc', marginBottom: 8 },
  link: { fontSize: 15, color: '#4DA6FF', marginBottom: 8 }
});
