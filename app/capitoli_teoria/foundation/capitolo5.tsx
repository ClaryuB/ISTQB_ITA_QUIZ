import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Capitolo1Screen() {
  return (
    <View style={styles.wrapper}>
    <ScrollView style={styles.container}>
      <Text style={styles.title}>5. Gestione dei Test</Text>
      <Text style={styles.paragraph}>5. Gestione delle Attività di Test - 335 minuti{'\n'} 
Parole chiave{'\n'} 
analisi del rischio, approccio del test, controllo dei test, controllo del rischio, criteri di ingresso, criteri di 
uscita, defect management, defect report, identificazione del rischio, livello di rischio, mitigazione del 
rischio, monitoraggio dei test, monitoraggio del rischio, pianificazione dei test, piramide di test, quadranti 
del testing, rischio, rischio di prodotto, rischio di progetto, risk management, strategia di test, testing 
basato sul rischio, test completion report, test plan, test progress report, valutazione del rischio</Text>
      <Text style={styles.paragraph}>Obiettivi di Apprendimento per il Capitolo 5:</Text>
      <Text style={styles.subtitle}>5.4 Configuration Management</Text>
      <Text style={styles.paragraph}>FL-5.4.1{'\n'}  
(K2) Riassumere come il configuration management supporta il testing</Text>
      
      <Text style={styles.subtitle}>5.5 Defect Management</Text>
      <Text style={styles.paragraph}>FL-5.5.1{'\n'}  
(K3) Preparare un defect report</Text>
      
      <Text style={styles.subtitle}>5.1 Pianificazione dei Test</Text>

      <Text style={styles.subtitle}>5.1.1 Scopo e Contenuto di un Test Plan</Text>
      <Text style={styles.bullet}>• Un test plan descrive gli obiettivi dei test, le risorse e i processi di un progetto di test. Un test plan:</Text>
      <Text style={styles.bullet}>• Documenta i mezzi e la schedulazione per raggiungere gli obiettivi del testing</Text>
      <Text style={styles.bullet}>• Contribuisce a garantire che le attività di test eseguite soddisferanno i criteri stabiliti</Text>
      <Text style={styles.bullet}>• Serve come mezzo di comunicazione con i membri del team e gli altri stakeholder</Text>
      <Text style={styles.bullet}>• Dimostra che il testing aderirà alla politica di test e alla strategia di test esistenti (o spiega perché 
il testing devia da questi). 
La pianificazione dei test guida il pensiero dei tester e li costringe a confrontarsi con le sfide future relative 
ai rischi, alle schedulazioni, alle persone, agli strumenti, ai costi, agli effort, ecc. Il processo di preparazione 
di un test plan è un modo utile per riflettere sull’effort necessario per raggiungere gli obiettivi dei test. 
Il contenuto tipico di un test plan include:</Text>
      <Text style={styles.bullet}>• Contesto del testing (es. ambito dei test, obiettivi del testing, base di test)</Text>
      <Text style={styles.bullet}>• Assunzioni e vincoli del progetto di test</Text>
      <Text style={styles.bullet}>• Stakeholder (es. ruoli, responsabilità, rilevanza per il testing, esigenze di assunzione e formazione)</Text>
      <Text style={styles.bullet}>• Comunicazione (es. forme e frequenza di comunicazione, template di documentazione)</Text>
      <Text style={styles.bullet}>• Risk Register (es. rischi di prodotto, rischi di progetto)</Text>
      <Text style={styles.bullet}>• Approccio del test (es. livelli di test, tipi di test, tecniche di test, prodotti del test, criteri di ingresso 
e criteri di uscita, indipendenza del testing, metriche da raccogliere, requisiti dei dati di test, requisiti 
dell'ambiente di test, deviazioni dalla politica di test e dalla strategia di test)</Text>
      <Text style={styles.bullet}>• Budget e schedulazione 
Maggiori dettagli sul test plan e sul suo contenuto possono essere trovati nello standard ISO/IEC/IEEE 
29119-3.</Text>
      <Text style={styles.subtitle}>5.1.2 Contributo del Tester alla Pianificazione dell’Iterazione e alla Pianificazione della</Text>
      <Text style={styles.paragraph}>Release 
Nei cicli di vita dello sviluppo software iterativi, in genere si verificano due tipi di pianificazione: la 
pianificazione della release (release planning) e la pianificazione dell’iterazione (iteration planning).  
La pianificazione della release guarda alla release di un prodotto, definisce e ridefinisce il product backlog 
e può comportare il raffinamento delle user story più grandi in un insieme di user story più piccole. Serve 
anche come base per l'approccio del test e per il test plan in tutte le iterazioni. I tester coinvolti nella 
pianificazione della release partecipano alla scrittura delle user story e di criteri di accettazione testabili (si 
veda il paragrafo 4.5), partecipano all’analisi dei rischi di progetto e di qualità (si veda il paragrafo 5.2), 
stimano l'effort del test associato alle user story (si veda il paragrafo 5.1.4), determinano l'approccio del 
test e pianificano il testing per la release.</Text>
      
      <Text style={styles.paragraph}>La pianificazione dell'iterazione guarda alla fine di una singola iterazione e si occupa dell’iteration backlog. 
I tester coinvolti nella pianificazione dell'iterazione partecipano all'analisi dettagliata dei rischi delle user 
story, determinano la testabilità delle user story, suddividono le user story in task (attività), in particolare i 
task del testing, stimano l’effort per tutti i task del testing, identificano e raffinano gli aspetti funzionali e non 
funzionali dell'oggetto di test.</Text>
      <Text style={styles.subtitle}>5.1.3 Criteri di Ingresso e Criteri di Uscita</Text>
      <Text style={styles.paragraph}>I criteri di ingresso definiscono le precondizioni per iniziare una determinata attività. Se i criteri di ingresso 
non sono soddisfatti, è probabile che l'attività si riveli essere più difficile, dispendiosa in termini di tempi e 
costi, e rischiosa. I criteri di uscita definiscono che cosa deve essere raggiunto per dichiarare un'attività 
completata. I criteri di ingresso e i criteri di uscita dovrebbero essere definiti per ogni livello di test, e variano 
in base agli obiettivi del testing. 
Criteri di ingresso tipici includono: disponibilità delle risorse (es. persone, strumenti, ambienti, dati di test, 
budget, tempo), disponibilità del testware (es. base di test, requisiti testabili, user story, test case) e livello 
di qualità iniziale di un oggetto di test (es. tutti gli smoke test sono stati superati). 
Criteri di uscita tipici includono: misure di completezza (es. livello di copertura raggiunto, numero di difetti 
non risolti, densità dei difetti, numero di test case falliti) e criteri binari “sì/no” (es. i test pianificati sono stati 
eseguiti, il testing statico è stato eseguito, tutti i difetti trovati sono stati segnalati, tutti i regression test sono 
stati automatizzati). 
Anche l’esaurimento del tempo disponibile o del budget possono essere considerati criteri di uscita validi. 
Anche senza che siano soddisfatti altri criteri di uscita, può essere accettabile terminare il testing in queste 
circostanze, se gli stakeholder hanno eseguito la review e accettato il rischio di andare in produzione senza 
ulteriore testing.  
Nello sviluppo software Agile, i criteri di uscita sono spesso chiamati Definition of Done, e definiscono le 
metriche oggettive del team per un elemento rilasciabile. I criteri di ingresso che una user story deve 
soddisfare per iniziare le attività di sviluppo e/o di test sono chiamati Definition of Ready.</Text>
      <Text style={styles.subtitle}>5.1.4 Tecniche di Stima</Text>
      <Text style={styles.paragraph}>La stima dell’effort del test consiste nel prevedere la quantità di lavoro relativo al testing necessario per 
raggiungere gli obiettivi dei test di un progetto di test. È importante chiarire agli stakeholder che la stima si 
basa su una serie di assunzioni ed è sempre soggetta a errori di stima. La stima per piccoli task è 
generalmente più accurata di quella per grandi task. Pertanto, quando si stima un task di grandi dimensioni, 
può essere decomposto in un insieme di task più piccoli, che a loro volta possono essere stimati. 
In questo Syllabus vengono descritte le seguenti quattro tecniche di stima. 
Stima basata su valori statistici. In questa tecnica metrics-based (basata su metriche) i dati vengono 
raccolti da progetti precedenti all'interno dell'organizzazione, e questo permette di derivare valori statistici 
"standard" per progetti similari. I valori statistici dei progetti dell'organizzazione (es. ricavati dai dati storici) 
sono generalmente la fonte migliore da utilizzare nel processo di stima. Queste statistiche standard 
possono poi essere utilizzate per stimare l'effort del test per il nuovo progetto. Ad esempio, se nel progetto 
precedente il rapporto dell’effort dello sviluppo rispetto all’effort del test era di 3:2, e nel progetto attuale si 
prevede che l’effort dello sviluppo sia 600 giorni-persona, allora l’effort del test può essere stimato in 400 
giorni-persona.</Text>
      
      <Text style={styles.paragraph}>Estrapolazione. In questa tecnica metrics-based le misure vengono effettuate nelle prime fasi del progetto 
attuale per poter raccogliere i dati. Avendo un numero sufficiente di osservazioni, l’effort richiesto per il 
lavoro rimanente può essere approssimato estrapolando questi dati (di solito applicando un modello 
matematico). Questo metodo è molto adatto ai cicli di vita iterativi. Ad esempio, il team può estrapolare 
l’effort del test nella prossima iterazione come valore medio dell’effort relativo alle ultime tre iterazioni. 
Wideband Delphi. In questa tecnica expert-based (basata su esperti) iterativa, gli esperti effettuano stime 
basate sull'esperienza. Ogni esperto stima l’effort in autonomia. I risultati vengono raccolti e se esistono 
deviazioni dalla stima di un esperto che non rientrano nei limiti concordati, gli esperti discutono le loro stime 
attuali. A ciascun esperto viene quindi chiesto di effettuare una nuova stima sulla base di questo feedback, 
sempre in autonomia. Questo processo viene ripetuto finché non si raggiunge un consenso. Planning Poker  
è una variante di Wideband Delphi, comunemente utilizzata nello sviluppo software Agile. Nel Planning 
Poker le stime vengono solitamente effettuate utilizzando carte con numeri che rappresentano la 
dimensione dell’effort. 
Three-point estimation (stima dei tre punti). In questa tecnica expert-based, gli esperti effettuano tre 
stime: la stima più ottimistica (a), la stima più probabile (m) e la stima più pessimistica (b). La stima finale 
(E) è la loro media aritmetica pesata. Nella versione più popolare di questa tecnica, la stima viene calcolata 
come E = (a + 4*m + b) / 6. Il vantaggio di questa tecnica è che permette agli esperti di calcolare l'errore di 
misura: SD = (b - a) / 6. Ad esempio, se le stime (in ore-persona) sono: a=6, m=9 e b=18, la stima finale è 
di 10 ± 2 ore-persona (cioè, tra 8 e 12 ore-persona), perché  
E = (6 + 4*9 + 18) / 6 = 10 
SD = (18 - 6) / 6 = 2. 
Per queste e molte altre tecniche di stima del test, si veda (Kan 2003, Koomen 2006, Westfall 2009).</Text>
      <Text style={styles.subtitle}>5.1.5 Prioritizzazione dei Test Case</Text>
      <Text style={styles.bullet}>• Una volta che i test case e le procedure di test vengono specificati e organizzati in test suite, queste test 
suite possono essere organizzate in una schedulazione di esecuzione dei test che definisce l'ordine in cui 
devono essere eseguite. Quando si prioritizzano i test case, possono essere presi in considerazione diversi 
fattori. Le strategie di prioritizzazione dei test case più comunemente utilizzate sono le seguenti:</Text>
      <Text style={styles.bullet}>• Prioritizzazione basata sul rischio, dove l'ordine di esecuzione dei test si basa sui risultati 
dell'analisi del rischio (si veda il paragrafo 5.2.3). I test case che coprono i rischi più importanti 
vengono eseguiti per primi.</Text>
      <Text style={styles.bullet}>• Prioritizzazione basata sulla copertura, dove l'ordine di esecuzione dei test si basa sulla 
copertura (es. la copertura delle istruzioni). I test case che raggiungono la copertura più elevata 
vengono eseguiti per primi. In un'altra variante, chiamata prioritizzazione della copertura 
aggiuntiva, il test case che raggiunge la copertura più alta viene eseguito per primo; ogni test case 
successivo è quello che raggiunge la copertura aggiuntiva più elevata.</Text>
      <Text style={styles.bullet}>• Prioritizzazione basata sui requisiti, dove l'ordine di esecuzione dei test si basa sulle priorità dei 
requisiti tracciati rispetto ai test case corrispondenti. Le priorità dei requisiti vengono definite dagli 
stakeholder. I test case relativi ai requisiti più importanti vengono eseguiti per primi. 
Idealmente, i test case dovrebbero essere ordinati per l’esecuzione in base al loro livello di priorità 
utilizzando, ad esempio, una delle strategie di prioritizzazione sopra menzionate. Tuttavia, questa pratica 
può non funzionare se i test case o le funzionalità da testare hanno delle dipendenze. Se un test case con</Text>
      
      <Text style={styles.paragraph}>priorità più alta dipende da un test case con priorità più bassa, il test case con priorità più bassa deve 
essere eseguito prima.  
L'ordine di esecuzione dei test deve tenere conto anche della disponibilità delle risorse. Ad esempio, gli 
strumenti di test richiesti, gli ambienti di test o le persone che possono essere disponibili solo per una 
specifica finestra temporale.</Text>
      <Text style={styles.subtitle}>5.1.6 La Piramide di Test</Text>
      <Text style={styles.paragraph}>La piramide di test è un modello che mostra che test differenti possono avere granularità differenti. Il 
modello della piramide di test supporta il team nella test automation e nell'allocazione dell’effort del test, 
mostrando che obiettivi di test differenti sono supportati da livelli differenti di test automation. I livelli della 
piramide rappresentano gruppi di test. Più alto è il livello, minori sono la granularità del test e l'isolamento 
del test (cioè, il grado di dipendenza da altri elementi del sistema) e maggiori sono i tempi di esecuzione 
dei test. I test del livello inferiore sono piccoli, isolati, veloci e verificano una piccola parte della funzionalità; 
quindi, di solito servono molti test per ottenere una copertura ragionevole. Il livello superiore rappresenta 
test complessi, di alto livello, end-to-end. Questi test di alto livello sono in genere più lenti dei test dei livelli 
inferiori e verificano di solito una gran parte della funzionalità; quindi, di solito bastano pochi test per 
ottenere un livello di copertura ragionevole. Il numero e la denominazione dei livelli possono variare. Ad 
esempio, il modello originale della piramide di test (Cohn 2009) definisce tre livelli: "unit test", "service test" 
e "UI test". Un altro modello molto diffuso definisce unit test (test di componente), test di integrazione (dei 
componenti) e test end-to-end. Si possono utilizzare anche altri livelli di test (si veda il paragrafo 2.2.1).</Text>
      <Text style={styles.subtitle}>5.1.7 Quadranti del Testing</Text>
      <Text style={styles.bullet}>• I quadranti del testing, definiti da Brian Marick (Marick 2003, Crispin 2008), raggruppano i livelli di test con 
i tipi di test, le attività, le tecniche di test e i prodotti di lavoro appropriati nello sviluppo software Agile. Il 
modello supporta il test management nel visualizzarli, per garantire che tutti i tipi di test e i livelli di test 
appropriati siano inclusi nel ciclo di vita dello sviluppo software, e nel capire che alcuni tipi di test sono più 
rilevanti per determinati livelli di test rispetto ad altri. Questo modello fornisce anche un modo per 
differenziare e descrivere i tipi di test a tutti gli stakeholder, compresi gli sviluppatori, i tester e i 
rappresentanti di business.  
In questo modello, i test possono essere orientati al business oppure orientati alla tecnologia. I test possono 
anche supportare il team (cioè guidare lo sviluppo) o criticare il prodotto (cioè misurare il suo 
comportamento rispetto alle aspettative). La combinazione di questi due punti di vista determina i quattro 
quadranti:</Text>
      <Text style={styles.bullet}>• Quadrante Q1 (orientato alla tecnologia e a supporto del team). Questo quadrante contiene test 
di componente e test di integrazione dei componenti. Questi test dovrebbero essere automatizzati 
e inclusi nel processo di Continuous Integration.</Text>
      <Text style={styles.bullet}>• Quadrante Q2 (orientato al business e a supporto del team). Questo quadrante contiene test 
funzionali, esempi, test di user story, prototipi di user experience (UX), testing delle API e 
simulazioni. Questi test verificano i criteri di accettazione e possono essere manuali o 
automatizzati.</Text>
      <Text style={styles.bullet}>• Quadrante Q3 (orientato al business e a critica del prodotto). Questo quadrante contiene test 
esplorativi, test di usabilità, e user acceptance test. Questi test sono orientati all'utente e sono 
spesso manuali.</Text>
      
      <Text style={styles.bullet}>• Quadrante Q4 (orientato alla tecnologia e a critica del prodotto). Questo quadrante contiene smoke 
test e test non funzionali (eccetto i test di usabilità). Questi test sono spesso automatizzati.</Text>
      <Text style={styles.subtitle}>5.2 Risk Management</Text>
      <Text style={styles.bullet}>• Le organizzazioni devono affrontare molti fattori interni ed esterni che rendono incerto se e quando 
raggiungeranno i loro obiettivi (ISO 31000). Il risk management permette alle organizzazioni di aumentare 
la probabilità di raggiungere gli obiettivi, migliorare la qualità dei loro prodotti e aumentare la confidenza e 
la fiducia degli stakeholder.  
Le principali attività di risk management sono:</Text>
      <Text style={styles.bullet}>• Analisi del rischio (che consiste nell'identificazione del rischio e nella valutazione del rischio; si 
veda il paragrafo 5.2.3)</Text>
      <Text style={styles.bullet}>• Controllo del rischio (che consiste nella mitigazione del rischio e nel monitoraggio del rischio; si 
veda il paragrafo 5.2.4) 
L'approccio del test, in cui vengono selezionate, prioritizzate e gestite le attività di test in base all'analisi del 
rischio e al controllo del rischio, è chiamato testing basato sul rischio.</Text>
      <Text style={styles.subtitle}>5.2.1 Definizione di Rischio e Attributi del Rischio</Text>
      <Text style={styles.bullet}>• Il rischio è un evento potenziale, un pericolo (hazard), una minaccia o una situazione il cui verificarsi 
provoca un effetto negativo. Un rischio può essere caratterizzato da due fattori:</Text>
      <Text style={styles.bullet}>• Probabilità del rischio - La probabilità di accadimento del rischio (maggiore di zero e minore di 
uno)</Text>
      <Text style={styles.bullet}>• Impatto del rischio (danno) - Le conseguenze di questo accadimento 
Questi due fattori esprimono il livello di rischio, che è una misura del rischio. Più alto è il livello di rischio, 
più importante è la sua gestione.</Text>
      <Text style={styles.subtitle}>5.2.2 Rischi di Progetto e Rischi di Prodotto</Text>
      <Text style={styles.bullet}>• Nel testing del software vengono considerati generalmente due tipi di rischio: rischi di progetto e i rischi di 
prodotto. 
I rischi di progetto sono relativi alla gestione e al controllo del progetto. I rischi di progetto includono:</Text>
      <Text style={styles.bullet}>• Problemi organizzativi (es. ritardi nel rilascio dei prodotti di lavoro, stime non accurate, tagli dei 
costi)</Text>
      <Text style={styles.bullet}>• Problemi legati alle persone (es. competenze insufficienti, conflitti, problemi di comunicazione, 
carenza di personale)</Text>
      <Text style={styles.bullet}>• Problemi tecnici (es. scope creep, scarso supporto degli strumenti)</Text>
      <Text style={styles.bullet}>• Problemi con i fornitori (es. mancato rilascio da terze parti, fallimento dell'azienda fornitrice) 
I rischi di progetto, quando si verificano, possono avere un impatto sulla schedulazione, sul budget o 
sull'ambito del progetto, che influisce sulla capacità del progetto di raggiungere gli obiettivi.</Text>
      
      <Text style={styles.bullet}>• I rischi di prodotto sono relativi alle caratteristiche di qualità del prodotto (es. descritte nel modello di 
qualità ISO 25010). Esempi di rischi di prodotto sono: funzionalità mancanti o errate, calcoli errati, errori di 
runtime, architettura insufficiente, algoritmi inefficienti, tempi di risposta non adeguati, scarsa user 
experience (UX), vulnerabilità della sicurezza. I rischi di prodotto, quando si verificano, possono portare a 
diverse conseguenze negative, che includono:</Text>
      <Text style={styles.bullet}>• Insoddisfazione degli utenti</Text>
      <Text style={styles.bullet}>• Perdita di fatturato, fiducia e reputazione</Text>
      <Text style={styles.bullet}>• Danni a terze parti</Text>
      <Text style={styles.bullet}>• Elevati costi di manutenzione, sovraccarico dell'help desk</Text>
      <Text style={styles.bullet}>• Sanzioni penali</Text>
      <Text style={styles.bullet}>• In casi estremi, danni fisici, lesioni o addirittura morte</Text>
      <Text style={styles.subtitle}>5.2.3 Analisi dei Rischi di Prodotto</Text>
      <Text style={styles.bullet}>• Dal punto di vista del testing, l'obiettivo dell'analisi dei rischi di prodotto è quello di fornire una 
consapevolezza del rischio del prodotto, per poter focalizzare l’effort di test in modo da minimizzare il livello 
residuo del rischio di prodotto. Idealmente, l'analisi dei rischi di prodotto inizia nelle prime fasi del ciclo di 
vita dello sviluppo software. 
L'analisi dei rischi di prodotto consiste nell'identificazione del rischio e nella valutazione del rischio. 
L'identificazione del rischio consiste nel generare un elenco completo dei rischi. Gli stakeholder possono 
identificare i rischi utilizzando diverse tecniche e strumenti, per esempio brainstorming, workshop, interviste 
o diagrammi causa-effetto. La valutazione del rischio comporta: la categorizzazione dei rischi identificati, 
la valutazione della probabilità, dell'impatto e del livello di rischio, la prioritizzazione dei rischi e la proposta 
di azioni per gestirli. La categorizzazione aiuta ad assegnare le azioni di mitigazione, perché di solito i rischi 
che rientrano nella stessa categoria possono essere mitigati utilizzando un approccio similare.  
La valutazione del rischio può utilizzare un approccio quantitativo o qualitativo, o un mix di questi. 
Nell'approccio quantitativo il livello di rischio è calcolato come moltiplicazione della probabilità del rischio e 
dell'impatto del rischio. Nell'approccio qualitativo il livello di rischio può essere determinato utilizzando una 
matrice del rischio. 
L'analisi dei rischi di prodotto può influenzare l'accuratezza e l’ambito dei test. I suoi risultati vengono 
utilizzati per:</Text>
      <Text style={styles.bullet}>• Determinare l'ambito dei test da eseguire</Text>
      <Text style={styles.bullet}>• Determinare i livelli di test particolari e proporre i tipi di test da eseguire</Text>
      <Text style={styles.bullet}>• Determinare le tecniche di test da applicare e la copertura da raggiungere</Text>
      <Text style={styles.bullet}>• Stimare l'effort del test richiesto per ogni attività</Text>
      <Text style={styles.bullet}>• Prioritizzare il testing nel tentativo di rilevare i difetti critici il più presto possibile</Text>
      <Text style={styles.bullet}>• Determinare se in aggiunta al testing potrebbero essere utilizzate attività aggiuntive per ridurre il 
rischio</Text>
      
      <Text style={styles.subtitle}>5.2.4 Controllo dei Rischi di Prodotto</Text>
      <Text style={styles.bullet}>• Il controllo dei rischi di prodotto comprende tutte le misure che vengono prese in risposta ai rischi di prodotto 
identificati e valutati. Il controllo dei rischi di prodotto consiste nella mitigazione del rischio e nel 
monitoraggio del rischio. La mitigazione del rischio comporta l'implementazione delle azioni proposte 
durante la valutazione del rischio, per ridurre il livello di rischio. L'obiettivo del monitoraggio del rischio è 
garantire che le azioni di mitigazione siano efficaci, ottenere ulteriori informazioni per migliorare la 
valutazione del rischio, e identificare i rischi emergenti. 
Una volta analizzato il rischio, sono possibili diverse opzioni di risposta al rischio, per esempio la 
mitigazione del rischio attraverso il testing, l'accettazione del rischio, il trasferimento del rischio o un 
contingency plan (Veenendaal 2012). Le azioni che possono essere intraprese per mitigare i rischi di 
prodotto attraverso il testing sono le seguenti:</Text>
      <Text style={styles.bullet}>• Selezionare i tester con il giusto livello di esperienza e competenza, adeguati a un determinato tipo 
di rischio</Text>
      <Text style={styles.bullet}>• Applicare un livello appropriato di indipendenza del testing</Text>
      <Text style={styles.bullet}>• Eseguire review e analisi statica</Text>
      <Text style={styles.bullet}>• Applicare le tecniche di test e i livelli di copertura appropriati</Text>
      <Text style={styles.bullet}>• Applicare i tipi di test più appropriati per le caratteristiche di qualità desiderate</Text>
      <Text style={styles.bullet}>• Eseguire il testing dinamico, che include il regression testing</Text>
      <Text style={styles.subtitle}>5.3 Monitoraggio dei Test, Controllo dei Test e Completamento dei Test</Text>
      <Text style={styles.bullet}>• Il monitoraggio dei test si occupa di raccogliere informazioni sul testing. Queste informazioni vengono 
utilizzate per valutare l'avanzamento del test e per misurare se i criteri di uscita o le attività di test associate 
ai criteri di uscita sono stati soddisfatti, come il raggiungimento degli obiettivi di copertura dei rischi di 
prodotto, dei requisiti o dei criteri di accettazione. 
Il controllo dei test utilizza le informazioni ottenute dal monitoraggio dei test per fornire, sotto forma di 
direttive di controllo, una guida e le azioni correttive necessarie per ottenere il testing più efficace ed 
efficiente. Esempi di direttive di controllo includono:</Text>
      <Text style={styles.bullet}>• Riprioritizzare i test quando un rischio identificato diventa un problema</Text>
      <Text style={styles.bullet}>• Rivalutare se un elemento di test soddisfa i criteri di ingresso o i criteri di uscita a causa di un 
rework</Text>
      <Text style={styles.bullet}>• Adattare la schedulazione dei test per indirizzare un ritardo nel rilascio dell'ambiente di test</Text>
      <Text style={styles.bullet}>• Aggiungere nuove risorse quando e dove necessario 
Il completamento dei test raccoglie i dati delle attività di test completate per consolidare l'esperienza, il 
testware e qualsiasi altra informazione rilevante. Le attività di completamento dei test vengono eseguite al 
raggiungimento delle milestone di progetto, come il completamento di un livello di test, la conclusione di 
un'iterazione Agile, il completamento (o la cancellazione) di un progetto di test, il rilascio di un sistema 
software o il completamento di una release di manutenzione.</Text>
      
      <Text style={styles.subtitle}>5.3.1 Metriche Utilizzate nel Testing</Text>
      <Text style={styles.bullet}>• Le metriche di test vengono raccolte per valutare l’avanzamento rispetto alla schedulazione dei test e al 
budget pianificati, la qualità attuale dell'oggetto di test, e l'efficacia delle attività di test rispetto allo scopo di 
un'iterazione oppure agli obiettivi dei test. Il monitoraggio dei test colleziona una varietà di metriche per 
supportare il controllo dei test e il completamento dei test.  
Le metriche di test comuni includono:</Text>
      <Text style={styles.bullet}>• Metriche di avanzamento del progetto (es. completamento dei task, utilizzo delle risorse, effort del 
test)</Text>
      <Text style={styles.bullet}>• Metriche di avanzamento del test (es. avanzamento dell'implementazione dei test case, 
avanzamento della preparazione dell'ambiente di test, numero di test case eseguiti/non eseguiti, 
superati/falliti, tempo di esecuzione dei test)</Text>
      <Text style={styles.bullet}>• Metriche di qualità del prodotto (es. disponibilità, tempi di risposta, mean time to failure)</Text>
      <Text style={styles.bullet}>• Metriche dei difetti (es. numero e priorità dei difetti trovati/risolti, densità dei difetti, percentuale di 
rilevamento dei difetti)</Text>
      <Text style={styles.bullet}>• Metriche di rischio (es. livello di rischio residuo)</Text>
      <Text style={styles.bullet}>• Metriche di copertura (es. copertura dei requisiti, copertura del codice)</Text>
      <Text style={styles.bullet}>• Metriche di costo (es. costo del testing, costo della qualità dell’organizzazione).</Text>
      <Text style={styles.subtitle}>5.3.2 Scopo, Contenuto e Destinatari dei Test Report</Text>
      <Text style={styles.bullet}>• La reportistica dei test riassume e comunica le informazioni dei test durante e dopo il testing. I test progress 
report supportano il controllo continuo dei test e devono fornire informazioni sufficienti per apportare 
modifiche alla schedulazione dei test, alle risorse o al test plan, quando tali modifiche sono necessarie a 
causa di deviazioni dal piano o di circostanze mutate. I test completion report riassumono un’attività di test 
specifica (es. livello di test, ciclo di test, iterazione) e possono fornire informazioni per il testing successivo.  
Durante il monitoraggio dei test e il controllo dei test, il team di test genera test progress report per gli 
stakeholder, per tenerli informati. I test progress report sono solitamente generati su base regolare (es. 
giornalmente, settimanalmente, ecc.) e includono:</Text>
      <Text style={styles.bullet}>• Periodo del testing</Text>
      <Text style={styles.bullet}>• Stato di avanzamento del test (es. in anticipo o in ritardo rispetto alla schedulazione), incluse 
eventuali deviazioni degne di nota</Text>
      <Text style={styles.bullet}>• Impedimenti per il testing e relativi workaround</Text>
      <Text style={styles.bullet}>• Metriche di test (si veda il paragrafo 5.3.1 per gli esempi)</Text>
      <Text style={styles.bullet}>• Rischi nuovi e modificati durante il periodo del testing</Text>
      <Text style={styles.bullet}>• Testing pianificato per il prossimo periodo 
Un test completion report viene preparato durante il completamento dei test, quando un progetto, un 
livello di test o un tipo di test è completo e quando, idealmente, i criteri di uscita sono stati soddisfatti. 
Questo report utilizza i test progress report e altri dati. I tipici test completion report includono:</Text>
      
      <Text style={styles.bullet}>• Riassunto del test</Text>
      <Text style={styles.bullet}>• Valutazione del testing e della qualità del prodotto in base al test plan originale (cioè, obiettivi del 
testing e criteri di uscita)</Text>
      <Text style={styles.bullet}>• Deviazioni dal test plan (es. differenze rispetto alla schedulazione, alla durata e all’effort dei test 
pianificati)</Text>
      <Text style={styles.bullet}>• Testing degli impedimenti e workaround</Text>
      <Text style={styles.bullet}>• Metriche di test basate sui test progress report</Text>
      <Text style={styles.bullet}>• Rischi non mitigati, difetti non risolti</Text>
      <Text style={styles.bullet}>• Lessons learned rilevanti per il testing 
I diversi destinatari richiedono informazioni differenti nei report e influenzano il grado di formalità e la 
frequenza della reportistica dei test. La reportistica dell’avanzamento del test agli altri membri dello stesso 
team è spesso frequente e informale, mentre la reportistica sul completamento dei test segue un template 
prestabilito e avviene una volta sola.  
Lo standard ISO/IEC/IEEE 29119-3 include template ed esempi per i test progress report (chiamati test 
status report) e test completion report.</Text>
      <Text style={styles.subtitle}>5.3.3 Comunicare lo Stato del Testing</Text>
      <Text style={styles.bullet}>• Il mezzo migliore per comunicare lo stato del testing varia, in base alle esigenze di test management, alle 
strategie di test dell'organizzazione, agli standard normativi o, in caso di team auto-organizzati (si veda il 
paragrafo 1.5.2), al team stesso. Le opzioni includono:</Text>
      <Text style={styles.bullet}>• Comunicazione verbale con i membri del team e gli altri stakeholder</Text>
      <Text style={styles.bullet}>• Dashboard (es. dashboard CI/CD, taskboard e burn-down chart)</Text>
      <Text style={styles.bullet}>• Canali di comunicazione elettronica (es. e-mail, chat)</Text>
      <Text style={styles.bullet}>• Documentazione online</Text>
      <Text style={styles.bullet}>• Test report formali (si veda il paragrafo 5.3.2) 
È possibile utilizzare una o più di queste opzioni. Una comunicazione più formale può essere più 
appropriata per i team distribuiti, dove la comunicazione diretta face-to-face non è sempre possibile, a 
causa della distanza geografica o delle differenze di fuso orario. In genere, stakeholder differenti sono 
interessati a differenti tipi di informazione, quindi dovrebbe essere fatto un tailoring della comunicazione.</Text>
      <Text style={styles.subtitle}>5.4 Configuration Management</Text>
      <Text style={styles.paragraph}>Nel testing, il Configuration Management (CM) fornisce una disciplina per l'identificazione, il controllo e il 
monitoraggio, come elementi (item) di configurazione, dei prodotti di lavoro come test plan, strategie di test, 
condizioni di test, test case, test script, risultati dei test, test log e test report.  
Per un configuration item complesso (es. un ambiente di test), il configuration management registra i 
configuration item che lo compongono, le loro relazioni e versioni. Se il configuration item viene approvato</Text>
      
      <Text style={styles.bullet}>• per il testing, diventa una baseline e può essere modificato solo attraverso un processo formale di controllo 
delle modifiche (change control). 
Il configuration management mantiene un record dei configuration item modificati quando viene creata una 
nuova baseline. È possibile tornare a una baseline precedente per riprodurre i risultati dei test precedenti. 
Per supportare adeguatamente il testing, il configuration management garantisce quanto segue:</Text>
      <Text style={styles.bullet}>• Tutti i configuration item, compresi gli elementi del test (singole parti dell'oggetto di test), sono 
identificati in modo univoco, controllati nella versione, tracciati per le modifiche, e correlati ad altri 
configuration item in modo da mantenere la tracciabilità durante l'intero processo di test</Text>
      <Text style={styles.bullet}>• Tutti gli elementi di documentazione e gli elementi software identificati sono referenziati senza 
ambiguità nel testware 
Continuous Integration, Continuous Delivery, Continuous Deployment e il testing associato sono 
generalmente implementati come parte di una pipeline automatizzata DevOps (si veda il paragrafo 2.1.4), 
in cui è normalmente incluso il configuration management automatizzato.</Text>
      <Text style={styles.subtitle}>5.5 Defect Management</Text>
      <Text style={styles.bullet}>• Poiché uno dei principali obiettivi del testing è trovare i difetti, un processo di defect management è 
essenziale. Si fa riferimento ai “difetti", anche se le anomalie segnalate possono rivelarsi veri e propri difetti 
oppure qualcos'altro (ad esempio, un risultato falso positivo, una change request). Questo viene risolto 
durante il processo di gestione dei defect report. Le anomalie possono essere segnalate in qualsiasi fase 
del ciclo di vita dello sviluppo software, in una forma che dipende dal ciclo di vita. Come minimo, il processo 
di defect management include un workflow per la gestione dei singoli difetti o delle singole anomalie, dalla 
loro scoperta alla loro chiusura, e le regole per la loro classificazione. Il workflow comprende tipicamente 
le attività per il log delle anomalie segnalate, la loro analisi e classificazione, la decisione sul fixing del bug 
individuato o lasciarlo nello stato in cui si trova, e infine la chiusura del defect report. Il processo deve 
essere seguito da tutti gli stakeholder coinvolti. È consigliabile gestire i difetti derivanti dal testing statico (in 
particolare l'analisi statica) in modo similare.  
I defect report tipici hanno i seguenti obiettivi:</Text>
      <Text style={styles.bullet}>• Fornire le informazioni sufficienti ai responsabili della gestione e della risoluzione dei difetti 
segnalati, per poter risolvere il problema</Text>
      <Text style={styles.bullet}>• Fornire un mezzo per monitorare la qualità del prodotto di lavoro</Text>
      <Text style={styles.bullet}>• Fornire idee per il miglioramento del processo di sviluppo e test 
Un defect report creato durante il testing dinamico di solito include:</Text>
      <Text style={styles.bullet}>• Un identificativo univoco</Text>
      <Text style={styles.bullet}>• Il titolo con un breve riassunto dell'anomalia segnalata</Text>
      <Text style={styles.bullet}>• La data di apertura del defect report, l’organizzazione, l’autore e il ruolo di chi ha segnalato il difetto</Text>
      <Text style={styles.bullet}>• L’identificativo dell'oggetto di test e dell'ambiente di test</Text>
      
      <Text style={styles.bullet}>• Il contesto del difetto (es. il test case che ha rilevato l’anomalia, l’attività di test e la fase del ciclo di 
vita dello sviluppo software in corso, e altre informazioni rilevanti come la tecnica di test, la checklist 
o i dati di test utilizzati)</Text>
      <Text style={styles.bullet}>• Una descrizione del failure per consentirne la riproduzione e la risoluzione, compresi i passi del 
test che hanno rilevato l'anomalia e i test log rilevanti, dump del database, screenshot o 
registrazioni pertinenti</Text>
      <Text style={styles.bullet}>• Risultato atteso e risultato effettivo</Text>
      <Text style={styles.bullet}>• Severità del difetto (grado di impatto) sugli interessi degli stakeholder o sui requisiti</Text>
      <Text style={styles.bullet}>• Priorità della correzione</Text>
      <Text style={styles.bullet}>• Stato del difetto (es. aperto, differito, duplicato, in attesa di risoluzione, in attesa di testing 
confermativo, riaperto, chiuso, rifiutato)</Text>
      <Text style={styles.bullet}>• Riferimenti (es. il test case la cui esecuzione ha rilevato l’anomalia) 
Alcuni di questi dati possono essere inclusi automaticamente quando si utilizzano strumenti di defect 
management (es. identificativo, data, autore e stato iniziale). I template di documento per un defect report 
e un esempio di defect report possono essere trovati nello standard ISO/IEC/IEEE 29119-3, che fa 
riferimento ai defect report come incident report.</Text>
      
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