import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function TeoriaScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📚 Teoria ISTQB Foundation Level</Text>

      {/* Capitolo 1 */}
      <Text style={styles.title}>1. Fondamenti del Testing</Text>
      <Text style={styles.paragraph}>Durata: 180 minuti</Text>

      <Text style={styles.bullet}>• 1.1 Cos'è il Testing?</Text>
      <Text style={styles.bullet}>• 1.1.1 Obiettivi del Testing</Text>
      <Text style={styles.bullet}>• 1.1.2 Testing e Debugging</Text>

      <Text style={styles.bullet}>• 1.2 Perché il Testing è Necessario?</Text>
      <Text style={styles.bullet}>• 1.2.1 Il Contributo del Testing al Successo</Text>
      <Text style={styles.bullet}>• 1.2.2 Testing e Quality Assurance (QA)</Text>
      <Text style={styles.bullet}>• 1.2.3 Errori, Difetti, Failure e Root Cause</Text>

      <Text style={styles.bullet}>• 1.3 Principi del Testing</Text>

      <Text style={styles.bullet}>• 1.4 Attività di Test, Testware e Ruoli del Test</Text>
      <Text style={styles.bullet}>• 1.4.1 Attività e Compiti del Test</Text>
      <Text style={styles.bullet}>• 1.4.2 Il Processo di Test nel Contesto</Text>
      <Text style={styles.bullet}>• 1.4.3 Testware</Text>
      <Text style={styles.bullet}>• 1.4.4 Tracciabilità tra la Base di Test e il Testware</Text>

      {/* Capitolo 2 */}
      <Text style={styles.title}>2. Testing Durante il Ciclo di Vita del Software</Text>
      <Text style={styles.paragraph}>Durata: 225 minuti</Text>

      <Text style={styles.bullet}>• 2.1 Ciclo di Vita del Software e Testing</Text>
      <Text style={styles.bullet}>• 2.1.1 Modelli di Ciclo di Vita</Text>
      <Text style={styles.bullet}>• 2.1.2 Livelli di Test</Text>

      <Text style={styles.bullet}>• 2.2 Tipi di Test</Text>
      <Text style={styles.bullet}>• 2.2.1 Test Funzionali</Text>
      <Text style={styles.bullet}>• 2.2.2 Test Non Funzionali</Text>
      <Text style={styles.bullet}>• 2.2.3 Test Basati sulla Struttura</Text>
      <Text style={styles.bullet}>• 2.2.4 Test Relativi alle Modifiche</Text>

      <Text style={styles.bullet}>• 2.3 Test di Manutenzione</Text>

      {/* Capitolo 3 */}
      <Text style={styles.title}>3. Tecniche Statiche</Text>
      <Text style={styles.paragraph}>Durata: 75 minuti</Text>

      <Text style={styles.bullet}>• 3.1 Tecniche Statiche e Processo di Test</Text>
      <Text style={styles.bullet}>• 3.2 Revisione dei Work Products</Text>
      <Text style={styles.bullet}>• 3.2.1 Tipi di Revisione</Text>
      <Text style={styles.bullet}>• 3.2.2 Processo di Revisione</Text>
      <Text style={styles.bullet}>• 3.2.3 Ruoli di Revisione</Text>
      <Text style={styles.bullet}>• 3.2.4 Fattori di Successo delle Revisioni</Text>
      <Text style={styles.bullet}>• 3.3 Analisi Statica</Text>

      {/* Capitolo 4 */}
      <Text style={styles.title}>4. Tecniche di Test</Text>
      <Text style={styles.paragraph}>Durata: 240 minuti</Text>

      <Text style={styles.bullet}>• 4.1 Categorie di Tecniche di Test</Text>
      <Text style={styles.bullet}>• 4.2 Tecniche Basate sul Comportamento (Black-box)</Text>
      <Text style={styles.bullet}>• 4.2.1 Partizione di Equivalenza</Text>
      <Text style={styles.bullet}>• 4.2.2 Analisi dei Valori ai Limiti</Text>
      <Text style={styles.bullet}>• 4.2.3 Test con Tabelle di Decisione</Text>
      <Text style={styles.bullet}>• 4.2.4 Test di Transizione di Stato</Text>
      <Text style={styles.bullet}>• 4.2.5 Test di Caso d’Uso</Text>

      <Text style={styles.bullet}>• 4.3 Tecniche Basate sulla Struttura (White-box)</Text>
      <Text style={styles.bullet}>• 4.3.1 Test delle Condizioni e delle Decisioni</Text>
      <Text style={styles.bullet}>• 4.3.2 Coverage delle Condizioni e delle Decisioni</Text>

      <Text style={styles.bullet}>• 4.4 Tecniche Basate sull’Esperienza</Text>
      <Text style={styles.bullet}>• 4.4.1 Test Basati sull’Errore</Text>
      <Text style={styles.bullet}>• 4.4.2 Test Esplorativi</Text>

      {/* Capitolo 5 */}
      <Text style={styles.title}>5. Gestione dei Test</Text>
      <Text style={styles.paragraph}>Durata: 330 minuti</Text>

      <Text style={styles.bullet}>• 5.1 Organizzazione dei Test</Text>
      <Text style={styles.bullet}>• 5.2 Pianificazione e Stima dei Test</Text>
      <Text style={styles.bullet}>• 5.3 Monitoraggio e Controllo dei Test</Text>
      <Text style={styles.bullet}>• 5.4 Gestione della Configurazione</Text>
      <Text style={styles.bullet}>• 5.5 Rischi e Test</Text>
      <Text style={styles.bullet}>• 5.6 Gestione degli Incidenti</Text>

      {/* Capitolo 6 */}
      <Text style={styles.title}>6. Strumenti di Supporto al Test</Text>
      <Text style={styles.paragraph}>Durata: 120 minuti</Text>

      <Text style={styles.bullet}>• 6.1 Tipi di Strumenti di Supporto al Test</Text>
      <Text style={styles.bullet}>• 6.1.1 Strumenti per la Gestione dei Test</Text>
      <Text style={styles.bullet}>• 6.1.2 Strumenti per la Gestione dei Requisiti</Text>
      <Text style={styles.bullet}>• 6.1.3 Strumenti per la Revisione e l’Ispezione</Text>
      <Text style={styles.bullet}>• 6.1.4 Strumenti per l’Analisi Statica</Text>
      <Text style={styles.bullet}>• 6.1.5 Strumenti per il Test Dinamico</Text>
      <Text style={styles.bullet}>• 6.1.6 Strumenti per la Misurazione delle Performance</Text>
      <Text style={styles.bullet}>• 6.1.7 Strumenti di Test e Debug</Text>
      <Text style={styles.bullet}>• 6.1.8 Strumenti di Automazione dei Test</Text>

      <Text style={styles.bullet}>• 6.2 Benefici e Rischi della Test Automation</Text>
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
    marginBottom: 15,
    marginTop: 20
  },
  paragraph: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 10
  },
  bullet: {
    fontSize: 16,
    color: '#aaa',
    marginLeft: 10,
    marginBottom: 5
  }
});
