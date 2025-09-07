import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📱 ISTQB ITA Quiz</Text>
      <Text style={styles.subtitle}>Benvenuto!</Text>
      <Text style={styles.paragraph}>Usa la barra in basso per iniziare un quiz, leggere la teoria o esplorare lo storico.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 28, color: '#fff', marginBottom: 10 },
  subtitle: { fontSize: 18, color: '#aaa', marginBottom: 20 },
  paragraph: { fontSize: 16, color: '#ccc', textAlign: 'center' }
});
