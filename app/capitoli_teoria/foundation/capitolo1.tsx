import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Capitolo1Screen() {
  return (
    <View style={styles.wrapper}>
    <ScrollView style={styles.container}>
      <Text style={styles.title}>1. Fondamenti del Testing</Text>
      <Text style={styles.paragraph}>1. Fondamenti del Testing - 180 minuti 
Parole Chiave 
analisi dei test, base di test, completamento dei test, condizione di test, controllo dei test, copertura, dati di 
test, debugging, difetto, errore, esecuzione dei test, failure, implementazione dei test, monitoraggio 
(monitoring) dei test, obiettivo del testing, oggetto di test, pianificazione dei test, procedura di test, processo 
di test, progettazione dei test, qualità, quality assurance, risultato del test, root cause, test case, testing, 
testware, tracciabilità, validazione, verifica</Text>
      <Text style={styles.paragraph}>Obiettivi di Apprendimento per il Capitolo 1:</Text>
      <Text style={styles.subtitle}>1.5 Competenze Fondamentali e Buone Pratiche nel Testing</Text>
      <Text style={styles.paragraph}>FL-1.5.1 
(K2) Fornire esempi delle competenze generiche richieste per il testing 
FL-1.5.2 
(K1) Richiamare i vantaggi dell'approccio whole-team 
FL-1.5.3 
(K2) Distinguere i benefici e gli svantaggi dell'indipendenza del testing</Text>
      
      <Text style={styles.subtitle}>1.1 Cos'è il Testing?</Text>
      <Text style={styles.paragraph}>I sistemi software sono parte integrante della nostra vita quotidiana. La maggior parte delle persone ha 
avuto esperienza con un software che non ha funzionato come previsto. Un software che non funziona 
correttamente può causare molti problemi, tra cui perdite di denaro, di tempo o di reputazione aziendale e, 
in casi estremi, persino infortuni o morte. Il testing del software valuta la qualità del software e aiuta a ridurre 
il rischio di failure nel software in produzione. 
Il testing del software è un insieme di attività volte a scoprire i difetti e a valutare la qualità dei prodotti di 
lavoro del software. Questi prodotti di lavoro, quando vengono sottoposti al testing, sono conosciuti come 
oggetti di test. Un'errata percezione comune è che il testing consista solo nell'esecuzione dei test (cioè 
nell'eseguire il software e verificare i risultati dei test). Il testing del software include anche altre attività e 
deve essere allineato con il ciclo di vita dello sviluppo software (si veda il capitolo 2). 
Un'altra errata percezione comune sul testing è che il testing si focalizzi interamente sulla verifica 
dell'oggetto del test. Se da un lato il testing comporta la verifica, cioè verificare che il sistema soddisfi i 
requisiti specificati, dall'altro comporta anche la validazione, cioè verificare che il sistema soddisfi le 
esigenze degli utenti e degli altri stakeholder nel suo ambiente operativo. 
Il testing può essere dinamico o statico. Il testing dinamico comporta l'esecuzione del software, mentre il 
testing statico non lo richiede. Il testing statico include le review (si veda il capitolo 3) e l'analisi statica. Il 
testing dinamico utilizza differenti tipi di tecniche di test e approcci del test per derivare i test case (si veda 
il capitolo 4). 
Il testing non è solo un'attività tecnica. Deve anche essere pianificato, gestito, stimato, monitorato e 
controllato in modo appropriato (si veda il capitolo 5). 
I tester utilizzano strumenti (si veda capitolo 6), ma è importante ricordare che il testing è in gran parte 
un'attività intellettuale, che richiede ai tester conoscenze specialistiche, competenze analitiche e 
l'applicazione del pensiero critico (critical thinking) e del pensiero sistemico (system thinking) (Myers 2011, 
Roman 2018). 
Lo standard ISO/IEC/IEEE 29119-1 fornisce ulteriori informazioni sui concetti del testing del software.</Text>
      <Text style={styles.subtitle}>1.1.1 Obiettivi del Testing</Text>
      <Text style={styles.bullet}>• Gli obiettivi tipici del testing sono:</Text>
      <Text style={styles.bullet}>• Valutare i prodotti di lavoro come requisiti, user story, progettazione e codice</Text>
      <Text style={styles.bullet}>• Generare failure e rilevare difetti</Text>
      <Text style={styles.bullet}>• Garantire la copertura richiesta di un oggetto di test</Text>
      <Text style={styles.bullet}>• Ridurre il livello di rischio di una qualità del software inadeguata</Text>
      <Text style={styles.bullet}>• Verificare se i requisiti specificati sono stati soddisfatti</Text>
      <Text style={styles.bullet}>• Verificare che un oggetto di test sia conforme ai requisiti contrattuali, legali e normativi</Text>
      <Text style={styles.bullet}>• Fornire informazioni agli stakeholder per consentire loro di prendere decisioni informate</Text>
      <Text style={styles.bullet}>• Creare fiducia nella qualità dell'oggetto di test</Text>
      <Text style={styles.bullet}>• Validare che l'oggetto di test sia completo e funzioni come richiesto dagli stakeholder</Text>
      
      <Text style={styles.paragraph}>Gli obiettivi dei test possono variare a seconda del contesto, che include il prodotto di lavoro sotto test, il 
livello di test, i rischi, il ciclo di vita dello sviluppo software (SDLC, Software Development Life Cycle) da 
applicare, e i fattori legati al contesto di business, ad esempio la struttura organizzativa, le considerazioni 
sulla concorrenza o il time-to-market.</Text>
      <Text style={styles.subtitle}>1.1.2 Testing e Debugging</Text>
      <Text style={styles.bullet}>• Il testing e il debugging sono attività separate. Il testing può generare failure causati da difetti nel software 
(testing dinamico) o può rilevare direttamente difetti nell'oggetto di test (testing statico).  
Quando il testing dinamico (si veda il capitolo 4) innesca un failure, il debugging si occupa di trovare le 
cause di questo failure (difetti), analizzare queste cause ed eliminarle. Il tipico processo di debugging in 
questo caso prevede:</Text>
      <Text style={styles.bullet}>• Riproduzione di un failure</Text>
      <Text style={styles.bullet}>• Diagnosi (ricerca del difetto)</Text>
      <Text style={styles.bullet}>• Correzione del difetto 
Il successivo testing confermativo verifica se le correzioni abbiano risolto il problema. Il testing confermativo 
dovrebbe essere eseguito dalla stessa persona che ha eseguito il test iniziale. Successivamente può 
essere eseguito anche il regression testing, per verificare se le correzioni apportate stanno causando failure 
in altre parti dell'oggetto di test (per ulteriori informazioni sul testing confermativo e sul regression testing, 
si veda il paragrafo 2.2.3).  
Quando il testing statico identifica un difetto, il debugging si occupa di eliminarlo. Non è necessaria la 
riproduzione o la diagnosi, poiché il testing statico rileva direttamente i difetti e non può causare failure (si 
veda il capitolo 3).</Text>
      <Text style={styles.subtitle}>1.2 Perché il Testing è Necessario?</Text>
      <Text style={styles.paragraph}>Il testing, come forma di quality control, aiuta a raggiungere gli obiettivi dei test concordati entro l'ambito, i 
tempi, la qualità e i vincoli di budget stabiliti. Il contributo del testing al successo non dovrebbe essere 
limitato alle attività del team di test. Tutti gli stakeholder possono utilizzare le loro competenze nel testing 
per avvicinare il progetto al successo. Il testing dei componenti, dei sistemi e dei prodotti di lavoro associati 
(ad esempio, la documentazione) aiuta a identificare i difetti nel software.</Text>
      <Text style={styles.subtitle}>1.2.1 Il Contributo del Testing al Successo</Text>
      <Text style={styles.paragraph}>Il testing fornisce un mezzo efficace, dal punto di vista dei costi, per rilevare i difetti. Questi difetti possono 
poi essere eliminati (attraverso il debugging, un'attività che non riguarda il testing), e quindi il testing 
contribuisce indirettamente ad ottenere oggetti di test di qualità superiore. 
Il testing fornisce un mezzo per valutare direttamente la qualità di un oggetto di test in varie fasi del ciclo di 
vita dello sviluppo software. Queste misure vengono utilizzate come parte di una più ampia attività di project 
management, contribuendo a decisioni sul passaggio alla fase successiva del ciclo di vita dello sviluppo 
software, come la decisione di rilascio.</Text>
      
      <Text style={styles.paragraph}>Il testing fornisce agli utenti una rappresentazione indiretta del progetto di sviluppo. I tester assicurano che 
la comprensione delle esigenze degli utenti venga presa in considerazione durante tutto il ciclo di vita dello 
sviluppo software. L'alternativa è di coinvolgere un insieme rappresentativo di utenti nel progetto di 
sviluppo, cosa che di solito non è possibile a causa dei costi elevati e della mancanza di disponibilità di 
utenti adeguati. 
Il testing può anche essere richiesto per soddisfare requisiti contrattuali o legali, o per conformità verso 
standard normativi.</Text>
      <Text style={styles.subtitle}>1.2.2 Testing e Quality Assurance (QA)</Text>
      <Text style={styles.paragraph}>Le persone usano spesso la terminologia "testing" e "Quality Assurance" (Garanzia di Qualità, QA) in modo 
intercambiabile, ma testing e Quality Assurance non sono la stessa cosa. 
Il testing è un approccio correttivo orientato al prodotto che si focalizza su quelle attività che supportano il 
raggiungimento di appropriati livelli di qualità. Il testing è una delle principali forme di Quality Control, mentre 
altre includono i metodi formali (verifica del modello e prova di correttezza), la simulazione e la 
prototipazione. 
La Quality Assurance è un approccio preventivo orientato al processo, che si focalizza sull'implementazione 
e sul miglioramento dei processi. Si basa sul principio che se un buon processo è seguito in modo corretto, 
questo genererà un buon prodotto. La Quality Assurance si applica sia al processo di sviluppo sia al 
processo di test ed è sotto la responsabilità di ogni membro di un progetto. 
I risultati del test vengono utilizzati dalla Quality Assurance per fornire un feedback su quanto bene si stiano 
eseguendo i processi di sviluppo e di test e, dal testing, per correggere i difetti.</Text>
      <Text style={styles.subtitle}>1.2.3 Errori, Difetti, Failure e Root Cause</Text>
      <Text style={styles.paragraph}>Gli esseri umani commettono errori, che causano l’introduzione di difetti (guasti, bug), che a loro volta 
possono causare failure. Gli esseri umani commettono errori per ragioni differenti, come la pressione sui 
tempi, la complessità dei prodotti di lavoro, dei processi, delle infrastrutture o delle interazioni, o 
semplicemente perché sono stanchi o non hanno una formazione adeguata.  
I difetti possono essere rilevati nella documentazione, come una specifica dei requisiti o un test script, nel 
codice sorgente o in un prodotto di lavoro di supporto come un file di build. I difetti nei prodotti di lavoro 
generati nelle prime fasi del ciclo di vita dello sviluppo software, se non rilevati, spesso portano a prodotti 
di lavoro difettosi nelle fasi successive del ciclo di vita. Se un difetto nel codice viene eseguito, il sistema 
può fallire, non facendo quello che dovrebbe fare, o facendo qualcosa che non dovrebbe fare, causando 
un failure. Alcuni difetti causeranno sempre un failure se eseguiti, altri causeranno un failure solo in 
circostanze specifiche, e altri non causeranno mai un failure. 
Gli errori e i difetti non sono l'unica causa di failure. I failure possono essere causati anche da condizioni 
ambientali, come radiazioni o campi elettromagnetici che causano difetti nel firmware. 
Una root cause è il motivo all’origine del verificarsi di un problema (es. una situazione che causa un errore). 
Le root cause vengono identificate attraverso la root cause analysis, che viene eseguita in genere quando 
si verifica un failure o viene identificato un difetto. Si ritiene che ulteriori failure o difetti similari possano 
essere prevenuti, o che la loro frequenza possa essere ridotta, ponendo la giusta attenzione alla root cause, 
possibilmente eliminandola.</Text>
      
      <Text style={styles.subtitle}>1.3 Principi del Testing</Text>
      <Text style={styles.paragraph}>Nel corso degli anni sono stati proposti dei principi del testing che offrono linee guida generali applicabili a 
tutto il testing. Questo Syllabus descrive sette principi.  
1. Il testing mostra la presenza di difetti, ma non la loro assenza. Il testing può mostrare la presenza 
di difetti nell'oggetto di test, ma non può provarne l’assenza (Buxton 1970). Il testing riduce la probabilità 
che difetti non rilevati rimangano nell'oggetto di test, ma anche se nessun difetto viene rilevato, il testing 
non può dimostrare la correttezza dell'oggetto di test, ovvero l’assenza di difetti. 
2. Il testing esaustivo è impossibile. Testare tutto non è fattibile tranne che in casi banali (Manna 1978). 
Piuttosto che tentare di testare in modo esaustivo, le tecniche di test (si veda il capitolo 4), la prioritizzazione 
dei test case (si veda il paragrafo 5.1.5) e il testing basato sul rischio (si veda il paragrafo 5.2) dovrebbero 
essere utilizzati per focalizzare l’effort del test. 
3. Il testing anticipato permette di risparmiare tempo e denaro. I difetti che vengono eliminati nelle 
prime fasi del processo non causeranno ulteriori difetti nei prodotti di lavoro derivati. Il costo della qualità 
sarà ridotto poiché si verificheranno un minor numero di failure nel corso del ciclo di vita dello sviluppo 
software (Boehm 1981). Per rilevare difetti in anticipo, sia il testing statico (si veda il capitolo 3) che il testing 
dinamico dovrebbero iniziare il prima possibile (si veda il capitolo 4). 
4. I difetti si raggruppano in cluster. Un piccolo numero di componenti del sistema di solito contiene la 
maggior parte dei difetti rilevati o è responsabile della maggior parte dei failure in esercizio (Enders 1975). 
Questo fenomeno è una rappresentazione del principio di Pareto. I cluster dei difetti previsti e i cluster dei 
difetti effettivamente osservati durante il testing o in esercizio sono un input importante per il testing basato 
sul rischio (si veda il paragrafo 5.2). 
5. I test perdono di efficacia. Se gli stessi test vengono ripetuti molte volte, diventano sempre più inefficaci 
nel rilevare nuovi difetti (Beizer 1990). Per ovviare a questo effetto, i test e i dati di test esistenti potrebbero 
dover essere modificati, e potrebbe essere necessario scrivere nuovi test. Tuttavia, in alcuni casi, la 
ripetizione degli stessi test può avere dei benefici, ad esempio nel regression testing automatizzato (si veda 
il paragrafo 2.2.3). 
6. Il testing è dipendente dal contesto. Non esiste un unico approccio universalmente applicabile al 
testing. Il testing viene eseguito in modo diverso in contesti differenti (Kaner 2011). 
7. L'assenza di difetti è un’idea sbagliata. È un'idea sbagliata aspettarsi che la verifica del software 
garantisca il successo di un sistema. Il testing approfondito di tutti i requisiti specificati e la correzione di 
tutti i difetti rilevati potrebbe comunque portare al rilascio un sistema che non soddisfa le esigenze e le 
aspettative degli utenti, che non aiuta a raggiungere gli obiettivi di business del cliente, o che risulta inferiore 
rispetto ad altri sistemi concorrenti. Oltre alla verifica, dovrebbe essere effettuata anche la validazione 
(Boehm 1981).</Text>
      <Text style={styles.subtitle}>1.4 Attività di Test, Testware e Ruoli del Test</Text>
      <Text style={styles.paragraph}>Il testing è dipendente dal contesto ma, ad alto livello, esistono insiemi comuni di attività di test senza le 
quali è meno probabile che il testing raggiunga i propri obiettivi. Questi insiemi di attività di test costituiscono 
un processo di test. Il processo di test può essere adattato a una determinata situazione in base a diversi 
fattori. Le attività di test incluse in questo processo di test, le modalità della loro implementazione e il 
momento in cui vengono svolte sono normalmente decise come parte della pianificazione dei test per la 
situazione specifica (si veda il paragrafo 5.1).</Text>
      
      <Text style={styles.paragraph}>I seguenti paragrafi descrivono gli aspetti generali di questo processo di test in termini di attività e compiti 
del test, impatto del contesto, testware, tracciabilità tra la base di test e il testware, e ruoli del test. 
Lo standard ISO/IEC/IEEE 29119-2 fornisce ulteriori informazioni sui processi di test.</Text>
      <Text style={styles.subtitle}>1.4.1 Attività e Compiti del Test</Text>
      <Text style={styles.paragraph}>Un processo di test è generalmente costituito dai gruppi principali di attività descritti di seguito. Sebbene 
molte di queste attività possano sembrare seguire una sequenza logica, spesso vengono implementate in 
modo iterativo o in parallelo. Queste attività di test devono essere adattate (tailoring) al sistema e al 
progetto. 
La pianificazione dei test consiste nella definizione degli obiettivi del testing e nella selezione 
dell'approccio che meglio raggiunga gli obiettivi all'interno dei vincoli imposti dal contesto generale. La 
pianificazione dei test è spiegata ulteriormente nel paragrafo 5.1. 
Monitoraggio dei test e controllo dei test. Il monitoraggio dei test prevede la verifica continua di tutte le 
attività di test e il confronto dell’avanzamento effettivo rispetto al piano. Il controllo dei test prevede 
l’implementazione delle azioni necessarie per raggiungere gli obiettivi dei test. Il monitoraggio dei test e il 
controllo dei test sono ulteriormente spiegati nel paragrafo 5.3. 
L'analisi dei test include l'analisi della base di test per identificare le funzionalità testabili. Le condizioni di 
test associate vengono definite e prioritizzate, tenendo conto dei relativi rischi e livelli di rischio (si veda il 
paragrafo 5.2). La base di test e l’oggetto di test sono valutati anche per identificare i difetti che questi 
possono contenere e per valutare la loro testabilità. L'analisi dei test è spesso supportata dall'utilizzo di 
tecniche di test (si veda il capitolo 4). L'analisi dei test risponde alla domanda "cosa testare?" in termini di 
criteri di copertura misurabili.  
La progettazione dei test include l'elaborazione delle condizioni di test in test case e in altro testware (es. 
test charter). Questa attività prevede spesso l'identificazione degli elementi di copertura, che servono come 
guida per specificare gli input dei test case. Le tecniche di test (si veda il capitolo 4) possono essere 
utilizzate per supportare questa attività. La progettazione dei test include anche la definizione dei requisiti 
dei dati di test, la progettazione dell'ambiente di test e l'identificazione dell’infrastruttura e degli strumenti 
necessari. La progettazione dei test risponde alla domanda "come testare?". 
L'implementazione dei test include la creazione o l'acquisizione del testware necessario per l'esecuzione 
dei test (es. i dati di test). I test case possono essere organizzati in procedure di test, le quali spesso 
vengono assemblate in test suite. Vengono creati test script manuali e automatizzati. Le procedure di test 
vengono prioritizzate e organizzate all’interno di una schedulazione dell’esecuzione dei test per 
un'esecuzione efficiente dei test (si veda il paragrafo 5.1.5). Viene creato l'ambiente di test, verificando che 
sia configurato correttamente. 
L'esecuzione dei test si basa sulla schedulazione di esecuzione dei test (test run). L'esecuzione dei test 
può essere manuale o automatizzata. L'esecuzione dei test può assumere diverse forme, tra cui il 
continuous testing o sessioni di pair testing. I risultati effettivi dei test vengono confrontati con i risultati 
attesi. I risultati dei test vengono registrati (log). Le anomalie vengono analizzate per identificarne le 
probabili cause. Questa analisi consente di segnalare le anomalie in base ai failure osservati (si veda il 
paragrafo 5.5). 
Il completamento dei test di solito si svolge in corrispondenza delle milestone di progetto (es. rilascio, fine 
dell'iterazione, completamento del livello di test). Per qualsiasi difetto non risolto, vengono creati change 
request o item del product backlog. Tutto il testware che può essere utile in futuro viene identificato e</Text>
      
      <Text style={styles.paragraph}>archiviato, o consegnato ai team appropriati. L'ambiente di test viene finalizzato in uno stato concordato. 
Le attività di test vengono analizzate per identificare le lessons learned (lezioni apprese) e i miglioramenti 
per le iterazioni, le release o i progetti futuri (si veda il paragrafo 2.1.6). Un test completion report viene 
creato e comunicato agli stakeholder.</Text>
      <Text style={styles.subtitle}>1.4.2 Il Processo di Test nel Contesto</Text>
      <Text style={styles.bullet}>• Il testing non viene svolto in modo isolato. Le attività di test sono parte integrante dei processi di sviluppo 
eseguiti all'interno di un'organizzazione. Il testing è finanziato anche dagli stakeholder e il loro obiettivo 
finale è quello di contribuire a soddisfare le esigenze di business degli stakeholder. Il modo in cui il testing 
viene eseguito dipenderà quindi da una serie di fattori contestuali, che includono:</Text>
      <Text style={styles.bullet}>• Stakeholder (esigenze, aspettative, requisiti, disponibilità a collaborare, ecc.)</Text>
      <Text style={styles.bullet}>• Membri del team (competenze, conoscenze, livello di esperienza, disponibilità, esigenze di 
formazione, ecc.)</Text>
      <Text style={styles.bullet}>• Dominio di business (criticità dell'oggetto di test, rischi identificati, esigenze di mercato, normative 
legali specifiche, ecc.)</Text>
      <Text style={styles.bullet}>• Fattori tecnici (tipo di software, architettura del prodotto, tecnologia utilizzata, ecc.)</Text>
      <Text style={styles.bullet}>• Vincoli di progetto (ambito, tempo, budget, risorse, ecc.)</Text>
      <Text style={styles.bullet}>• Fattori organizzativi (struttura organizzativa, politiche esistenti, pratiche utilizzate, ecc.)</Text>
      <Text style={styles.bullet}>• Ciclo di vita dello sviluppo software (pratiche di ingegneria del software, metodi di sviluppo, ecc.)</Text>
      <Text style={styles.bullet}>• Strumenti (disponibilità, usabilità, conformità, ecc.) 
Questi fattori avranno un impatto su molte questioni relative al testing, che includono: strategia di test, 
tecniche di test utilizzate, grado di test automation, livello di copertura richiesto, livello di dettaglio del 
testware, reporting dei test, ecc.</Text>
      <Text style={styles.subtitle}>1.4.3 Testware</Text>
      <Text style={styles.bullet}>• Il testware viene creato come prodotto di lavoro in output delle attività di test descritte nel paragrafo 1.4.1. 
Il modo in cui le diverse organizzazioni producono, modellano, nominano, organizzano e gestiscono i loro 
prodotti di lavoro varia in modo significativo. Un configuration management appropriato (si veda il paragrafo 
5.4) assicura la consistenza e l'integrità dei prodotti di lavoro. La seguente lista dei prodotti di lavoro non è 
esaustiva:</Text>
      <Text style={styles.bullet}>• I prodotti di lavoro della pianificazione dei test includono: test plan, schedulazione dei test, risk 
register, criteri di ingresso e criteri di uscita (si veda il paragrafo 5.1). Il risk register (registro dei 
rischi) è una lista dei rischi identificati con la relativa probabilità di rischio, l'impatto del rischio e le 
informazioni sulla mitigazione del rischio (si veda il paragrafo 5.2). La schedulazione dei test, il risk 
register, i criteri di ingresso e i criteri di uscita sono spesso parte del test plan.</Text>
      <Text style={styles.bullet}>• I prodotti di lavoro del monitoraggio dei test e del controllo dei test includono: test progress 
report (si veda il paragrafo 5.3.2), documentazione delle direttive di controllo (si veda il paragrafo 
5.3) e informazioni sui rischi (si veda il paragrafo 5.2).</Text>
      
      <Text style={styles.bullet}>• I prodotti di lavoro dell'analisi dei test includono: condizioni di test (prioritizzate) (es. criteri di 
accettazione, si veda il paragrafo 4.5.2), e defect report sui difetti rilevati nella base di test (se non 
corretti direttamente).</Text>
      <Text style={styles.bullet}>• I prodotti di lavoro della progettazione dei test includono: test case (prioritizzati), test charter, 
elementi di copertura, requisiti dei dati di test e requisiti dell'ambiente di test.</Text>
      <Text style={styles.bullet}>• I prodotti di lavoro dell'implementazione dei test includono: procedure di test, test script manuali 
e automatizzati, test suite, dati di test, schedulazione dell’esecuzione dei test, ed elementi 
dell'ambiente di test. Esempi di elementi dell'ambiente di test includono: stub, driver, simulatori e 
virtualizzazioni di servizi.</Text>
      <Text style={styles.bullet}>• I prodotti di lavoro dell'esecuzione dei test includono: test log e defect report (si veda il paragrafo 
5.5).</Text>
      <Text style={styles.bullet}>• I prodotti di lavoro per il completamento dei test includono: test completion report (si veda il 
paragrafo 5.3.2), action item per il miglioramento dei progetti o delle iterazioni successive, lessons 
learned documentate e change request (es. come item del product backlog).</Text>
      <Text style={styles.subtitle}>1.4.4 Tracciabilità tra la Base di Test e il Testware</Text>
      <Text style={styles.bullet}>• Al fine di implementare un efficace monitoraggio dei test e controllo dei test, è importante stabilire e 
