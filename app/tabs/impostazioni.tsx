import React, { useEffect, useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
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
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { fontSize: 22, color: '#fff', marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  label: { color: '#ccc', fontSize: 16 },
  note: { color: '#888', fontSize: 14, marginTop: 30 }
});
