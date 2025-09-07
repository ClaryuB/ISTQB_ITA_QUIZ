import React from 'react';
import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

const logo = require('@assets/images/ISTQB_ITA_logo.png');

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const logoSize = Math.min(width * 0.5, 160); // Adattivo: max 160px o 50% larghezza

  return (
    <View style={styles.container}>
      <Image source={logo} style={[styles.logo, { width: logoSize, height: logoSize }]} resizeMode="contain" />
      <Text style={styles.title}>📱 ISTQB ITA Quiz</Text>
      <Text style={styles.subtitle}>Benvenuto!</Text>
      <Text style={styles.paragraph}>
        Usa la barra in basso per iniziare un quiz, leggere la teoria o esplorare lo storico.
      </Text>
      <Text style={styles.notice}>⚠️ La webapp è ancora in fase di sviluppo. Alcune funzionalità potrebbero cambiare.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  logo: {
    marginBottom: 20
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    color: '#aaa',
    marginBottom: 20
  },
  paragraph: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 30
  },
  notice: {
    fontSize: 14,
    color: '#ffcc00',
    textAlign: 'center'
  }
});