mantenere durante tutto il processo di test la tracciabilità tra gli elementi della base di test, il testware 
associato a questi elementi (es. condizioni di test, rischi, test case), i risultati dei test e i difetti. 
Una tracciabilità accurata supporta la valutazione della copertura, quindi è molto utile se i criteri di copertura 
misurabili sono definiti nella base di test. I criteri di copertura possono funzionare come Key Performance 
Indicator (KPI) per guidare le attività che mostrano in che misura gli obiettivi del testing sono stati raggiunti 
(si veda il paragrafo 1.1.1). Ad esempio:</Text>
      <Text style={styles.bullet}>• La tracciabilità dei test case verso i requisiti può verificare che i requisiti siano coperti dai test case.</Text>
      <Text style={styles.bullet}>• La tracciabilità dei risultati dei test verso i rischi può essere utilizzata per valutare il livello di rischio 
residuo di un oggetto di test.  
Oltre a valutare la copertura, una buona tracciabilità consente di determinare l'impatto delle modifiche, 
facilita l’auditing e aiuta a soddisfare i criteri di governance IT. Una buona tracciabilità rende anche più 
facilmente comprensibili i test progress report e i test completion report, includendo lo stato degli elementi 
della base di test. Questo può anche aiutare a comunicare gli aspetti tecnici del testing agli stakeholder in 
modo comprensibile. La tracciabilità fornisce informazioni per valutare la qualità del prodotto, la capacità 
del processo e l'avanzamento del progetto rispetto agli obiettivi di business.</Text>
      <Text style={styles.subtitle}>1.4.5 Ruoli nel Testing</Text>
      <Text style={styles.paragraph}>In questo Syllabus, vengono coperti due ruoli principali nel testing: un ruolo di test management e un ruolo 
