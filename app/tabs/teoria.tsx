import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function TeoriaScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📚 Teoria ISTQB Foundation Level</Text>

      <Text style={styles.paragraph}>
        L’esame ISTQB Foundation Level è progettato per valutare la comprensione dei concetti fondamentali del testing software. Include argomenti come:
      </Text>

      <Text style={styles.bullet}>• Principi fondamentali del testing</Text>
      <Text style={styles.bullet}>• Ciclo di vita del software e test</Text>
      <Text style={styles.bullet}>• Tecniche statiche e dinamiche</Text>
      <Text style={styles.bullet}>• Progettazione dei test e gestione</Text>
      <Text style={styles.bullet}>• Strumenti di supporto al testing</Text>

      <Text style={styles.paragraph}>
        Per superare l’esame, è necessario rispondere correttamente ad almeno il 65% delle 40 domande in 60 minuti. Ogni domanda è a scelta multipla e può avere una o più risposte corrette.
      </Text>

      <Text style={styles.paragraph}>
        È consigliabile studiare il syllabus ufficiale ISTQB, comprendere i termini chiave e fare pratica con quiz simulati. La conoscenza teorica è essenziale per interpretare correttamente le domande e applicare le tecniche di testing.
      </Text>

      <Text style={styles.paragraph}>
        Puoi tornare alla schermata iniziale per iniziare un quiz o continuare a leggere la teoria.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20
  },
  title: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 20
  },
  paragraph: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 15
  },
  bullet: {
    fontSize: 16,
    color: '#aaa',
    marginLeft: 10,
    marginBottom: 5
  }
});
