import { Question } from '../types/Question';

const questions1: Question[] = [
 {
  "id": "1",
  "domanda": "Quale dei seguenti è un tipico obiettivo del test?",
  "opzioni": [
   "Rilevare e correggere difetti nell'oggetto di test",
   "Mantenere una comunicazione efficace con gli sviluppatori",
   "Validare che i requisiti legali siano stati soddisfatti",
   "Creare fiducia nella qualità dell'oggetto di test"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "2",
  "domanda": "Un progettista documenta la progettazione di un'interfaccia utente che non indirizza in modo adeguato gli utenti disabili , perché il progettista è stanco. Il programmatore implementa l'interfaccia utente in linea con la progettazione ma, poiché sta lavora ndo sotto forte pressione sui tempi, non include nel codice del programma un'adeguata gestione delle eccezioni per il calcolo dei bonus. Quando il sistema operativo viene utilizzato , alcuni utenti disabili si lamentano dell'interfaccia e l'azienda viene successivamente multata dall’autorità rilevante per la normativa . Nessuno si accorge che i calcoli dei bonus a volte sono errati. Quale delle seguenti affermazioni è CORRETTA?",
  "opzioni": [
   "Il calcolo errato dei bonus è un difetto che si verifica occasionalmente",
   "La multa ricevuta per non aver indirizzato in modo errato alcuni utenti disabili è un failure",
   "Il programmatore che sta lavora ndo sotto forte pressione sui tempi è una root-cause",
   "La progettazione dell'interfaccia utente include un errore del progettista"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "3",
  "domanda": "Le condizioni di test di alto livello vengono utilizzate dai tester per generare test case ed eseguire i test. Anche se le condizioni di test rimangono le stesse, i test case variano ogni volta. Quale dei seguenti \"principi del testing\" viene indirizzato attraverso la variazione dei test case?",
  "opzioni": [
   "I test perdono di efficacia",
   "L’assenza di difetti è un’idea sbagliata",
   "Il testing anticipato permette di risparmiare tempo e denaro",
   "I difetti si raggruppano in cluster"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "4",
  "domanda": "Dati i seguenti compiti di test: 1. Derivare i test case dalle condizioni di test 2. Identificare il testware riutilizzabile 3. Organizzare i test case in test procedure 4. Valutare la base di test e l'oggetto di test E le seguenti attività di test: A. Analisi dei test B. Progettazione dei test C. Implementazione dei test D. Completamento dei test Quale delle seguenti combinazioni è la MIGLIO RE corrispondenza tra compiti e attività?",
  "opzioni": [
   "1B, 2A, 3D, 4C",
   "1B, 2D, 3C, 4A",
   "1C, 2A, 3B, 4D",
   "1C, 2D, 3A, 4B"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "5",
  "domanda": "Dato il seguente testware: i. Test completion report ii. Dati contenuti in un database utilizzato per gli input e i risultati attesi dei test iii. Lista degli elementi necessari per costruire l'ambiente di test iv. Sequenze documentate di test case in ordine di esecuzione v. Test case Quale delle seguenti risposte definisce MEGLIO il testware prodotto come risultato dell'implementazione dei test?",
  "opzioni": [
   "ii, iv",
   "iii, v",
   "i, ii, v",
   "i, iii, iv"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "6",
  "domanda": "Quale delle seguenti rappresenta con PIÙ probabilità la descrizione di un compito svolto da qualcuno nel ruolo di test management?",
  "opzioni": [
   "Valutare la base di test e l'oggetto di test",
   "Definire i requisiti dell'ambiente di test",
   "Valutare la testabilità dell'oggetto di test",
   "Creare un test completion report"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "7",
  "domanda": "Quale dei seguenti è un vantaggio dell’approccio whole-team ?",
  "opzioni": [
   "Miglioramento della comunicazione tra i membri del team",
   "Diminuzione della responsabilità individuale rispetto alla qualità",
   "Rilascio più rapido verso gli utenti finali",
   "Collaborazione ridotta con utenti di business esterni"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "8",
  "domanda": "Dati i seguenti vantaggi e svantaggi dell'indipendenza del testing: i. I tester lavorano in una sede diversa da quella degli sviluppatori ii. I tester mettono in discussione le assunzioni che i programmatori fanno durante la scrittura del codice iii. Viene stabilita una dinamica conflittuale tra tester e sviluppatori iv. Gli sviluppatori si convin cono che i tester siano i principali responsabili della qualità v. I tester hanno bias (pregiudizi) diversi rispetto a quelli degli sviluppatori Quali sono PIÙ probabilmente considerati come vantaggi?",
  "opzioni": [
   "i, iv",
   "ii, v",
   "i, iii, iv",
   "ii, iii, v"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "9",
  "domanda": "Quale delle seguenti è una buona pratica del testing che si applica a tutti i cicli di vita dello sviluppo software?",
  "opzioni": [
   "Ogni livello di test ha obiettivi del test specifici e distinti",
   "L'implementazione e l'esecuzione dei test per un determinato livello di test dovrebbero iniziare durante la corrispondente fase di sviluppo",
   "I tester dovrebbero iniziare la progettazione dei test non appena diventano disponibili i draft dei prodotti di lavoro rilevanti",
   "Ogni attività del testing dinamico ha una corrispondente attività del testing"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "10",
  "domanda": "Quale dei seguenti è un esempio di approccio test-first allo sviluppo?",
  "opzioni": [
   "Behavior-Driven Development",
   "Test Level Driven Development",
   "Function-Driven Development",
   "Performance-Driven Development"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "11",
  "domanda": "Quale dei seguenti è PIÙ probabile essere una sfida che si incontra durante l’implementazione DevOps?",
  "opzioni": [
   "Assicurarsi che non vengano trascurate caratteristiche di qualità non-funzionali",
   "Gestire ambienti di test in continuo cambiamento",
   "Avere necessità di un maggior numero di tester manuali con un’esperienza adeguata",
   "Impostare la test automation come parte della pipeline di delivery"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "12",
  "domanda": "Quale delle seguenti affermazioni descrive MEGLIO le retrospettive?",
  "opzioni": [
   "Le retrospettive consentono ai membri del team di identificare altri membri del team che non hanno contribuito pienamente al raggiungimento della qualità, come richiesto dall’approccio whole team",
   "Le retrospettive offrono ai tester l'opportunità di identificare le attività che hanno avuto successo, in modo da mantenerle quando saranno implementati in futuro potenziali miglioramenti",
   "Le retrospettive sono il luogo in cui i membri del team Agile possono esprimere le loro preoccupazioni sul management e sui clienti in un ambiente che non attribuisce colpe a nessuno",
   "Le retrospettive offrono ai membri del team Agile un forum per discutere il piano e le"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "13",
  "domanda": "Quale dei seguenti test è PIÙ probabile che venga eseguito come parte del testing funzionale?",
  "opzioni": [
   "Il test verifica che la funzione di ordinamento inserisca gli elementi della lista o della matrice in ordine crescente",
   "Il test verifica se la funzione di ordinamento completa l'ordinamento entro un secondo dall'avvio",
   "Il test verifica la facilità con cui la funzione di ordinamento può essere modificata da ordinamento crescente a ordinamento decrescente",
   "Il test verifica che la funzione di ordinamento continui a funzionare correttamente quando si"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "14",
  "domanda": "Quale tra le seguenti situazioni è PIÙ probabile che sia un trigger che porta al testing di manutenzione di un sistema di cambio valuta?",
  "opzioni": [
   "Gli sviluppatori hanno riferito che la modifica del sistema di cambio valuta era difficile e i tester hanno deciso di verificare se questo fosse vero",
   "L'opzione di rimborso del sistema di cambio valuta è stata eliminata perché non sempre restituiva ai clienti l'importo corretto",
   "Il team Agile ha iniziato a sviluppare una user story che aggiunge una nuova funzionalità di fidelizzazione dei clienti al sistema di cambio valuta",
   "Il sistema di cambio valuta è stato riconfigurato per supportare transazioni di valuta sia in"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "15",
  "domanda": "Quale dei seguenti elementi NON può essere esaminato dal testing statico?",
  "opzioni": [
   "Contratto",
   "Test plan",
   "Codice encrypted",
   "Test charter"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "16",
  "domanda": "Quale delle seguenti affermazioni sul valore del testing statico è CORRETTA?",
  "opzioni": [
   "I tipi di difetti rilevati dal testing statico sono differenti da quelli che possono essere rilevati dal testing dinamico",
   "Il testing dinamico è in grado di rilevare tipi di difetti che possono essere rilevati dal testing statico, oltre a tipi di difetti aggiuntivi",
   "Il testing dinamico può rilevare alcuni dei difetti che possono essere rilevati dal testing statico, ma non tutti",
   "Il testing statico può rilevare tutti i tipi di difetti che possono essere rilevati dal testing"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "17",
  "domanda": "Date le seguenti descrizioni delle attività di review: 1. Le anomalie identificate sono analizzate e concordate, identificando il loro stato, l’ownership ed eventuali passi aggiuntivi necessari 2. I problemi vengono memorizzati, e gli aggiornamenti necessari vengono indirizz ati prima dell'accettazione del prodotto di lavoro 3. I reviewer utilizzano tecniche per formulare suggerimenti e domande sul prodotto di lavoro , e per identificare anomalie 4. L'obiettivo della review e la sua schedulazione sono vengono stabiliti per garantire una review focalizzata ed efficiente 5. Ai partecipanti viene fornito l’accesso all’elemento sottoposto a review Nel processo di review, quale delle seguenti è la sequenza CORRETTA delle attività corrispondenti alle descrizioni?",
  "opzioni": [
   "4- 3- 5- 2- 1",
   "4- 5- 3- 1- 2",
   "5- 4- 1- 3- 2",
   "5- 4- 3- 2- 1"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "18",
  "domanda": "Quale partecipante al processo di review è responsabile di garantire che i review meeting si svolgano in modo efficace e che tutti i partecipanti possano esprimere liberamente le proprie opinioni?",
  "opzioni": [
   "Manager",
   "Moderatore",
   "Presidente",
   "Review Leader"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "19",
  "domanda": "State eseguendo il testing di sistema di un'applicazione web di e-commerce e vi viene fornito il seguente requisito: REQ 05-017. Se il costo totale degli acquisti supera i $100, il cliente riceve uno sconto del 5% sugli acquisti successivi. In caso contrario, il cliente non riceve alcuno sconto. Quali tecniche di test saranno le PIÙ utili per progettare i test case basati su questo requisito?",
  "opzioni": [
   "Tecniche di test white-box",
   "Tecniche di test black-box",
   "Tecniche di test basate sull'esperienza",
   "Tecniche di test basate sul rischio"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "20",
  "domanda": "Un sistema per la vendita di biglietti del cinema calcola il tipo di sconto in base all'anno di nascita del cliente (BY) e all'anno attuale (CY), come segue: Sia D la differenza tra CY e BY, cioè D = CY- BY. • Se D < 0 viene visualizzato il messaggio di errore \"l'anno di nascita non può essere maggiore dell'anno attuale \" • Se 0 ≤ D < 18 viene applicato lo sconto per studenti • Se 18 ≤ D < 65 non si applica alcuno sconto • Se D è ≥ 65 viene applicato lo sconto per pensionati La test suite contiene già due test case: • BY = 1990, CY = 2020, risultato atteso: nessuno sconto • BY = 2030, CY = 2029, risultato atteso: messaggio di errore Tra i seguenti insiemi di dati di test, quali DUE dovrebbero essere aggiunti per ottenere la copertura completa delle partizioni di equivalenza valide per il tipo di sconto?",
  "opzioni": [
   "BY = 2001, CY = 2065",
   "BY = 1900, CY = 1965",
   "BY = 1965, CY = 1900",
   "BY = 2011, CY = 2029",
   "BY = 2000, CY = 2000"
  ],
  "corretta": [
   "b",
   "e"
  ]
 },
 {
  "id": "21",
  "domanda": "State testando un sistema di controllo della temperatura per una struttura di stoccaggio a freddo per orticoltura. Il sistema riceve la temperatura (espressa in gradi Celsius) come input. Se la temperatura è compresa tra 0 e 2 gradi (inclusi), il sistema visuali zza il messaggio \"temperatura OK\". In caso di temperature inferiori, il sistema visualizza il messaggio \"temperatura troppo bassa\" , e in caso di temperature superiori , il sistema visualizza il messaggio \"temperatura troppo alta\". Utilizzando l'analisi ai valori limite a due valori, quale dei seguenti insieme di input dei test fornisce il livello più alto di copertura dei valori limite?",
  "opzioni": [
   "-1, 3",
   "0, 2",
   "-1, 0, 2, 3",
   "-2, 0, 2, 4"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "22",
  domanda: 'State progettando i test case in base alla seguente tabella delle decisioni:',
  tabella: [
    ['Regola', 'C1: Età', 'C2: Esperienza', 'C3: Registrato?', 'Categoria'],
    ['R1', '0–18', '—', 'NO', 'A'],
    ['R2', '19–65', '0–4', 'NO', 'A'],
    ['R3', '19–65', '>4', 'NO', 'B'],
    ['R4', '>65', '—', 'NO', 'B'],
    ['R5', '0–18', '—', 'SÌ', 'B'],
    ['R6', '19–65', '—', 'SÌ', 'D'],
    ['R7', '>65', '—', 'SÌ', 'C']
  ],
  tabella2: [
    ['Test Case', 'Età', 'Esperienza', 'Registrato?', 'Categoria attesa'],
    ['TC1', '19', '0', 'NO', 'A'],
    ['TC2', '65', '5', 'NO', 'B'],
    ['TC3', '66', '0', 'SÌ', 'C'],
    ['TC4', '65', '4', 'SÌ', 'D']
  ],
  descrizione: 'Quale dei seguenti test case, se aggiunto all\'insieme di test case esistenti, aumenterà la copertura della tabella delle decisioni?',
    "opzioni": [
   "Uomo di 66 anni, non registrato, senza esperienza; risultato atteso: categoria B",
   "Donna di 55 anni, non registrata, con 2 anni di esperienza; risultato atteso: categoria A",
   "Donna di 19 anni, registrata, con 5 anni di esperienza; risultato atteso: categoria D",
   "Nessun test case aggiuntivo può aumentare la copertura della tabella delle decisioni già"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "23",
  domanda: 'State applicando il testing delle transizioni di stato a un sistema per la prenotazione di camere di hotel. Il sistema è modellato dalla seguente tabella degli stati, con 4 stati e 5 eventi:',
  tabella: [
    ['Stato', 'Disponibile', 'Non Disponibile', 'Cambio Camera', 'Annullamento', 'Pagamento'],
    ['S1: Richiesta', 'S2', 'S3', '', '', ''],
    ['S2: Confermato', '', '', 'S1', 'S4', 'S4'],
    ['S3: Lista d\'attesa', 'S2', '', '', 'S4', ''],
    ['S4: Fine', '', '', '', '', '']
  ],
  descrizione: 'Assumendo che tutti i test case inizino nello stato "Richiesta", quale delle seguenti sequenze di eventi raggiunge la copertura più alta delle transizioni valide?',
    "opzioni": [
   "NonDisponibile, Disponibile, CambioCamera, NonDisponibile, Annullamento",
   "Disponibile, CambioCamera, NonDisponibile, Disponibile, Pagamento",
   "Disponibile, CambioCamera, Disponibile, CambioCamera, NonDisponibile",
   "NonDisponibile, Annullamento, CambioCamera, Disponibile, Pagamento"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "24",
  "domanda": "La test suite S per un programma P raggiunge il 100% di copertura delle istruzioni. È composta da tre test case, ognuno dei quali raggiunge il 50% di copertura delle istruzioni. Quale delle seguenti affermazioni è CORRETTA?",
  "opzioni": [
   "L'esecuzione di S causerà tutti i possibili failure in P",
   "S raggiunge il 100% della copertura dei rami per P",
   "Ogni istruzione eseguibile in P che contiene un difetto è stata eseguita almeno una volta durante l'esecuzione di S",
   "Dopo aver eliminato un test case da S, i due test case rimanenti raggiungeranno"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "25",
  "domanda": "Perché il testing white-box facilita la rilevazione dei difetti anche quando le specifiche software sono vaghe, obsolete o incomplete?",
  "opzioni": [
   "I test case sono progettati in base alla struttura dell'oggetto di test piuttosto che in base alle specifiche",
   "Per ogni tecnica di test white-box, la copertura può essere ben definita e facilmente misurata",
   "Le tecniche di test white-box sono molto ben progettate per rilevare omissioni nei requisiti",
   "Le tecniche di test white-box possono essere utilizzate sia nel testing statico sia nel testing dinamico"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "26",
  "domanda": "Quale delle seguenti situazioni NON può essere prevista da un tester quando applica l'error guessing?",
  "opzioni": [
   "Lo sviluppatore ha frainteso la formula nella user story per il calcolo degli interessi",
   "Lo sviluppatore ha scritto \"FA = A*(1+IR^N)\" invece di \"FA = A*(1+IR)^N\" nel codice sorgente",
   "Lo sviluppatore si è perso il seminario sulla nuova legislazione relativa ai tassi di interesse composti",
   "L'accuratezza degli interessi calcolati dal sistema non è sufficientemente precisa"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "27",
  "domanda": "Quale delle seguenti è vera sul testing esplorativo?",
  "opzioni": [
   "I test case vengono progettati prima dell'inizio della sessione di testing esplorativo",
   "Il tester può effettuare l'esecuzione dei test, ma non può effettuare la progettazione dei test",
   "I risultati del testing esplorativo forniscono una buona previsione del numero di difetti rimanenti",
   "Durante il testing esplorativo il tester può utilizzare tecniche di test black-box"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "28",
  "domanda": "Quale pratica di scrittura collaborativa delle user story consente al team di raggiungere una comprensione collettiva di quello che deve essere rilasci ato?",
  "opzioni": [
   "Planning poker, in modo che un team possa raggiungere il consenso sull’effort necessario per implementare una user story",
   "Review, in modo che un team possa rilevare inconsistenze e contraddizioni in una user story",
   "Pianificazione dell’iterazione, in modo che le user story con il più alto valore di business per un cliente possano essere prioritizzate per l'implementazione",
   "Conversazione, in modo che i membri del team possano capire come verrà utilizzato il"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "29",
  "domanda": "Avete appena iniziato a progettare i test case per la seguente user story: In tutti i test case la precondizione è la seguente: esistono solo due prodotti disponibili, A e B. Il prodotto A costa $100 e il prodotto B costa $110. Quale dei seguenti è il MIGLIOR esempio di test case per questa user story?",
  "opzioni": [
   "Aprire la pagina web e impostare il filtro per visualizzare i prezzi tra $90 e $100. Risultato atteso: i risultati visualizzare solo il prodotto A. Impostare il prezzo massimo a $110. Risultato atteso: i risultati ora includono entrambi i prodotti A e B",
   "Aprire la pagina web. Risultato atteso: i prezzi minimi e massimi predefiniti sono rispettivamente $100 e $110. Aggiungere il prodotto C al magazzino, con un prezzo di $120. Aggiornare la pagina web del cliente. Risultato atteso: il prezzo massimo predefinito passa a $120",
   "Aprire la pagina web e impostare il filtro per visualizzare i prezzi tra $90 e $115. Risultato atteso: i risultati visualizzare entrambi i prodotti A e B. Cambiare la valuta da USD a EUR. Risultato atteso: l'intervallo del filtro cambia correttamente in valori EUR, in base al tasso di cambio corrente",
   "Aprire la pagina web con tre diversi browser: Edge, Chrome e Opera. In ogni browser"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "30",
  "domanda": "Qual i DUE delle seguenti situazioni definiscono MEGLIO i criteri di USCITA in un progetto di testing?",
  "opzioni": [
   "Il budget è approvato",
   "Il budget si è esaurito",
   "La base di test è disponibile",
   "I test case hanno raggiunto almeno l'80% di copertura delle istruzioni",
   "Tutti i test analyst hanno una certificazione ISTQB Foundation Level"
  ],
  "corretta": [
   "b",
   "d"
  ]
 },
 {
  "id": "31",
  "domanda": "Il team vuole stimare il tempo necessario per un tester ad eseguire quattro test case per un componente software. Il team ha raccolto le seguenti misure dell’effort utilizzato per eseguire un singolo test case: • Scenario migliore : 1 ora • Scenario peggiore : 8 ore • Scenario più probabile: 3 ore Si sta utilizzando la tecnica three-point estimation, qual è la stima finale del tempo necessario per eseguire tutti e quattro i test case?",
  "opzioni": [
   "14 ore",
   "3,5 ore",
   "16 ore",
   "12 ore"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "32",
  domanda: 'La tabella mostra la matrice di tracciabilità tra i test case e i requisiti. "X" significa che un determinato test case copre il requisito corrispondente.',
  tabella: [
    ['Requisiti', 'Req1', 'Req2', 'Req3', 'Req4', 'Req5', 'Req6', 'Req7'],
    ['TC1', 'X', '', 'X', 'X', '', '', 'X'],
    ['TC2', 'X', '', '', '', 'X', '', 'X'],
    ['TC3', '', '', '', '', 'X', 'X', ''],
    ['TC4', '', 'X', '', '', '', '', '']
  ],
  descrizione: 'Volete prioritizzare i test case in base alla copertura aggiuntiva. Eseguite tutti e quattro i test case. Quale test case dovrebbe essere eseguito per ULTIMO?',
    "opzioni": [
   "TC1",
   "TC2",
   "TC3",
   "TC4"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "33",
  "domanda": "Come possono i quadranti del testing essere utili per il testing?",
  "opzioni": [
   "Aiutano nella pianificazione dei test dividendo il processo di test in quattro fasi, corrispondenti ai quattro livelli di test principali : testing di componente, testing di integrazione, testing di sistema e testing di accettazione",
   "Aiutano a valutare la copertura di alto livello (ad esempio, la copertura dei requisiti) in base alla copertura di basso livello (ad esempio, la copertura del codice)",
   "Aiutano gli stakeholder non tecnici a comprendere i diversi tipi di test e a capire che alcuni tipi di test sono più rilevanti per determinati livelli di test rispetto ad altri",
   "Aiutano i team Agile a sviluppare una strategia di comunicazione che si basa"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "34",
  "domanda": "Per un determinato rischio, il relativo livello di rischio è di $1.000 e la sua probabilità del rischio è stimata al 50%. Quanto è l'impatto del rischio?",
  "opzioni": [
   "$500",
   "$2.000",
   "$50.000",
   "$200"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "35",
  "domanda": "Quali DUE dei seguenti sono rischi di prodotto?",
  "opzioni": [
   "Scope creep (crescita indesiderata delle funzioni, dei requisiti o delle funzionalità)",
   "Architettura scadente",
   "Riduzione dei costi",
   "Scarso supporto degli strumenti",
   "Tempo di risposta troppo lungo"
  ],
  "corretta": [
   "b",
   "e"
  ]
 },
 {
  "id": "36",
  "domanda": "Quale dei seguenti NON è un obiettivo valido per un test report?",
  "opzioni": [
   "Tracciare l’avanzamento dei test e identificare le aree che richiedono ulteriore attenzione",
   "Fornire informazioni sui test eseguiti, sui loro risultati e su eventuali problemi o difetti rilevati",
   "Fornire informazioni su ogni difetto, come i passi per riprodurlo",
   "Fornire informazioni sul testing pianificato per il periodo successivo"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "37",
  "domanda": "L'utente ha segnalato un failure del software. Un ingegnere del team di supporto ha chiesto all'utente il version number del software in cui è stato osservato il failure. In base al version number , il team ha identificato tutti i file che componevano il rilascio. In seguito, uno sviluppatore ha potuto eseguire un'analisi, localizzare il difetto e corregg erlo. Quale dei seguenti elementi ha permesso al team di svolgere l'attività sopra descritta?",
  "opzioni": [
   "Risk management",
   "Monitoraggio e controllo dei test",
   "Approccio whole-team",
   "Configuration management"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "38",
  "domanda": "Considerate il seguente defect report per un sistema di Gestione Prestit i Libri: Quale delle seguenti azioni è PIÙ probabile che aiuti lo sviluppatore a riprodurre velocemente il failure?",
  "opzioni": [
   "Aggiungere informazioni nella sezione \"Descrizione\" su quali utenti e quali libri sono impattati dal problema",
   "Compilare il valore mancante per il campo \"Priorità\"",
   "Aggiungere alla sezione \"Allegati\" i memory dump e i database snapshot ottenuti dopo ogni passo descritto nella sezione \"Passi per la riproduzione\"",
   "Ripetere lo stesso test case in ambienti diversi e produrre defect report separati per ognuno"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "39",
  "domanda": "Date le seguenti categorie di strumenti di test: i. Strumenti di collaborazione ii. Strumenti DevOps iii. Strumenti di management iv. Strumenti di testing non-funzionale v. Strumenti di progettazione e implementazione dei test Quali sono le categorie di strumenti che facilitano con MAGGIORE probabilità l'esecuzione dei test?",
  "opzioni": [
   "i, v",
   "ii, iv",
   "i, iii, v",
   "ii, iii, iv"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "40",
  "domanda": "Quale dei seguenti è il rischio PIÙ probabile della test automation?",
  "opzioni": [
   "Rilev are difetti aggiuntivi di severità alta",
   "Fornire misure che sono troppo complicate da derivare per l'uomo",
   "Incompatibilità con la piattaforma di sviluppo",
   "Tempi di esecuzione dei test notevolmente ridotti"
  ],
  "corretta": [
   "c"
  ]
 }
];

export default questions1;