di testing. Le attività e i compiti assegnati a questi due ruoli dipendono da diversi fattori, come il contesto 
di progetto e di prodotto, le competenze delle persone che ricoprono questi ruoli, e l'organizzazione. 
Il ruolo di test management assume la responsabilità generale del processo di test, del team di test e della 
leadership delle attività di test. Il ruolo di test management si focalizza principalmente sulle attività di 
pianificazione dei test, di monitoraggio dei test, di controllo dei test, e di completamento dei test. Il modo in 
cui il ruolo di test management viene svolto varia a seconda del contesto. Ad esempio, nello sviluppo</Text>
      
      <Text style={styles.paragraph}>software Agile, alcuni dei task di test management possono essere gestiti dal team Agile. I task che 
riguardano più team o l'intera organizzazione possono essere svolti da test manager esterni al team di 
sviluppo. 
Il ruolo di testing assume la responsabilità generale dell'aspetto ingegneristico (tecnico) del testing. Il ruolo 
di testing si focalizza principalmente sulle attività di analisi dei test, di progettazione dei test, di 
implementazione dei test e di esecuzione dei test. 
Questi ruoli possono essere coperti da persone differenti in momenti differenti. Ad esempio, il ruolo di test 
management può essere svolto da un team leader, da un test manager, da un responsabile dello sviluppo, 
ecc. È anche possibile che una persona assuma contemporaneamente i ruoli di testing e di test 
management.</Text>
      <Text style={styles.subtitle}>1.5 Competenze Fondamentali e Buone Pratiche nel Testing</Text>
      <Text style={styles.paragraph}>La competenza è l’abilità di fare bene qualcosa che deriva dalla conoscenza, dalla pratica e dall'attitudine. 
