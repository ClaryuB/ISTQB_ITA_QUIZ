import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Capitolo1Screen() {
  return (
    <View style={styles.wrapper}>
    <ScrollView style={styles.container}>
      <Text style={styles.title}>6. Strumenti di Supporto al Test</Text>
      <Text style={styles.paragraph}>6. Strumenti di Test - 20 minuti{'\n'}  
Parole chiave{'\n'}  
test automation</Text>
      <Text style={styles.paragraph}>Obiettivi di Apprendimento per il Capitolo 6:</Text>
      <Text style={styles.subtitle}>6.2 Benefici e Rischi della Test Automation</Text>
      <Text style={styles.paragraph}>FL-6.2.1{'\n'}   
(K1) Richiamare i benefici e i rischi della test automation</Text>

      <Text style={styles.subtitle}>6.1 Strumenti di Supporto per il Testing</Text>
      <Text style={styles.bullet}>• Gli strumenti di test supportano e facilitano molte attività di test. Esempi includono, ma non si limitano a:</Text>
      <Text style={styles.bullet}>• Strumenti di test management - Aumentano l'efficienza del processo di test facilitando la gestione 
del ciclo di vita dello sviluppo software, il requirements management, il test management, il defect 
management, il configuration management</Text>
      <Text style={styles.bullet}>• Strumenti di testing statico - Supportano il tester nell'esecuzione delle review e dell’analisi statica</Text>
      <Text style={styles.bullet}>• Strumenti per la progettazione dei test e l’implementazione dei test - Facilitano la generazione 
dei test case, dei dati di test e delle procedure di test</Text>
      <Text style={styles.bullet}>• Strumenti di esecuzione dei test e di copertura dei test - Facilitano l'esecuzione automatizzata 
dei test e la misura della copertura</Text>
      <Text style={styles.bullet}>• Strumenti per il testing non funzionale - Permettono ai tester di eseguire il testing non funzionale 
che è difficile o impossibile eseguire manualmente</Text>
      <Text style={styles.bullet}>• Strumenti DevOps - Supportano la pipeline di delivery DevOps, il tracciamento del workflow, i 
processi di build automatizzati, la Continuous Integration/Continuous Delivery (CI/CD)</Text>
      <Text style={styles.bullet}>• Strumenti di collaborazione - Facilitano la comunicazione</Text>
      <Text style={styles.bullet}>• Strumenti che supportano la scalabilità e la standardizzazione del rilascio (es. macchine 
virtuali, strumenti per i container)</Text>
      <Text style={styles.bullet}>• Qualsiasi altro strumento di supporto al testing (es. un foglio di calcolo è uno strumento di test 
nel contesto del testing).</Text>
      <Text style={styles.subtitle}>6.2 Benefici e Rischi della Test Automation</Text>
      <Text style={styles.bullet}>• La semplice acquisizione di uno strumento non garantisce il successo. Ogni nuovo strumento richiederà 
un effort per ottenere benefici reali e duraturi (ad esempio per l'introduzione, la manutenzione e la 
formazione sullo strumento). Esistono anche alcuni rischi, che devono essere analizzati e mitigati. 
I potenziali benefici legati all’utilizzo della test automation includono:</Text>
      <Text style={styles.bullet}>• Risparmio di tempo grazie alla riduzione del lavoro manuale ripetitivo (es. esecuzione dei 
regression test, reinserimento degli stessi dati di test, confronto dei risultati attesi rispetto ai risultati 
effettivi, e verifica degli standard di codifica)</Text>
      <Text style={styles.bullet}>• Prevenzione di semplici errori umani attraverso una maggiore consistenza e ripetibilità (es. i test 
sono derivati in modo consistente dai requisiti, i dati di test vengono creati in modo sistematico e i 
test vengono eseguiti da uno strumento nello stesso ordine e con la stessa frequenza)</Text>
      <Text style={styles.bullet}>• Valutazione più oggettiva (es. copertura) e generazione di misure troppo complicate per essere 
determinate dall'uomo</Text>
      <Text style={styles.bullet}>• Accesso più facile alle informazioni sul testing per supportare il test management e la reportistica 
dei test (es. statistiche, grafici e dati aggregati sull'avanzamento dei test, tassi di failure e durata 
dell'esecuzione dei test)</Text>

      <Text style={styles.bullet}>• Riduzione dei tempi di esecuzione dei test che permette di fornire una rilevazione anticipata dei 
difetti, un feedback più rapido e un time-to-market più veloce</Text>
      <Text style={styles.bullet}>• Aumento del tempo che i tester possono dedicare alla progettazione di test nuovi, più approfonditi 
e più efficaci 
I potenziali rischi legati all’utilizzo della test automation includono:</Text>
      <Text style={styles.bullet}>• Aspettative irrealistiche sui benefici di uno strumento (incluse le funzionalità e la facilità d'uso)</Text>
      <Text style={styles.bullet}>• Stime non accurate dei tempi, costi ed effort necessari per introdurre uno strumento, per 
manutenere i test script e per modificare il processo di test manuale esistente</Text>
      <Text style={styles.bullet}>• Utilizzo di uno strumento di test quando è più appropriato il testing manuale</Text>
      <Text style={styles.bullet}>• Troppa fiducia nello strumento, ignorando ad esempio la necessità del pensiero critico umano</Text>
      <Text style={styles.bullet}>• Dipendenza dal fornitore dello strumento, che può cessare l'attività, ritirare lo strumento, venderlo 
a un fornitore differente o fornire un'assistenza insufficiente (es. risposte alle domande, 
aggiornamenti e correzioni di difetti)</Text>
      <Text style={styles.bullet}>• Sospensione di un software open-source, che causa la non disponibilità di ulteriori aggiornamenti</Text>
      <Text style={styles.bullet}>• Frequenti aggiornamenti come ulteriori sviluppi di componenti interni di un software open-source</Text>
      <Text style={styles.bullet}>• Non compatibilità dello strumento di test automation con la piattaforma di sviluppo</Text>
      <Text style={styles.bullet}>• Scelta di uno strumento non idoneo e non conforme ai requisiti normativi e/o agli standard safety.</Text>

    </ScrollView>

      <View style={styles.footer}>
        <Link href="/tabs/teoria" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>← Torna alla scelta capitoli</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  wrapper: { flex: 1,backgroundColor: '#121212' },
  container: { padding: 20,backgroundColor: '#121212' },
  title: { fontSize: 22, color: '#fff', marginBottom: 20 },
  paragraph: { fontSize: 16, color: '#ccc', lineHeight: 24 },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginTop: 15,
    marginBottom: 10
  },
  bullet: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 8,
    marginLeft: 10,
    lineHeight: 22
  },
  footer: {
    padding: 10,
    backgroundColor: '#121212',
    borderTopWidth: 1,
    borderTopColor: '#333'
  },
  button: {
    backgroundColor: '#4DA6FF',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});