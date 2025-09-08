import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Capitolo1Screen() {
  return (
    <View style={styles.wrapper}>
    <ScrollView style={styles.container}>
      <Text style={styles.title}>3. Tecniche Statiche</Text>
      <Text style={styles.paragraph}>3. Testing Statico - 80 minuti{'\n'} 
Parole Chiave{'\n'} 
anomalia, analisi statica, ispezione, review, review formale, review informale, review tecnica, testing 
dinamico, testing statico, walkthrough</Text>
      <Text style={styles.paragraph}>Obiettivi di Apprendimento per il Capitolo 3:</Text>
      <Text style={styles.subtitle}>3.2 Feedback e Processo di Review</Text>
      <Text style={styles.paragraph}>FL-3.2.1{'\n'} 
(K1) Identificare i benefici di un feedback anticipato e frequente da parte degli stakeholder{'\n'} 
FL-3.2.2{'\n'} 
(K2) Riassumere le attività del processo di review{'\n'} 
FL-3.2.3{'\n'} 
(K1) Ricordare le responsabilità assegnate ai ruoli principali durante l'esecuzione delle review{'\n'} 
FL-3.2.4{'\n'} 
(K2) Confrontare e mettere in contrapposizione i diversi tipi di review{'\n'} 
FL-3.2.5{'\n'} 
(K1) Ricordare i fattori che contribuiscono al successo di una review</Text>
      
      <Text style={styles.subtitle}>3.1 Fondamenti del Testing Statico</Text>
      <Text style={styles.paragraph}>A differenza del testing dinamico, nel testing statico il software sotto test non deve essere eseguito. Il 
codice, le specifiche di processo, le specifiche dell'architettura di sistema o altri prodotti di lavoro vengono 
valutati attraverso l’esame manuale (es. la review) o con l'aiuto di uno strumento (es. l’analisi statica). Gli 
obiettivi del testing includono il miglioramento della qualità, la rilevazione dei difetti e la valutazione di 
caratteristiche quali leggibilità, completezza, correttezza, testabilità e consistenza. Il testing statico può 
essere applicato sia per la verifica sia per la validazione. 
I tester, i rappresentanti di business (Product Owner, business analyst, ecc.) e gli sviluppatori lavorano 
insieme durante il mapping degli esempi, la scrittura collaborativa delle user story e le sessioni di 
raffinamento del backlog, per garantire che le user story e i relativi prodotti di lavoro soddisfino i criteri 
definiti, per esempio la Definition of Ready (si veda il paragrafo 5.1.3). Le tecniche di review possono essere 
applicate per assicurare che le user story siano complete e comprensibili e che includano criteri di 
accettazione testabili. Ponendo le domande giuste, i tester esplorano, mettono in discussione e 
contribuiscono a migliorare le user story proposte. 
L'analisi statica può identificare i problemi prima del testing dinamico e spesso richiede un effort minore, 
poiché non sono richiesti test case e vengono generalmente utilizzati degli strumenti (si veda il capitolo 6). 
L'analisi statica è spesso incorporata nei framework di Continuous Integration (si veda il paragrafo 2.1.4). 
Sebbene sia largamente utilizzata per rilevare difetti specifici del codice, l'analisi statica viene utilizzata 
anche per valutare la manutenibilità e la sicurezza. Gli strumenti per il controllo ortografico e per la verifica 
della leggibilità sono altri esempi di strumenti di analisi statica.</Text>
      <Text style={styles.subtitle}>3.1.1 Prodotti di Lavoro che possono essere esaminati dal Testing Statico</Text>
      <Text style={styles.paragraph}>Quasi tutti i prodotti di lavoro possono essere esaminati utilizzando il testing statico. Esempi includono i 
documenti di specifica dei requisiti, il codice sorgente, i test plan, i test case, gli item del product backlog, i 
test charter, la documentazione di progetto, i contratti e i modelli. 
Qualsiasi prodotto di lavoro che possa essere letto e compreso può essere oggetto di una review. Tuttavia, 
per l'analisi statica, i prodotti di lavoro devono avere una struttura rispetto alla quale possono essere 
verificati (es. modelli, codice o testo con una sintassi formale).  
I prodotti di lavoro che non sono appropriati per il testing statico includono quelli che sono difficili da 
interpretare per gli esseri umani e che non dovrebbero essere analizzati dagli strumenti (es. il codice 
eseguibile di terze parti che non dovrebbe essere analizzato per motivi legali).</Text>
      <Text style={styles.subtitle}>3.1.2 Valore del Testing Statico</Text>
      <Text style={styles.paragraph}>Il testing statico può rilevare i difetti nelle prime fasi del SDLC, e questo soddisfa il principio del testing 
anticipato (si veda il paragrafo 1.3). Può anche identificare i difetti che non possono essere rilevati dal 
testing dinamico (es. codice irraggiungibile, pattern di progettazione non implementati come desiderato, 
difetti nei prodotti di lavoro non eseguibili).  
Il testing statico fornisce la capacità di valutare la qualità e di creare fiducia nei prodotti di lavoro. Verificando 
i requisiti documentati, gli stakeholder possono anche assicurarsi che questi requisiti descrivano le loro 
esigenze effettive. Poiché il testing statico può essere eseguito nelle prime fasi del SDLC, è possibile creare 
una comprensione condivisa tra gli stakeholder coinvolti. Anche la comunicazione tra gli stakeholder 
coinvolti ne risulterà migliorata. Per questo motivo, si raccomanda di coinvolgere un'ampia varietà di 
stakeholder nel testing statico.</Text>
      
      <Text style={styles.paragraph}>Anche se le review possono essere costose da implementare, i costi di progetto complessivi sono di solito 
molto inferiori rispetto a quando non vengono eseguite le review, perché deve essere dedicato meno tempo 
ed effort per la correzione dei difetti nelle fasi successive del progetto.  
Alcuni difetti del codice possono essere rilevati utilizzando l’analisi statica in modo più efficiente rispetto al 
testing dinamico, e questo di solito si traduce in un minor numero di difetti del codice e in un minore effort 
di sviluppo complessivo.</Text>
      <Text style={styles.subtitle}>3.1.3 Differenze tra Testing Statico e Testing Dinamico</Text>
      <Text style={styles.bullet}>• Testing statico e testing dinamico sono complementari tra loro. Hanno obiettivi simili, come il supporto al 
rilevamento dei difetti nei prodotti di lavoro (si veda il paragrafo 1.1.1), ma esistono anche delle differenze, 
ad esempio:</Text>
      <Text style={styles.bullet}>• Il testing statico e il testing dinamico (con l'analisi dei failure) possono entrambi portare alla 
rilevazione dei difetti, ma esistono alcuni tipi di difetti che possono essere rilevati solo dal testing 
statico o solo dal testing dinamico</Text>
      <Text style={styles.bullet}>• Il testing statico rileva direttamente i difetti nel prodotto di lavoro, mentre il testing dinamico genera 
failure da cui vengono identificati i difetti associati, attraverso un'analisi successiva</Text>
      <Text style={styles.bullet}>• Il testing statico può rilevare più facilmente i difetti presenti in percorsi del codice raramente 
esercitati o difficili da raggiungere con il testing dinamico</Text>
      <Text style={styles.bullet}>• Il testing statico può essere applicato a prodotti di lavoro non eseguibili, mentre il testing dinamico 
può essere applicato solo a prodotti di lavoro eseguibili</Text>
      <Text style={styles.bullet}>• Il testing statico può essere utilizzato per misurare le caratteristiche di qualità che sono indipendenti 
dall'esecuzione del codice (es. manutenibilità), mentre il testing dinamico può essere utilizzato per 
misurare le caratteristiche di qualità che sono dipendenti dall'esecuzione del codice (es. efficienza 
delle prestazioni). 
I difetti tipici che sono più facili e/o più economici da rilevare attraverso il testing statico includono:</Text>
      <Text style={styles.bullet}>• Difetti nei requisiti (es. inconsistenze, ambiguità, contraddizioni, omissioni, inaccuratezze, 
duplicazioni)</Text>
      <Text style={styles.bullet}>• Difetti di progettazione (es. strutture di database inefficienti, scarsa modularità)</Text>
      <Text style={styles.bullet}>• Difetti di codifica (es. variabili con valori non definiti, variabili non dichiarate, codice non 
raggiungibile o duplicato, eccessiva complessità del codice)</Text>
      <Text style={styles.bullet}>• Deviazioni dagli standard (es. mancanza di aderenza alle naming convention degli standard di 
codifica)</Text>
      <Text style={styles.bullet}>• Specifiche di interfaccia non corrette (es. numero, tipo o ordine dei parametri non corrispondenti)</Text>
      <Text style={styles.bullet}>• Tipi specifici di vulnerabilità alla sicurezza (es. buffer overflow)</Text>
      <Text style={styles.bullet}>• Lacune o imprecisioni nella copertura della base di test (es. test mancanti per un criterio di 
accettazione)</Text>
      
      <Text style={styles.subtitle}>3.2 Feedback e Processo di Review</Text>

      <Text style={styles.subtitle}>3.2.1 Vantaggi di un Feedback Anticipato e Frequente degli Stakeholder</Text>
      <Text style={styles.paragraph}>Un feedback anticipato e frequente permette di comunicare in anticipo i potenziali problemi di qualità. Se 
esiste poco coinvolgimento degli stakeholder durante il ciclo di vita dello sviluppo software, il prodotto che 
si sta sviluppando potrebbe non soddisfare la vision originale o attuale degli stakeholder. ll fallimento dovuto 
al rilascio di qualcosa che non corrisponde alle aspettative degli stakeholder, può causare costosi rework, 
scadenze non rispettate, rimbalzi di responsabilità e potrebbe persino portare al completo fallimento del 
progetto.  
Un feedback frequente degli stakeholder durante l'intero SDLC può prevenire incomprensioni sui requisiti 
e assicurare che le modifiche ai requisiti siano comprese e implementate prima. Questo aiuta i membri del 
team di sviluppo a migliorare la comprensione rispetto a quello che stanno costruendo. Consente loro di 
concentrarsi sulle funzionalità che forniscono un maggior valore agli stakeholder e che hanno un impatto 
positivo sui rischi identificati.</Text>
      <Text style={styles.subtitle}>3.2.2 Attività del Processo di Review</Text>
      <Text style={styles.bullet}>• Lo standard ISO/IEC 20246 definisce un processo di review generico che fornisce un framework strutturato 
ma flessibile dal quale è possibile eseguire il tailoring (adattamento) di un processo di review specifico a 
una situazione particolare. Se la review richiesta è più formale, saranno necessari più task tra quelli descritti 
per le diverse attività.  
La dimensione di molti prodotti di lavoro può essere tale da non poter essere coperta da un'unica review. 
Il processo di review può essere attivato più volte per completare la review dell'intero prodotto di lavoro.  
Le attività del processo di review generico sono:</Text>
      <Text style={styles.bullet}>• Pianificazione. Durante la fase di pianificazione, dovrà essere definito l'ambito della review, che 
comprende lo scopo, il prodotto di lavoro da sottoporre a review, le caratteristiche di qualità da 
valutare, le aree su cui focalizzarsi, i criteri di uscita, le informazioni di supporto come gli standard, 
l'effort e i tempi della review.</Text>
      <Text style={styles.bullet}>• Inizio della review. Durante l'inizio della review, l'obiettivo è assicurarsi che ogni persona coinvolta 
sia preparata per iniziare la review. Ciò significa assicurarsi che ogni partecipante abbia accesso 
al prodotto di lavoro sottoposto alla review, che comprenda il proprio ruolo e le proprie 
responsabilità, e che riceva tutto il necessario per eseguire la review.</Text>
      <Text style={styles.bullet}>• Review individuale. Ogni reviewer esegue una review individuale per valutare la qualità del 
prodotto di lavoro sottoposto alla review e per identificare anomalie, raccomandazioni e domande 
attraverso l’applicazione di una o più tecniche di review (es. review checklist-based, review 
scenario-based). Lo standard ISO/IEC 20246 approfondisce le diverse tecniche di review. I 
reviewer memorizzano tutte le anomalie, le raccomandazioni e le domande identificate.</Text>
      <Text style={styles.bullet}>• Comunicazione e analisi. Poiché le anomalie identificate durante una review non sono 
necessariamente difetti, tutte queste anomalie devono essere analizzate e discusse. Per ogni 
anomalia dovrebbe essere presa una decisione sullo stato, su chi debba prenderla in carico 
(proprietario) e sulle azioni necessarie. Questo avviene generalmente durante un review meeting, 
in cui i partecipanti decidono anche quale sia il livello di qualità del prodotto di lavoro sottoposto</Text>
      
      <Text style={styles.bullet}>• alla review e quali azioni di follow-up siano richieste. Per completare le azioni può essere 
necessaria una review di follow-up.</Text>
      <Text style={styles.bullet}>• Correzione e reporting. Per ogni difetto, dovrebbe essere creato un defect report, in modo che le 
azioni correttive possano essere seguite. Una volta raggiunti i criteri di uscita, il prodotto di lavoro 
può essere accettato. Viene creato un report dei risultati della review.</Text>
      <Text style={styles.subtitle}>3.2.3 Ruoli e Responsabilità nelle Review</Text>
      <Text style={styles.bullet}>• Le review coinvolgono diversi stakeholder, che possono assumere diversi ruoli. I ruoli principali e le loro 
responsabilità sono:</Text>
      <Text style={styles.bullet}>• Manager - Decide cosa deve essere sottoposto a review e fornisce le risorse, come lo staff e il 
tempo per la review</Text>
      <Text style={styles.bullet}>• Autore - Crea e corregge il prodotto di lavoro sottoposto alla review</Text>
      <Text style={styles.bullet}>• Moderatore (chiamato anche facilitatore) - Garantisce l'esecuzione efficace dei review meeting, 
inclusa la mediazione, la gestione del tempo e un ambiente di review sicuro in cui tutti possano 
parlare liberamente</Text>
      <Text style={styles.bullet}>• Scribe (chiamato anche recorder) - Raccoglie le anomalie dai reviewer e memorizza le 
informazioni sulla review, come le decisioni e le nuove anomalie rilevate durante il review meeting</Text>
      <Text style={styles.bullet}>• Reviewer - Esegue le review. Un reviewer può essere una persona che lavora al progetto, un 
esperto in materia (subject matter expert) o qualsiasi altro stakeholder</Text>
      <Text style={styles.bullet}>• Review leader - Assume la responsabilità complessiva della review, decidendo ad esempio chi 
sarà coinvolto e organizzando quando e dove si svolgerà la review. 
Sono inoltre possibili ruoli più dettagliati, come descritto nello standard ISO/IEC 20246.</Text>
      <Text style={styles.subtitle}>3.2.4 Tipi di Review</Text>
      <Text style={styles.bullet}>• Esistono molti tipi di review, che possono variare da review informali a review formali. Il livello di formalità 
richiesto dipende da diversi fattori, come il ciclo di vita dello sviluppo software che deve essere applicato, 
la maturità del processo di sviluppo, la criticità e la complessità del prodotto di lavoro da sottoporre a review, 
i requisiti legali o normativi, e la necessità di un audit trail. Lo stesso prodotto di lavoro può essere 
sottoposto a diversi tipi di review, ad esempio applicando prima una review informale e successivamente 
una review più formale. 
La selezione del tipo di review appropriata è fondamentale per raggiungere gli obiettivi di review richiesti 
(si veda il paragrafo 3.2.5). La selezione non si basa solo sugli obiettivi, ma anche su fattori come le 
esigenze di progetto, le risorse disponibili, il tipo di prodotto di lavoro e i relativi rischi, il dominio di business 
e la cultura aziendale.  
Alcuni tipi di review comunemente utilizzati sono:</Text>
      <Text style={styles.bullet}>• Review informale. Le review informali non seguono un processo definito e non richiedono un 
risultato formale documentato. L'obiettivo principale è rilevare le anomalie.</Text>
      
      <Text style={styles.bullet}>• Walkthrough. Un walkthrough, che viene condotto dall'autore, può avere molti obiettivi, come 
valutare la qualità e creare fiducia nel prodotto di lavoro, educare i reviewer, ottenere il consenso, 
generare nuove idee, motivare e consentire agli autori di migliorare, rilevare anomalie. I reviewer 
possono eseguire una review individuale prima del walkthrough, ma non è obbligatoria.</Text>
      <Text style={styles.bullet}>• Review tecnica. Una review tecnica è eseguita da reviewer tecnicamente qualificati ed è guidata 
da un moderatore. Gli obiettivi di una review tecnica sono: ottenere il consenso e prendere decisioni 
riguardo un problema tecnico, rilevare anomalie, valutare la qualità e creare fiducia nel prodotto di 
lavoro, generare nuove idee, motivare, consentire agli autori di migliorare.</Text>
      <Text style={styles.bullet}>• Ispezione. Le ispezioni sono il tipo di review più formale e seguono il processo generico in modo 
completo (si veda il paragrafo 3.2.2). L'obiettivo principale è trovare il maggior numero di anomalie. 
Altri obiettivi sono: valutare la qualità, creare fiducia nel prodotto di lavoro, motivare e permettere 
agli autori di migliorare. Le metriche vengono raccolte e utilizzate per migliorare il ciclo di vita dello 
sviluppo software, incluso il processo di ispezione. Nelle ispezioni, l'autore non può agire come 
review leader o scribe della review.</Text>
      <Text style={styles.subtitle}>3.2.5 Fattori di Successo per le Review</Text>
      <Text style={styles.bullet}>• Esistono diversi fattori che determinano il successo delle review, che includono:</Text>
      <Text style={styles.bullet}>• Definire obiettivi chiari e criteri di uscita misurabili. La valutazione dei partecipanti non dovrebbe 
mai essere un obiettivo</Text>
      <Text style={styles.bullet}>• Scegliere il tipo di review appropriato per raggiungere gli obiettivi prefissati e per adattarsi al tipo 
di prodotto di lavoro, ai partecipanti alla review, alle esigenze e al contesto del progetto</Text>
      <Text style={styles.bullet}>• Eseguire le review in piccole parti, in modo che i reviewer non perdano la concentrazione durante 
la review individuale e/o il review meeting (quando viene svolto)</Text>
      <Text style={styles.bullet}>• Fornire un feedback delle review agli stakeholder e agli autori, in modo che possano migliorare il 
prodotto e le loro attività (si veda il paragrafo 3.2.1)</Text>
      <Text style={styles.bullet}>• Fornire ai partecipanti un tempo adeguato per prepararsi alla review</Text>
      <Text style={styles.bullet}>• Avere il supporto del management per il processo di review</Text>
      <Text style={styles.bullet}>• Rendere le review parte della cultura dell'organizzazione, per promuovere l'apprendimento e il 
process improvement (miglioramento del processo)</Text>
      <Text style={styles.bullet}>• Fornire una formazione adeguata a tutti i partecipanti in modo che sappiano come svolgere il 
proprio ruolo</Text>
      <Text style={styles.bullet}>• Facilitare il review meeting</Text>
      
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