import img_23_A from '@assets/images/domanda_23_A.png';
import { Question } from '../types/Question';

const questions1: Question[] = [
 {
  "id": "1",
  "domanda": "Quale delle seguenti affermazioni descrive un obiettivo del test valido?",
  "opzioni": [
   "Dimostrare che non esistono difetti non risolti nel sistema sotto test (System Under Test, SUT)",
   "Dimostrare che non si verificheranno failure dopo il rilascio del sistema in produzione",
   "Ridurre il livello di rischio dell'oggetto di test e creare confidenza su l livello di qualità",
   "Verificare che non ci s ono combinazioni di input non testate"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "2",
  "domanda": "Quale delle seguenti opzioni descrive un esempio di attività di test che contribuisc e al successo?",
  "opzioni": [
   "Avere tester coinvol ti durante le diverse attività del ciclo di vita dello sviluppo software (Software Development Lifecycle , SDLC) aiuterà a rilevare difetti nei prodotti di lavoro",
   "I tester cercano di non disturbare gli sviluppatori durante la codifica, in modo che gli sviluppatori scrivano codice migliore",
   "I tester che collaborano con gli utenti finali contribuiscono a migliorare la qualità dei defect report durante il testing di integrazione dei componenti e il testing di sistema",
   "I tester certificati progetteranno test case molto migliori dei tester non certificati"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "3",
  "domanda": "Siete stato assegnato come tester a un team che produce un nuovo sistema in modo incrementale. Avete notato che per diverse iterazioni non sono state apportate modifiche ai regression test esistenti e non sono stati identificati nuovi difetti di regressione. Il vostro manager è soddisfatto, no n voi . Quale principio del testing spiega il vostro scetticismo?",
  "opzioni": [
   "I test perdono di efficacia",
   "L’assenza di difetti è un’idea sbagliata",
   "I difetti si raggruppano in cluster",
   "Il testing esaustivo è impossibile"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "4",
  "domanda": "Lavorate in un team che sviluppa un'applicazione mobile per ordinare cibo. Nell'iterazione attuale il team ha deciso di implementare la funzionalità di pagamento. Quale delle seguenti attività fa parte dell'analisi dei test?",
  "opzioni": [
   "Stimare che il testing del l'integrazione con il servizio di pagamento richiederà 8 giorni-persona",
   "Decidere che il team dovrebbe verificare attraverso il testing se è possibile condividere correttamente i pagamenti tra molti u tenti",
   "Utilizza re l'analisi ai valori limite per ricavare i dati di test per i test case che verificano la corretta elaborazione del pagamento , rispetto al l'importo minimo consentito da pagare",
   "Analizzare la discrepanza tra il risultato effettivo e il risultato atteso dopo l'esecuzione di un"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "5",
  "domanda": "Quali dei seguenti fattori (i-v) hanno un'influenza SIGNIFICATIVA sull’approccio del test? \ni. Il ciclo di vita del lo sviluppo software \nii. Il numero di difetti rilevati nei progetti precedenti \niii. I rischi di prodotto identificati \niv. Nuovi requisiti normativi che impongono un testing white-box formale \nv. La configurazione dell'ambiente di test",
  "opzioni": [
   "i, ii hanno un'influenza significativa",
   "i, iii, iv hanno un'influenza significativa",
   "ii, iv, v hanno un'influenza significativa",
   "iii, v hanno un’influenza significativa"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "6",
  "domanda": "Quali DUE dei seguenti compiti appartengono PRINCIPALMENTE a un ruolo di testing?",
  "opzioni": [
   "Configurare gli ambienti di test",
   "Mantenere il product backlog",
   "Progettare soluzioni per nuovi requisiti",
   "Creare il test plan",
   "Analizzare la base di test"
  ],
  "corretta": [
   "a",
   "e"
  ]
 },
 {
  "id": "7",
  "domanda": "Quali delle seguenti competenze (i-v) sono le competenze PIÙ importanti per un tester? \ni. Avere conoscenza del dominio \nii. Creare una vision di prodotto \niii. Essere un buon giocatore di squadra \niv. Pianificare e organizzare il lavoro del team \nv. Avere p ensiero critico (critical thinking)",
  "opzioni": [
   "ii e iv sono importanti",
   "i, iii e v sono importanti",
   "i, ii e v sono importanti",
   "iii e iv sono importanti"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "8",
  "domanda": "In che modo l’approccio whole-team è presente nelle interazioni tra tester e rappresentanti di business?",
  "opzioni": [
   "I rappresentanti di business decidono sugli approcci di test automation",
   "I tester aiutano i rappresentanti di business a definire la strategia di test",
   "I rappresentanti di business non fanno parte dell’approccio whole-team",
   "I tester aiutano i rappresentanti di business a creare test di accettazione adeguati"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "9",
  "domanda": "Consideriamo la seguente regola: \"Per ogni attività del ciclo di vita dello sviluppo software (SDLC, software development lifecycle) esiste una corrispondente attività di test \". In quali modelli SDLC è valida questa regola?",
  "opzioni": [
   "Solo nei modelli SDLC sequenziali",
   "Solo nei modelli SDLC iterativi",
   "Solo nei modelli SDLC iterativi e incrementali",
   "Nei modelli SDLC sequenziali, incrementali e iterativi"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "10",
  "domanda": "Quale delle seguenti affermazioni descrive MEGLIO l'approccio acceptance test-driven development (ATDD)?",
  "opzioni": [
   "In ATDD, i criteri di accettazione sono tipicamente creati sulla base del formato given/when/then",
   "In ATDD, i test case sono creati principalmente per il testing di componente e sono code-oriented ( orientati al codice )",
   "In ATDD i test case sono creati sulla base dei criteri di accettazione, per guidare lo sviluppo del software correlato",
   "In ATDD, i test sono creati sulla base de l comportamento desiderato del software, e questo"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "11",
  "domanda": "Quale dei seguenti NON è un esempio di approccio shift-left?",
  "opzioni": [
   "Eseguire la review dei requisiti dell’utente prima della loro accettazione formale da parte degli stakeholder",
   "Scrivere un test di componente prima di scrivere il codice corrispondente",
   "Eseguire un testing di efficienza delle prestazioni per un componente durante il testing di componente",
   "Scrivere un test script prima di definire il processo di configuration management"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "12",
  "domanda": "Quale delle seguenti argomentazioni potrebbe essere usata per convincere il vostro manager a organizzare le retrospettive alla fine di ogni release ?",
  "opzioni": [
   "Le retrospettive sono attualmente molto popolari e i clienti apprezzerebbero se fossero inserite nei nostri processi",
   "Organizza re retrospettive farà risparmiare denaro all'organizzazione perché i rappresentanti degli utenti finali non forniscono un feedback immediato sul prodotto",
   "Le debolezze del processo identificate durante la retrospettiva possono essere analizzate e d essere utilizzate come lista di cose da fare per il programma di continuous process improvement (miglioramento continuo del processo ) dell'organizzazione",
   "Le retrospettive rispettano cinque valori, che includono il coraggio e il rispetto, che sono cruciali per mantenere il continuous improvement nell'organizzazione"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "13",
  "domanda": "Quali tipi di failure (1-4): \n1. Failure nel comportamento del sistema , a causa di una deviazione dalle esigenze di business dell'utente \n2. Failure nella comunicazione tra i componenti \n3. Failure nella logica in un modulo \n4. Failure in regole di business non correttamente implementate \nsi associano MEGLIO ai livelli di test (A-D)? \nA. Testing di componente \nB. Testing di integrazione dei componenti \nC. Testing di sistema \nD. Testing di accettazione",
  "opzioni": [
   "1D, 2B, 3A, 4C",
   "1D, 2B, 3C, 4A",
   "1B, 2A, 3D, 4C",
   "1C, 2B, 3A, 4D"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "14",
  "domanda": 'State testando una user story con tre criteri di accettazione: AC1, AC2 e AC3. AC1 è coperto dal test case TC1, AC2 da TC2 e AC3 da TC3.',
  "tabella": [
    ['Test Case', 'Esecuzione 1', 'Esecuzione 2', 'Esecuzione 3'],
    ['TC1', 'Fallito (1)', 'Superato (4)', 'Superato (7)'],
    ['TC2', 'Superato (2)', 'Fallito (5)', 'Superato (8)'],
    ['TC3', 'Fallito (3)', 'Fallito (6)', 'Superato (9)']
  ],
  "descrizione": 'I tre test vengono ripetuti una volta che siete stati informati che tutti i difetti rilevati durante il test run sono stati corretti e che è disponibile una nuova versione del software. Quali dei test descritti nella tabella vengono eseguiti come regression test?',
  "opzioni": [
   "Solo 4, 7, 8, 9",
   "Solo 5, 7",
   "Solo 4, 6, 8, 9",
   "Solo 5, 6"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "15",
  "domanda": "Quale dei seguenti NON è un vantaggio del testing statico?",
  "opzioni": [
   "Avere un defect management meno costoso grazie alla facilità di rilevare i difetti in una fase successiva del ciclo di vita dello sviluppo software ( SDLC )",
   "Correggere i difetti rilevati durante il testing statico è generalmente molto meno costoso che correggere i difetti rilevati durante il testing dinamico",
   "Rilevare difetti di codifica che non sarebbero stati rilevati eseguendo solo il testing dinamico",
   "Rilevare lacune e inconsistenza nei requisiti"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "16",
  "domanda": "Quale dei seguenti è un beneficio di un feedback anticipato e frequente?",
  "opzioni": [
   "Migliorare il processo di test per i progetti futuri",
   "Forzare i clienti a prioritizzare i loro requisiti in base ai rischi concordati",
   "Fornis ce una misura per la qualità delle modifiche",
   "Aiutare a evitare incomprensioni sui requisiti"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "17",
  "domanda": "Le review utilizzate nella vostra organizzazione hanno i seguenti attributi: \n• Esiste il ruolo di scribe \n• Lo scopo principale è valutare la qualità \n• Il meeting viene condotto dall'autore del prodotto di lavoro \n• Può essere svolta una preparazione individuale \n• Viene prodotto un review report \nQuale dei seguenti tipi di review è PIÙ probabile che venga utilizzato?",
  "opzioni": [
   "Review informale",
   "Walkthrough",
   "Review tecnica",
   "Ispezione"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "18",
  "domanda": "Quale delle seguenti affermazioni NON è un fattore che contribuisce al successo delle review?",
  "opzioni": [
   "I partecipanti dovrebbero dedicare un tempo adeguato per la review",
   "Suddividere prodotti di lavoro di grandi dimensioni in piccole parti per rendere meno intenso l'effort richiesto",
   "I partecipanti dovrebbero evitare comportamenti che possano indicare noia, esasperazione o ostilità nei confronti degli altri partecipanti",
   "I failure rilevati dovrebbero essere riconosciuti, apprezzati e gestiti in modo oggettivo"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "19",
  "domanda": "Quale delle seguenti è una caratteristica delle tecniche di test basate sull'esperienza?",
  "opzioni": [
   "I test case vengono creati sulla base di informazioni di progettazione dettagliate",
   "Gli elementi testati all'interno dei moduli di codice dell'interfaccia sono utilizzati per misurare la copertura",
   "Le tecniche si basano molto sulla conoscenza del software e del dominio di business da parte del tester",
   "I test case vengono utilizzati per identificare le deviazioni dai requisiti"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "20",
  "domanda": "State testando un form semplificato per la ricerca di appartamenti , che prevede solo due criteri di ricerca : \n• Piano dell’appartamento (tre possibili opzioni: piano terra; primo piano; secondo piano o superiore) \n• Tipo di giardino (tre possibili opzioni: nessun giardino; giardino piccolo; giardino grande) \nSolo gli appartamenti al piano terra hanno un giardino. Il form ha un meccanismo di validazione integrato che non vi consentirà di utilizzare i criteri di ricerca che violano questa regola. \nOgni test ha due valori di input: piano dell’appartamento e tipo di giardino. Volete applicare il partizionamento di equivalenza per coprire ogni piano dell’appartamento e ogni tipo di giardin o. \nQual è il numero minimo di test case per ottenere il 100% di copertura del partizionamento di equivalenza ?",
  "opzioni": [
   "3",
   "4",
   "5",
   "6"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "21",
  "domanda": 'State testando un sistema che calcola il voto finale del corso per un determinato studente. Il voto finale viene assegnato in base al risultato finale, secondo le seguenti regole:',
  "tabella": [
    ['Punti', 'Voto finale'],
    ['0–50', 'bocciato'],
    ['51–60', 'discreto'],
    ['61–70', 'sufficiente'],
    ['71–80', 'buono'],
    ['81–90', 'ottimo'],
    ['91–100', 'eccellente']
  ],
  "tabella2": [
    ['Test Case', 'Risultato finale', 'Voto finale'],
    ['TC1', '91', 'eccellente'],
    ['TC2', '50', 'bocciato'],
    ['TC3', '81', 'ottimo'],
    ['TC4', '60', 'discreto'],
    ['TC5', '70', 'sufficiente'],
    ['TC6', '80', 'buono']
  ],
  "descrizione": 'Qual è la copertura dell\'analisi ai valori limite a 2 valori per il risultato finale, che è stata ottenuta con i test case riportati nella lista?',
   "opzioni": [
   "50%",
   "60%",
   "33.3%",
   "100%"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "22",
  domanda: 'Il vostro negozio preferito di noleggio giornaliero di biciclette ha appena introdotto un nuovo sistema di Customer Relationship Management (CRM). Le funzionalità implementate sono:',
  tabella: [
    ['Funzionalità'],
    ['• Chiunque può noleggiare una bicicletta, e i soci del negozio ricevono uno sconto del 20%'],
    ['• Se il termine di restituzione non viene rispettato, lo sconto non è più disponibile'],
    ['• Dopo 15 noleggi, i soci ricevono in regalo una maglietta']
  ],
  tabella2: [
    ['Condizioni', 'R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8'],
    ['Essere socio del negozio', 'T', 'T', 'T', 'T', 'F', 'F', 'F', 'F'],
    ['Termine non rispettato', 'T', 'F', 'T', 'F', 'T', 'F', 'F', 'T'],
    ['15esimo noleggio', 'F', 'F', 'T', 'T', 'F', 'F', 'T', 'T'],
    ['Azioni'],
    ['20% di sconto', '', 'X', '', 'X', '', '', '', ''],
    ['Maglietta regalo', '', '', 'X', 'X', '', '', '', 'X']
  ],
  descrizione: 'Basandosi SOLO sulla descrizione delle funzionalità del sistema di Customer Relationship Management, quale delle regole definite sopra descrive una situazione impossibile?',
   "opzioni": [
   "R4",
   "R2",
   "R6",
   "R8"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "23",
  "domanda": "State testando un sistema il cui ciclo di vita è modellato dal seguente state transition diagram. Il sistema inizia nello stato INIT e termina il suo funzionamento nello stato OFF. Qual è il numero MINIMO di test case per ottenere una copertura delle transizioni valida?",
  "opzioni": [
   "4",
   "2",
   "7",
   "3"
  ],
  "corretta": [
   "d"
  ],
  "immagine": img_23_A
 },
 {
  "id": "24",
  "domanda": "Una test suite ha raggiunto il 100% di copertura delle istruzioni. Qual è la conseguenza di questo risultato?",
  "opzioni": [
   "Ogni istruzione nel codice che contiene un difetto è stata eseguita almeno una volta",
   "Qualsiasi test suite che contenga più test case di questa test suite raggiungerà comunque il 100% di copertura delle istruzioni",
   "Ogni cammino nel codice è stato eseguito almeno una volta",
   "Ogni combinazione di valori di input è stata testata almeno una volta"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "25",
  "domanda": "Quale delle seguenti affermazioni NON è vera per il testing white-box?",
  "opzioni": [
   "Durante il testing white-box viene considerata l’implementazione completa del software",
   "Le metriche di copertura white-box possono aiutare a identificare test aggiuntivi per aumentare la copertura del codice",
   "Le tecniche di test white-box possono essere utilizzate nel testing statico",
   "Il testing white-box può aiutare a identificare le lacune nell'implementazione dei requisiti"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "26",
  "domanda": "Quale delle seguenti affermazioni descrive meglio il concetto di error guessing?",
  "opzioni": [
   "Error guessing implica l'utilizzo della propria conoscenza ed esperienza sui difetti rilevati in passato e sugli errori tipici degli sviluppatori",
   "Error guessing implica l'utilizzo della propria esperienza personale sullo sviluppo e sugli errori commessi come sviluppatore",
   "Error guessing richiede di immaginare di essere l'utente dell'oggetto di test e di indovinare gli errori che l'utente potrebbe commettere interagendo con esso",
   "Error guessing richiede di duplicare rapidamente l'attività di sviluppo per identificare il tipo"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "27",
  "domanda": "Nel vostro progetto si è verificato un ritardo nel rilascio di una nuovissima applicazione e l'esecuzione dei test è iniziata in ritardo, ma avete una conoscenza del dominio molto dettagliata e buone competenze analitiche. L'elenco completo dei requisiti non è ancora stato condiviso con il team, ma il management chiede di presentare alcuni risultati dei test. \nQuale tecnica di test si adatta MEGLIO a questa situazione?",
  "opzioni": [
   "Testing checklist-based",
   "Error guessing",
   "Testing esplorativo",
   "Testing dei rami"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "28",
  "domanda": "Quale delle seguenti affermazioni descrive MEGLIO il modo in cui i criteri di accettazione possono essere documentati?",
  "opzioni": [
   "Eseguire retrospettive per determinare le attuali esigenze degli stakeholder relativ ament e a una determinata user story",
   "Utilizzare il formato given/when/then per descrivere un esempio di condizione di test relativa a una determinata user story",
   "Utilizzare la comunicazione verbale per ridurre il rischio di incomprensione dei criteri di accettazione da parte di altri",
   "Documentare i rischi relativi a una determinata user story in un test plan per facilitare il testing basato sul rischio di una determinata user story"
  ],
  "corretta": [
   "b"
  ]
 },
 {
  "id": "29",
  "domanda": "Si consideri la seguente user story: \nCome Editore Voglio eseguire la review dei contenuti prima che venga no pubblicati in modo da assicurarmi che la grammatica sia corretta \ne i relativi criteri di accettazione: \n• L'utente può accedere al sistema di content management con il ruolo di \"Editore\" \n• L'editore può visualizzare le pagine di contenuto esistenti \n• L'editore può modificare il contenuto della pagina \n• L'editore può aggiungere commenti di markup \n• L'editore può salvare le modifiche \n• L'editore può riassegnare il ruolo di \"proprietario dei contenuti\" per eseguire gli aggiornamenti \nQuale dei seguenti è il MIGLIOR esempio di test ATDD per questa user story?",
  "opzioni": [
   "Testare se l'editore può salvare il documento dopo aver modificato il contenuto della pagina",
   "Testare se il proprietario dei contenuti può accedere e aggiornare il contenuto",
   "Testare se l'editore può schedulare il contenuto modificato per la pubblicazione",
   "Testare se l’editore può riassegnare a un altro editore l'esecuzione degli aggiornamenti"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "30",
  "domanda": "In che modo i tester aggiungono valore alla pianificazione dell’iterazione e alla pianificazione della release ?",
  "opzioni": [
   "I tester determinano la priorità delle user story da sviluppare",
   "I tester si focalizzano solo sugli aspetti funzionali del sistema da testare",
   "I tester partecipano all'identificazione dettagliata dei rischi e alla valutazione dei rischi delle user story",
   "I tester garantiscono il rilascio di software di alta qualità attraverso la progettazione anticipata"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "31",
  "domanda": "Quali DUE delle seguenti opzioni possono essere considerat e come criteri di uscita relativi alle attività de l test di sistema?",
  "opzioni": [
   "Readiness dell'ambiente di test",
   "Capacità di eseguire il log in del l'oggetto di test da parte del tester",
   "Viene raggiunta la densità stimata dei difetti",
   "I requisiti sono tradotti nel formato given/when/then",
   "I regression test sono automatizzati"
  ],
  "corretta": [
   "c",
   "e"
  ]
 },
 {
  "id": "32",
  "domanda": "Il vostro team utilizza la tecnica di stima three-point estimation (stima dei tre punti) , per stimare l'effort d el test per una nuova funzionalità ad alto rischio. Sono state effettuate le seguenti stime: \n• Stima più ottimistica: 2 ore-persona \n• Stima più probabile: 11 ore-persona \n• Stima più pessimistica: 14 ore-persona \nQual è la stima finale corretta, quando è richiesto che la tecnica applicata debba prend ere in considerazione l’errore di misura ?",
  "opzioni": [
   "9 ore-persona",
   "14 ore-persona",
   "11 ore-persona",
   "10 ore-persona"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "33",
  domanda: 'State testando un\'applicazione mobile che consente agli utenti di trovare un ristorante nelle vicinanze in base al tipo di cibo desiderato. Si consideri la seguente lista di test case, con priorità (un valore più piccolo indica priorità più alta) e dipendenze:',
  tabella: [
    ['Numero di test case', 'Condizione di test coperta', 'Priorità', 'Dipendenza logica'],
    ['TC 001', 'Selezionare il tipo di cibo', '3', 'nessuna'],
    ['TC 002', 'Selezionare il ristorante', '2', 'TC 001'],
    ['TC 003', 'Ottenere la posizione', '1', 'TC 002'],
    ['TC 004', 'Chiamare il ristorante', '2', 'TC 002'],
    ['TC 005', 'Eseguire la prenotazione', '3', 'TC 002']
  ],
  descrizione: 'Quale dei seguenti test case dovrebbe essere eseguito come terzo?',
    "opzioni": [
   "TC 003",
   "TC 005",
   "TC 002",
   "TC 001"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "34",
  "domanda": "Considerate le seguenti categorie di test (1-4): \n1. Testing di usabilità \n2. Testing di componente \n3. Testing funzionale \n4. Testing di affidabilità \ne i seguenti quadranti del testing (A-D): \nA. Quadrante del testing Q1: orientato alla tecnologia che supporta il team di sviluppo \nB. Quadrante del testing Q2: orientato al business che supporta il team di sviluppo \nC. Quadrante del testing Q3: orientato al business che critica il prodotto \nD. Quadrante del testing Q4: orientato alla tecnologia che critica il prodotto \nA quali quadranti del testing appartengono le categorie di test?",
  "opzioni": [
   "1C, 2A, 3B, 4D",
   "1D, 2A, 3C, 4B",
   "1C, 2B, 3D, 4A",
   "1D, 2B, 3C, 4A"
  ],
  "corretta": [
   "a"
  ]
 },
 {
  "id": "35",
  "domanda": "Durante l'analisi del rischio è stato identificato e valutato il seguente rischio: \n• Rischio: tempi di risposta troppo lunghi per generare un report \n• Probabilità del rischio: media; impatto del rischio: alto \n• Risposta al rischio: \n- o Un team di test indipendente esegue il performance testing durante il testing di sistema \n- o Un campione selezionato di utenti finali esegue il testing di accettazione alpha e beta testing prima del rilascio \nQuale delle seguenti azioni di risposta viene applicata al rischio analizzato?",
  "opzioni": [
   "Accettazione del rischio",
   "Contingency plan",
   "Mitigazione del rischio",
   "Trasferimento del rischio"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "36",
  "domanda": "Quale prodotto di lavoro può essere utilizzato da un team Agile per visualizzare la quantità di lavoro completata e la quantità di lavoro totale rimanente per una determinata iterazione?",
  "opzioni": [
   "Criteri di accettazione",
   "Defect report",
   "Test completion report",
   "Burndown chart"
  ],
  "corretta": [
   "d"
  ]
 },
 {
  "id": "37",
  "domanda": "Dovete aggiornare un test script automatizzato per allinearlo a un nuovo requisito. Quale processo indica la creazione di una nuova versione del test script nel repository di test?",
  "opzioni": [
   "Gestione della tracciabilità",
   "Testing di manutenzione",
   "Configuration management",
   "Requirements Engineering"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "38",
  "domanda": "Avete ricevuto il seguente defect report dagli sviluppatori, in cui si afferma che l'anomalia descritta in questo test report non è riproducibile. \nL'applicazione si blocca \n03-maggio-2022 – \nJohn Doe- Rifiutato \nL'applicazione si blocca dopo aver inserito \" Input del t est: $ä\" nel campo Nome nella schermata di creazione di un nuovo utente. Ho provato a disconnettermi e ad accedere con l'account test_admin01, stesso problema. Ho provato con altri account test_ admin, stesso problema. Non è stato ricevuto alcun messaggio di errore; il log (vedi allegato) contiene una notifica di errore fatale. In base al test case TC-1305, l'applicazione dovrebbe accettare l'input inserito e creare l'utente. Si prega di risolvere il problema con priorità elevata, poiché questa funzionalità è correlata a REQ-0012, che è un nuovo requisito di business critico. \nQuali informazioni critiche sono MANCAN TI in questo test report che sarebbero state utili per gli sviluppatori?",
  "opzioni": [
   "Risultato atteso e risultato ottenuto",
   "Riferimenti e stato de l difett o",
   "Ambiente di test e oggetto di test",
   "Priorità e severità"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "39",
  "domanda": "Quale attività di test supporta uno strumento di preparazione dei dati?",
  "opzioni": [
   "Monitoraggio e controllo dei test",
   "Progettazione dei test",
   "Implementazione dei test",
   "Completamento dei test"
  ],
  "corretta": [
   "c"
  ]
 },
 {
  "id": "40",
  "domanda": "Quale risposta identifica correttamente un rischio potenziale dell'esecuzione della test automation?",
  "opzioni": [
   "Può introdurre regressioni sconosciute in produzione",
   "Gli effort necessari a manuten ere il testware po ssono non essere allocati in modo appropriato",
   "Gli strumenti di test e il relativo testware po ssono non essere sufficientemente affidabili",
   "Può essere ridotto il tempo dedicato al testing manuale"
  ],
  "corretta": [
   "b"
  ]
 }
];

export default questions1;