Un buon tester dovrebbe possedere alcune competenze fondamentali per svolgere bene il proprio lavoro. 
Buoni tester dovrebbero essere efficaci giocatori di squadra e dovrebbero essere in grado di eseguire il 
testing a differenti livelli di indipendenza.</Text>
      <Text style={styles.subtitle}>1.5.1 Competenze Generiche Richieste per il Testing</Text>
      <Text style={styles.bullet}>• Anche se generiche, le seguenti competenze sono particolarmente rilevanti per i tester:</Text>
      <Text style={styles.bullet}>• Conoscenza del testing (per aumentare l'efficacia del testing, ad esempio utilizzando le tecniche di 
test)</Text>
      <Text style={styles.bullet}>• Accuratezza, cautela, curiosità, attenzione ai dettagli, metodicità (per identificare i difetti, 
soprattutto quelli difficili da rilevare)</Text>
      <Text style={styles.bullet}>• Buone competenze di comunicazione, di active listening (ascolto attivo), di gioco di squadra (team 
player, per interagire efficacemente con tutti gli stakeholder, per trasmettere informazioni agli altri, 
per farsi capire, per segnalare e discutere i difetti)</Text>
      <Text style={styles.bullet}>• Pensiero analitico, pensiero critico, creatività (per aumentare l'efficacia del testing)</Text>
      <Text style={styles.bullet}>• Conoscenze tecniche (per aumentare l'efficienza del testing, per esempio utilizzando strumenti di 
test appropriati)</Text>
      <Text style={styles.bullet}>• Conoscenza del dominio (per essere in grado di comprendere e comunicare con gli utenti 
finali/rappresentanti di business) 
I tester sono spesso portatori di cattive notizie. È un tratto umano comune quello di incolpare il portatore di 
cattive notizie. Questo rende fondamentali le competenze di comunicazione dei tester. La comunicazione 
dei risultati dei test può essere percepita come una critica al prodotto e al suo autore. Il confirmation bias 
(pregiudizio di conferma) può rendere difficile accettare informazioni che sono in disaccordo con le 
convinzioni e le idee ritenute valide. Alcune persone possono percepire il testing come un'attività distruttiva, 
anche se contribuisce notevolmente al successo del progetto e alla qualità del prodotto. Per cercare di 
migliorare questa percezione, le informazioni sui difetti e sui failure dovrebbero essere comunicate in modo 
costruttivo.</Text>
      
      <Text style={styles.subtitle}>1.5.2 Approccio Whole-Team</Text>
      <Text style={styles.paragraph}>Una delle competenze importanti per un tester è la capacità di lavorare efficacemente in un contesto di 
team e di contribuire positivamente agli obiettivi del team. L'approccio whole-team, una pratica proveniente 
dall'Extreme Programming (si veda il paragrafo 2.1), si basa su questa competenza.  
Nell'approccio whole-team, ogni membro del team con le conoscenze e le competenze necessarie può 
svolgere qualsiasi compito, e tutti sono responsabili della qualità. I membri del team condividono lo stesso 
spazio di lavoro (fisico o virtuale), poiché la co-locazione facilita la comunicazione e l'interazione. 
L'approccio whole-team migliora le dinamiche del team, aumenta la comunicazione e la collaborazione 
all'interno del team, e crea sinergie consentendo di utilizzare le diverse competenze all'interno del team a 
vantaggio del progetto. 
I tester lavorano a stretto contatto con gli altri membri del team per garantire che vengano raggiunti i livelli 
di qualità desiderati. Questo include la collaborazione con i rappresentanti di business per aiutarli a creare 
test di accettazione adeguati e la collaborazione con gli sviluppatori per concordare la strategia di test e 
decidere gli approcci di test automation. I tester possono quindi trasferire le conoscenze del testing ad altri 
membri del team e influenzare lo sviluppo del prodotto. 
A seconda del contesto, l'approccio whole-team potrebbe non essere sempre appropriato. Ad esempio, in 
alcune situazioni, come un progetto safety-critical, può essere richiesto un alto livello di indipendenza del 
testing.</Text>
      <Text style={styles.subtitle}>1.5.3 Indipendenza del Testing</Text>
      <Text style={styles.paragraph}>Un certo grado di indipendenza rende il tester più efficace nel rilevare i difetti, grazie alle differenze tra i 
    cognitive bias (pregiudizi cognitivi) dell'autore e del tester (Salman 1995). L'indipendenza, tuttavia, non 
    sostituisce la familiarità: ad esempio gli sviluppatori possono trovare efficacemente molti difetti nel proprio 
    codice. 
    I prodotti di lavoro possono essere testati dal loro autore (nessuna indipendenza), dai colleghi dell'autore 
    dello stesso team (poca indipendenza), da tester esterni al team dell'autore ma all'interno 
    dell'organizzazione (alta indipendenza) o da tester esterni all'organizzazione (indipendenza molto alta). Per 
    la maggior parte dei progetti, di solito è meglio svolgere il testing con livelli multipli di indipendenza (es. gli 
    sviluppatori eseguono il testing di componente e il testing di integrazione dei componenti, il team di test 
    esegue il testing di sistema e il testing di integrazione dei sistemi, e i rappresentanti di business eseguono 
    il testing di accettazione). 
    Il principale vantaggio dell'indipendenza del testing è che i tester indipendenti sono in grado di riconoscere 
    differenti tipi di failure e difetti rispetto agli sviluppatori grazie ai loro diversi background, alle loro specifiche 
    prospettive tecniche e bias (pregiudizi). Inoltre, un tester indipendente può verificare, sfidare o confutare le 
    ipotesi formulate dagli stakeholder durante la specifica e l'implementazione del sistema.  
    Tuttavia, ci sono anche alcuni svantaggi. I tester indipendenti possono essere isolati dal team di sviluppo, 
    e questo può portare a una mancanza di collaborazione, a problemi di comunicazione o a un rapporto 
    conflittuale con il team di sviluppo. Gli sviluppatori possono perdere il senso di responsabilità per la qualità. 
    I tester indipendenti possono essere visti come un collo di bottiglia o essere incolpati per i ritardi nel rilascio.</Text>
      
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