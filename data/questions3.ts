import { Question } from '../types/Question';

const questions1: Question[] = [
 {
  "id": "1",
  "domanda": "Quale dei seguenti è un tipico obiettivo del test?",
  "opzioni": [
   "Valida re che i requisiti documentati siano soddisfatti",
   "Causare failure e identificare difetti",
   "Generare errori e identificare le root cause",
   "Verificare che l'oggetto di test soddisfi le aspettative dell'utente"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "2",
  "domanda": "Quale delle seguenti affermazioni descrive MEGLIO la differenza tra testing e debugging?",
  "opzioni": [
   "Il testing genera failure, mentre il debugging corregge i failure",
   "Il testing è un'attività negativa, mentre il debugging è un'attività positiva",
   "Il testing determina l'esistenza di difetti, mentre il debugging elimina i difetti",
   "Il testing individua la causa dei difetti, mentre il debugging risolve la caus a dei difetti"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "3",
  "domanda": "\"L'assenza di difetti è un’idea sbagliata\" è uno dei principi del testing. Quale dei seguenti è un esempio di applicazione pratica di questo principio?",
  "opzioni": [
   "Spiegare che non è possibile che il testing dimostri l'assenza di difetti",
   "Supportare gli utenti finali nell'esecuzione del testing di accettazione",
   "Garantire che non rimangano difetti di implementazione nel sistema rilasciato",
   "Modificare i test che non generano failure per garantire che rimangano pochi difetti"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "4",
  "domanda": "Quali DUE delle seguenti attività di test richiede con PIÙ probabil ità l'applicazione dell'analisi ai valori limite e del partizionamento di equivalenza?",
  "opzioni": [
   "Implementazione dei test",
   "Progettazione dei test",
   "Esecuzione dei test",
   "Monitoraggio dei test",
   "Analisi dei test"
  ],
  "corretta": [
   "b",
   "e"
  ]
 },
 {
  "id": "5",
  "domanda": "Dato il seguente testware: 1. Elementi di copertura 2. Change request 3. Schedulazione dell’esecuzione dei test 4. Condizioni di test prioritizzate E le seguenti attività di test: A. Analisi dei test B. Progettazione dei test C. Implementazione dei test D. Completamento dei test Quale delle seguenti risposte è la MIGLIO RE combinazione del testware prodotto dalle attività?",
  "opzioni": [
   "1B, 2D, 3C, 4A",
   "1B, 2D, 3A, 4C",
   "1D, 2C, 3A, 4B",
   "1D, 2C, 3B, 4A"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "6",
  "domanda": "Quale delle seguenti affermazioni sui diversi ruoli del testing è PIÙ probabile che sia CORRETTA?",
  "opzioni": [
   "Nello sviluppo software Agile, il ruolo di test management è responsabilità primaria del team, mentre il ruolo di testing è responsabilità primaria di un singolo individuo esterno al team",
   "Il ruolo di testing è principalmente responsabile del monitoraggio e controllo dei test, mentre il ruolo di test management è principalmente responsabile della pianificazione dei test e del completamento dei test",
   "Nello sviluppo software Agile, le attività di test management che riguardano più team sono gestite da un test manager esterno al team, mentre alcune attività di test management sono gestite dal team stesso",
   "Il ruolo di test management è principalmente responsabile dell'analisi dei test e della"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "7",
  "domanda": "Quale dei seguenti è un vantaggio dell’approccio whole-team?",
  "opzioni": [
   "Team senza tester",
   "Dinamiche del team migliorate",
   "Membri del team speciali sti",
   "Team di dimensioni maggiori"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "8",
  "domanda": "Quale delle seguenti affermazioni sull'indipendenza del testing è CORRETTA?",
  "opzioni": [
   "I tester indipendenti rileveranno i difetti grazie a una prospettiva tecnica differente d alla prospettiva de gli sviluppatori, ma la loro indipendenza può portare a un rapporto conflittuale con gli sviluppatori",
   "La familiarità degli sviluppatori con il proprio codice fa sì che rileveranno solo pochi difetti, ma il loro background software condiviso con i tester fa sì che questi difetti vengano rilevati anche dai tester",
   "Il testing indipendente richiede tester esterni al team di sviluppo e idealmente esterni all'organizzazione, ma questi tester hanno difficoltà a comprendere il dominio dell'applicazione",
   "I tester esterni al team di sviluppo sono più indipendenti d ei tester all’interno del team,"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "9",
  "domanda": "Quale delle seguenti è una buona pratica del testing che si applica a tutti i cicli di vita dello sviluppo software?",
  "opzioni": [
   "Per ogni livello di test, esiste un corrispondente livello di sviluppo",
   "Per ogni obiettivo di test, esiste un corrispondente obiettivo di sviluppo",
   "Per ogni attività di test del software, esiste una corrispondente attività dell’utente",
   "Per ogni attività di sviluppo software, esiste una corrispondente attività di test"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "10",
  "domanda": "Quale dei seguenti è un esempio di approccio test-first allo sviluppo?",
  "opzioni": [
   "Component Test-Driven Development",
   "Integration Test-Driven Development",
   "System Test-Driven Development",
   "Acceptance Test-Driven Development"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "11",
  "domanda": "Quale delle seguenti fornisce la MIGLIORE descrizione dell'approccio shift-left?",
  "opzioni": [
   "Se concordato dagli sviluppatori, le attività manuali sul lato sinistro del processo di test vengono automatizzate per supportare il principio \"il testing anticipato permette di risparmiare tempo e denaro\"",
   "Quando risulta efficace dal punto di vista dei costi, le attività di test vengono anticipate nel ciclo di vita dello sviluppo software (SDLC) , per ridurre il costo totale della qualità attraverso la riduzione de l numero di difetti rilevati successivamente nel SDLC",
   "Quando hanno tempo libero a disposizione, i tester devono automatizzare i regression test, a partire dai test di componente e dai test di integrazione dei componenti",
   "Quando possibile, i tester sono formati per eseguire i compiti nelle prime fasi del ciclo di"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "12",
  "domanda": "Quale dei seguenti è MENO probabile che si verifichi come risultato di una retrospettiva?",
  "opzioni": [
   "La qualità dei futuri oggetti di test migliora grazie all'identificazione di miglioramenti nelle pratiche di sviluppo",
   "L'efficienza dei test migliora grazie a una configurazione più veloce degli ambienti di test attraverso l'automazione",
   "La comprensione dei processi di sviluppo e di test da parte degli utenti finali viene migliorata",
   "I test script automatizzati vengono migliorati grazie al feedback degli sviluppatori"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "13",
  "domanda": "Quale dei seguenti livelli di test è PIÙ probabile che venga svolto se il testing è focalizzato sulla validazione , e che non venga eseguito dai tester?",
  "opzioni": [
   "Testing di componente",
   "Testing di integrazione dei componenti",
   "Testing di integrazione dei sistemi",
   "Testing di accettazione"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "14",
  "domanda": "Il software di un sistema di navigazione è stato aggiornato a causa di suggerimenti di percorsi che violano il codice della strada, come ad esempio guida re contromano in strade a senso unico. Quale delle seguenti risposte descrive MEGLIO il testing che verrà eseguito?",
  "opzioni": [
   "Solo testing confermativo",
   "Testing confermativo, seguito da regression testing",
   "Solo regression testing",
   "Regression testing, seguito da testing confermativo"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "15",
  "domanda": "Dati i seguenti esempi di difetti: i. Due parti differenti della specifica di progetto sono inconsistenti tra loro a causa della complessità del progetto ii. Un tempo di risposta troppo lungo fa perdere la pazienza agli utenti iii. Un percorso nel codice non può essere raggiunto durante l'esecuzione iv. Una variabile viene dichiarata ma non viene mai utilizzata successivamente nel programma v. La quantità di memoria necessaria al programma per generare un report è troppo elevata Quale delle seguenti risposte identifica MEGLIO i difetti che potrebbero essere rilevati con il testing statico (piuttosto che con il testing dinamico)?",
  "opzioni": [
   "ii, v",
   "iii, v",
   "i, ii, iv",
   "i, iii, iv"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "16",
  "domanda": "Quale dei seguenti è un vantaggio del feedback anticipato e frequente degli stakeholder?",
  "opzioni": [
   "Le modifiche ai requisiti vengono comprese e implementate prima",
   "Assicura che gli stakeholder di business comprendano i requisiti degli utenti",
   "Consente ai product owner di modificare i loro requisiti tutte le volte che lo desiderano",
   "Agli utenti finali viene comunicato quali requisiti non saranno implementati prima del rilascio"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "17",
  "domanda": "Dati i seguenti tipi di review: 1. Review tecnica 2. Review informale 3. Ispezione 4. Walkthrough E le seguenti descrizioni: A. Include obiettivi come ottenere il consenso, generare nuove idee e motivare gli autori a migliorare B. Include obiettivi come educare i reviewer, ottenere il consenso, generare nuove idee e rilevare potenziali difetti C. L'obiettivo principale è rilevare potenziali difetti e richiede la raccolta di metriche supportare il miglioramento del processo D. L'obiettivo principale è rilevare potenziali difetti senza genera re alcun output formale documentato Quale delle seguenti combinazioni abbina MEGLIO i tipi di review alle descrizioni?",
  "opzioni": [
   "1A, 2B, 3C, 4D",
   "1A, 2D, 3C, 4B",
   "1B, 2C, 3D, 4A",
   "1C, 2D, 3A, 4B"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "18",
  "domanda": "Quale dei seguenti è un fattore che contribuisce al successo di una review?",
  "opzioni": [
   "Assicurarsi che il management partecipi come reviewer",
   "Dividere i prodotti di lavoro di grandi dimensioni in parti più piccole",
   "Definire come obiettivo la valutazione del reviewer",
   "Pianificare di coprire un documento completo in ogni review"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "19",
  "domanda": "Qual è la differenza PRINCIPALE tra le tecniche di test black-box e le tecniche di test basate sull'esperienza?",
  "opzioni": [
   "L'oggetto di test",
   "Il livello di test in cui viene utilizzata la tecnica di test",
   "La base di test",
   "Il ciclo di vita dello sviluppo software in cui può essere utilizzata la tecnica di test"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "20",
  "domanda": "State eseguendo il testing di un sistema di validazione di PIN, che accetta PIN validi e rifiuta PIN invalidi. Un PIN è una sequenza di cifre. Un PIN è valido se è composto da quattro cifre, di cui almeno due di fferenti . Quale dei seguenti è un insieme MINIMO di dati di input dei test che copre tutte le partizioni di equivalenza per questo scenario ?",
  "opzioni": [
   "112, 1111, 1234, 123456",
   "1, 123, 1111, 1234",
   "12, 112, 1112, 11112",
   "1, 111, 1111, 11111"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "21",
  "domanda": "Uno sviluppatore è stato ingaggiato per implementare la seguente regola di business: Come tester, progettate i test case utilizzando l'analisi ai valori limite a 2 valori. Quale dei seguenti insiemi di input dei test raggiunge la copertura maggiore?",
  "opzioni": [
   "100, 150, 200, 201",
   "99, 100, 200, 201",
   "98, 99, 100, 101",
   "101, 150, 199, 200"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "22",
 domanda: 'State lavorando in un progetto per lo sviluppo di un sistema di analisi dei risultati degli esami di guida. Vi è stato chiesto di progettare i test case in base alla seguente tabella delle decisioni:',
  tabella: [
    ['Condizioni / Azioni', 'R1', 'R2', 'R3'],
    ['C1: Primo tentativo di esame?', '—', '—', 'F'],
    ['C2: Esame teorico superato?', 'T', 'F', '—'],
    ['C3: Esame pratico superato?', 'T', '—', 'F'],
    ['Rilasciare una patente di guida?', 'X', '', ''],
    ['Richiedere ulteriori lezioni di guida?', '', 'X', ''],
    ['Richiedere di ripetere l\'esame?', '', '', 'X']
  ],
  descrizione: 'Quali dati di test dimostreranno l\'esistenza di regole contraddittorie in questa tabella delle decisioni?',
    "opzioni": [
   "C1 = T, C2 = T, C3 = F",
   "C1 = T, C2 = F, C3 = T",
   "C1 = T, C2 = T, C3 = T e C1 = F, C2 = T, C3 = T",
   "C1 = F, C2 = F, C3 = F"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "23",
  "domanda": "State progettando i test case in base al seguente state transition diagram: Qual è il numero MINIMO di test case necessari per ottenere il 100% di copertura delle transizioni valide?",
  "opzioni": [
   "3",
   "2",
   "5",
   "6"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "24",
  "domanda": "Volete applicare il testing dei rami al codice rappresentato dal seguente grafico del flusso di controllo: Quanti elementi di copertura è necessario testare?",
  "opzioni": [
   "2",
   "4",
   "8",
   "7"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "25",
  "domanda": "In che modo il testing white-box può essere utile a supporto del testing black-box?",
  "opzioni": [
   "Le misure di copertura white-box possono aiutare i tester a valutare i test black-box in termini di copertura del codice ottenuta da quest i test black-box",
   "L'analisi di copertura white-box può aiutare i tester a identificare il codice sorgente non raggiungibile",
   "Il testing dei rami comprende le tecniche di test black-box; quindi, il raggiungimento della copertura completa dei rami garantisce il raggiungimento della copertura completa di qualsiasi tecnica black-box",
   "Le tecniche di test white-box possono fornire elementi di copertura per le tecniche black-"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "26",
  "domanda": "Considerate il seguente elenco: • Input corretto non accettato • Input non corretto accettato • Formato di output errato • Divisione per zero Quale tecnica di test viene PIÙ PROBABILMENTE utilizzata dal tester che utilizza questo elenco durante l’esecuzione dei test?",
  "opzioni": [
   "Testing esplorativo",
   "Fault attack",
   "Testing checklist-based",
   "Analisi ai valori limite"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "27",
  "domanda": "Quale delle seguenti descrive MEGLIO il modo in cui il testing checklist-based può portare a una maggiore copertura?",
  "opzioni": [
   "Gli elementi della checklist possono essere definiti a un livello di dettaglio sufficientemente basso, in modo che il tester possa implementare ed eseguire test case dettagliati basati su questi elementi",
   "Le checklist possono essere automatizzate, quindi ogni volta che l'esecuzione di un test automatizzato copre gli elementi della checklist, si ottiene una copertura aggiuntiva",
   "Ogni elemento della checklist dovrebbe essere testato separatamente e indipendentemente, in modo che gli elementi coprano aree diverse del software",
   "Due tester che progettano ed eseguono test basati sugli stessi elementi di una checklist"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "28",
  "domanda": "Quale dei seguenti è il MIGLIOR esempio di criterio di accettazione scenario-oriented?",
  "opzioni": [
   "L'applicazione deve consentire agli utenti di cancellare il proprio account e tutti i dati associati , quando richiesto",
   "Quando un cliente aggiunge un articolo al proprio carrello e procede al checkout, dovrebbe esser gli richiesto di eseguire la login o di creare un account, se non è ancora stato fatto",
   "IF (contain(product(23).Name, cart.products())) THEN return FALSE",
   "Il sito web deve essere conforme agli Standard di accessibilità “ ICT Accessibility 508 ” e"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "29",
  "domanda": "State applicando acceptance test-driven development e state progettando i test case basati in base alla seguente user story: Quale test case è il PIÙ adeguato per testare AC3?",
  "opzioni": [
   "Verificare che un utente Regolare possa accedere ai piani 1 e 3",
   "Verificare che un utente Regolare non possa accedere al piano 4",
   "Verificare che un utente Speciale possa accedere al piano 5",
   "Verificare che un utente Speciale possa accedere ai piani 1, 2 e 3"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "30",
  "domanda": "Quale dei seguenti NON è un obiettivo di un test plan?",
  "opzioni": [
   "Definire i dati di test e i risultati attesi per i test di componente e per i test di integrazione dei componenti",
   "Definire il criterio di uscita d el livello di test di componente : \"deve essere raggiunto il 100% di copertura delle istruzioni e il 100% di copertura dei rami\"",
   "Descrivere quali campi dovrà contenere il test progress report e quale dovrebbe essere il forma to di questo report",
   "Spiegare perché il testing di integrazione dei sistemi sarà escluso dal testing, sebbene la"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "31",
  "domanda": "All'inizio di ogni iterazione, il team stima la quantità di lavoro (in giorni-persona) che dovrà essere completa ta durante l'iterazione. E(n) è la quantità di lavoro stimata per l'iterazione n, e A(n) è la quantità effettiva di lavoro svolto nell'iterazione Dalla terza iterazione, il team utilizza il seguente modello di stima basato sull'estrapolazione: 𝐸(𝑛) = 3 ∗ 𝐴(𝑛 − 1) + 𝐴(𝑛 − 2) 4 Il grafico mostra la quantità di lavoro stimata e la quantità di lavoro effettiva per le prime quattro iterazioni: Effort stimato ed effettivo (in giorni-persona) 13 12 11 10 9 8 7 6 5 4 3 2 1 0 Iteration #1 Iteration #2 Iteration #3 Iteration #4 Stimato Effettivo Qual è la quantità di lavoro stimata per l’iterazione #5?",
  "opzioni": [
   "10,5 giorni-persona",
   "8,25 giorni-persona",
   "6,5 giorni-persona",
   "9,4 giorni-persona"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "32",
  "domanda": "State preparando una schedulazione di esecuzione dei test per l ’esecuzione di sette test case , da TC1 a TC7. La figura seguente riporta le priorità di questi test case (1 = priorità massima, 3 = priorità minima) e le dipendenze tra i test case attraverso le frecce. Ad esempio, la freccia da TC4 a TC5 significa che TC5 può essere eseguito solo se TC4 è stato precedentemente eseguito. Quale test case dovrebbe essere eseguito per sesto ?",
  "opzioni": [
   "TC3",
   "TC5",
   "TC6",
   "TC2"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "33",
  "domanda": "Cosa descrive il modello della piramide di test?",
  "opzioni": [
   "I test possono avere differenti priorità",
   "I test possono avere differenti granularità",
   "I test possono richiedere differenti criteri di copertura",
   "I test possono dipendere da altri test"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "34",
  "domanda": "Qual è la relazione tra quadranti del testing, livelli di test e tipi di test?",
  "opzioni": [
   "I quadranti del testing rappresentano particolari combinazioni di livelli di test e tipi di test, definendo la loro posizione nel ciclo di vita dello sviluppo software",
   "I quadranti del testing descrivono il grado di granularità dei singoli tipi di test che vengono eseguiti in ogni livello di test",
   "I quadranti del testing descrivono i tipi di test che possono essere eseguiti ai livelli di test",
   "I quadranti del testing raggruppano livelli di test e tipi di test in base a diversi criteri, come"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "35",
  "domanda": "Quale dei seguenti è un esempio di come l'analisi dei rischi di prodotto possa influenzare l’accuratezza e l'ambito del testing?",
  "opzioni": [
   "Il monitoraggio continuo dei risch i permette di identificare i rischi emergenti il prima possibile",
   "L'identificazione del rischio permette di implementare le attività di mitigazione del rischio e di ridurre il livello di rischio",
   "Il livello di rischio valutato aiuta a determinare i livelli di test e le tecniche di test",
   "L'analisi del rischio permette di derivare gli elementi di copertura"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "36",
  "domanda": "Quale delle seguenti attività nel processo di test utilizza MAGGIORMENTE i test progress report?",
  "opzioni": [
   "Progettazione dei test",
   "Completamento dei test",
   "Analisi dei test",
   "Pianificazione dei test"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "37",
  "domanda": "Quale dei seguenti NON è un esempio di come il configuration management supporta il testing?",
  "opzioni": [
   "Tutti gli elementi di documentazione approvati presenti ne l repository sono identificat i in modo univoco e sottopost i al controllo della versione",
   "Tutte le modifiche agli elementi dell'ambiente di test vengono tracciate",
   "Tutte le specifiche dei requisiti sono riferite in modo non ambiguo nei test plan",
   "Tutti i difetti identificati hanno uno stato assegnato"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "38",
  "domanda": "Si consideri il seguente defect report di un'applicazione web-based di e-commerce : Qual è l'informazione PIÙ importante che manca in questo report?",
  "opzioni": [
   "Nome del tester e data del report",
   "Elementi dell'ambiente di test e relativi version number",
   "Identificazione dell'oggetto di test",
   "Impatto sugli interessi degli stakeholder"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "39",
  "domanda": "Quali strumenti delle seguenti categorie aiutano a organizzare i test case , il configuration management, la tracciabilità con la base di test e i difetti rilevati?",
  "opzioni": [
   "Strumenti di esecuzione dei test e di copertura",
   "Strumenti per la progettazione e l’implementazione dei test",
   "Strumenti di defect management",
   "Strumenti di test management"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "40",
  "domanda": "Quale dei seguenti è PIÙ probabile che sia un vantaggio della test automation?",
  "opzioni": [
   "Capacità di generare test case senza accedere alla base di test",
   "Ottenere una maggiore copertura attraverso un a valutazione più obiettiv a",
   "Aumento dei tempi di esecuzione dei test con una maggiore potenza di elaborazione",
   "Prevenzione degli errori umani attraverso una maggiore consistenza e ripetibilità"
  ],
  "corretta": [
   "d"
  ]
 }
];

export default questions1;
