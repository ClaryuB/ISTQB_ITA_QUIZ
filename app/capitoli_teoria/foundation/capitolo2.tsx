import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Capitolo1Screen() {
  return (
    <View style={styles.wrapper}>
    <ScrollView style={styles.container}>
      <Text style={styles.title}>2. Testing Durante il Ciclo di Vita del Software</Text>
      <Text style={styles.paragraph}>2. Il Testing all’Interno del Ciclo di Vita dello Sviluppo 
Software - 130 minuti 
Parole chiave 
livello di test, oggetto di test, regression testing, shift-left, testing black-box, testing confermativo, testing di 
accettazione, testing di componente, testing di integrazione, testing di integrazione dei componenti, testing 
di integrazione dei sistemi, testing di manutenzione, testing di sistema, testing funzionale, testing non 
funzionale, testing white-box, tipo di test 
Obiettivi di Apprendimento per il Capitolo 2:</Text>
      <Text style={styles.subtitle}>2.3 Testing di Manutenzione</Text>
      <Text style={styles.paragraph}>FL-2.3.1 
(K2) Riassumere il testing di manutenzione e i suoi trigger di attivazione</Text>

      <Text style={styles.subtitle}>2.1 Il Testing nel Contesto di un Ciclo di Vita dello Sviluppo Software</Text>
      <Text style={styles.paragraph}>(SDLC) 
Il ciclo di vita dello sviluppo software (SDLC, Software Development LifeCycle) è una rappresentazione 
astratta e di alto livello del processo di sviluppo software. Un modello di SDLC definisce come le differenti 
fasi di sviluppo e i tipi di attività svolte all'interno di questo processo si relazionano tra loro, sia logicamente 
che cronologicamente. Esempi di modelli di SDLC includono: modelli di sviluppo sequenziale (es. waterfall, 
V-model), modelli di sviluppo iterativo (es. modello a spirale, prototipazione) e modelli di sviluppo 
incrementale (es. Unified Process). 
Alcune attività all'interno dei processi di sviluppo software possono anche essere descritte da metodi di 
sviluppo software più dettagliati e da pratiche Agile. Esempi includono: acceptance test-driven development 
(ATDD), behavior-driven development (BDD), domain-driven design (DDD), extreme programming (XP), 
feature-driven development (FDD), Kanban, Lean IT, Scrum, e test-driven development (TDD).</Text>
      <Text style={styles.subtitle}>2.1.1 Impatto del Ciclo di Vita dello Sviluppo Software sul Testing</Text>
      <Text style={styles.bullet}>• Per avere successo, il testing deve essere adattato al SDLC. La scelta del SDLC ha un impatto su:</Text>
      <Text style={styles.bullet}>• Ambito e tempistica delle attività di test (es. livelli di test e tipi di test)</Text>
      <Text style={styles.bullet}>• Livello di dettaglio della documentazione di test</Text>
      <Text style={styles.bullet}>• Scelta delle tecniche di test e dell'approccio del test</Text>
      <Text style={styles.bullet}>• Estensione della test automation</Text>
      <Text style={styles.bullet}>• Ruolo e responsabilità di un tester 
Nei modelli di sviluppo sequenziale, nelle fasi iniziali i tester partecipano normalmente alle review dei 
requisiti, all'analisi dei test e alla progettazione dei test. Il codice eseguibile viene generalmente creato nelle 
fasi successive, per cui, in genere, il testing dinamico non può essere eseguito nelle prime fasi del SDLC. 
In alcuni modelli di sviluppo iterativo e modelli di sviluppo incrementale, si assume che ogni iterazione 
rilasci un prototipo o un incremento di prodotto funzionante. Questo implica che in ogni iterazione può 
essere eseguito sia testing statico, sia testing dinamico a tutti i livelli di test. Il rilascio frequente di incrementi 
richiede un feedback rapido e un ampio regression testing. 
Lo sviluppo software Agile assume che le modifiche possano verificarsi nel corso del progetto. Pertanto, 
nei progetti Agile è preferibile una documentazione leggera (“lightweight”) del prodotto di lavoro e un ampia 
test automation per facilitare il regression testing. Inoltre, la maggior parte del testing manuale tende a 
essere eseguito utilizzando tecniche di test basate sull'esperienza (si veda il paragrafo 4.4) che non 
richiedono un'analisi e una progettazione approfondita dei test.</Text>
      <Text style={styles.subtitle}>2.1.2 Ciclo di Vita dello Sviluppo Software e Buone Pratiche del Testing</Text>
      <Text style={styles.bullet}>• Le buone pratiche del testing, indipendentemente dal modello del SDLC scelto, includono quanto segue:</Text>
      <Text style={styles.bullet}>• Per ogni attività di sviluppo software, esiste una corrispondente attività di test, in modo che tutte le 
attività di sviluppo siano soggette al controllo di qualità</Text>
      <Text style={styles.bullet}>• I diversi livelli di test (si veda il paragrafo 2.2.1) hanno obiettivi del testing specifici e differenti, che 
consentono di eseguire un testing adeguatamente completo evitando la ridondanza</Text>

      <Text style={styles.bullet}>• L’analisi e la progettazione dei test per un determinato livello di test inizia durante la corrispondente 
fase di sviluppo del SDLC, in modo che il testing possa aderire al principio del testing anticipato (si 
veda il paragrafo 1.3)</Text>
      <Text style={styles.bullet}>• I tester sono coinvolti nella review dei prodotti di lavoro non appena sono disponibili i draft di questi 
prodotti di lavoro, in modo che il testing anticipato e la rilevazione dei difetti possano supportare lo 
shift-left (si veda il paragrafo 2.1.5).</Text>
      <Text style={styles.subtitle}>2.1.3 Il Testing come Driver per lo Sviluppo Software</Text>
      <Text style={styles.bullet}>• TDD, ATDD e BDD sono approcci di sviluppo simili, in cui i test sono definiti come mezzi per guidare lo 
sviluppo. Ognuno di questi approcci implementa il principio del testing anticipato (si veda il paragrafo 1.3) 
e segue lo shift-left (si veda il paragrafo 2.1.5), poiché i test vengono definiti prima di aver scritto il codice. 
Questi approcci supportano un modello di sviluppo iterativo e sono caratterizzati come segue: 
Test-Driven Development (TDD):</Text>
      <Text style={styles.bullet}>• Guida la codifica attraverso i test case (invece che tramite una progettazione completa del 
software) (Beck 2003)</Text>
      <Text style={styles.bullet}>• Prima vengono scritti i test, poi viene scritto il codice per soddisfare i test, e infine viene eseguito il 
refactoring dei test e del codice 
Acceptance Test-Driven Development (ATDD) (si veda il paragrafo 4.5.3):</Text>
      <Text style={styles.bullet}>• Deriva i test dai criteri di accettazione come parte del processo di progettazione del sistema 
(Gärtner 2011)</Text>
      <Text style={styles.bullet}>• I test vengono scritti prima che venga sviluppata la parte dell'applicazione necessaria per 
soddisfare i test  
Behavior-Driven Development (BDD):</Text>
      <Text style={styles.bullet}>• Esprime il comportamento desiderato di un'applicazione con test case scritti in una forma semplice 
del linguaggio naturale, facile da comprendere per gli stakeholder - di solito utilizzando il formato 
Given/When/Then (Dato/Quando/Allora) (Chelimsky 2010)</Text>
      <Text style={styles.bullet}>• I test case dovrebbero quindi essere tradotti automaticamente in test eseguibili 
Per tutti gli approcci descritti sopra, i test possono esistere manutenuti come automatizzati per garantire la 
qualità del codice in caso di futuri adeguamenti/refactoring.</Text>
      <Text style={styles.subtitle}>2.1.4 DevOps e Testing</Text>
      <Text style={styles.paragraph}>DevOps è un approccio organizzativo che mira a creare sinergie facendo sì che lo sviluppo (incluso il 
testing) e le operations lavorino insieme per raggiungere un insieme di obiettivi comuni. DevOps richiede 
un cambiamento culturale all'interno di un'organizzazione per colmare il divario tra lo sviluppo (incluso il 
testing) e le operations, attribuendo alle rispettive funzioni uguale valore. DevOps promuove l'autonomia 
del team, il feedback rapido, le toolchain integrate e le pratiche tecniche come la Continuous Integration 
(CI) e la Continuous Delivery (CD). Questo permette ai team di costruire, testare e rilasciare codice di alta 
qualità più velocemente, attraverso una pipeline di delivery (rilascio) DevOps (Kim 2016). 
Dal punto di vista del testing, alcuni dei vantaggi di DevOps sono i seguenti:</Text>

      <Text style={styles.bullet}>• Feedback rapido sulla qualità del codice e sull'eventuale impatto negativo delle modifiche al codice 
esistente</Text>
      <Text style={styles.bullet}>• La Continuous Integration (CI) promuove lo shift-left nel testing (si veda il paragrafo 2.1.5), 
incoraggiando gli sviluppatori a rilasciare codice di alta qualità insieme ai test di componente e a 
svolgere analisi statica</Text>
      <Text style={styles.bullet}>• Si promuovono processi automatizzati, quali CI/CD, che facilitano la creazione di ambienti di test 
stabili.</Text>
      <Text style={styles.bullet}>• La visibilità sulle caratteristiche qualitative non funzionali aumenta (es. efficienza delle prestazioni, 
affidabilità)</Text>
      <Text style={styles.bullet}>• L'automazione attraverso una pipeline di delivery riduce la necessità di eseguire testing manuale 
ripetitivo</Text>
      <Text style={styles.bullet}>• Il rischio di regressione è minimizzato grazie all'ampiezza e alla gamma dei regression test 
automatizzati. 
DevOps non è esente da rischi e sfide, che includono:</Text>
      <Text style={styles.bullet}>• La pipeline di delivery DevOps deve essere definita e predisposta</Text>
      <Text style={styles.bullet}>• Gli strumenti di CI/CD devono essere introdotti e manutenuti</Text>
      <Text style={styles.bullet}>• La test automation richiede risorse aggiuntive e può essere difficile da predisporre e manutenere 
Sebbene DevOps preveda un alto livello di testing automatizzato, il testing manuale, soprattutto dal punto 
di vista dell'utente, sarà comunque ancora necessario.</Text>
      <Text style={styles.subtitle}>2.1.5 Shift-Left</Text>
      <Text style={styles.bullet}>• Il principio del testing anticipato (si veda il paragrafo 1.3) viene a volte indicato come shift-left perché si 
tratta di un approccio dove il testing viene eseguito negli stadi iniziali del ciclo di vita dello sviluppo software. 
L’approccio shift-left suggerisce sostanzialmente che il testing dovrebbe essere eseguito prima (es. senza 
aspettare che il codice sia implementato o che i componenti siano integrati), ma ciò non significa che il 
testing successivo nel SDLC debba essere trascurato. 
Esistono alcune buone pratiche che illustrano come ottenere uno "shift-left" nel testing, che includono:</Text>
      <Text style={styles.bullet}>• Eseguire la review delle specifiche dalla prospettiva dei tester. Queste attività di review delle 
specifiche spesso rilevano potenziali difetti, come ambiguità, incompletezze e inconsistenze</Text>
      <Text style={styles.bullet}>• Scrivere test case prima della stesura del codice e far eseguire il codice in una test harness durante 
l'implementazione del codice</Text>
      <Text style={styles.bullet}>• Utilizzare la Continuous Integration, e ancora meglio la Continuous Delivery (CD), poiché ciò 
permette di ottenere un feedback rapido e di eseguire testing di componente automatizzato quando 
il codice sorgente viene rilasciato nel repository del codice</Text>
      <Text style={styles.bullet}>• Completare l'analisi statica del codice sorgente prima del testing dinamico o come parte di un 
processo automatizzato</Text>

      <Text style={styles.bullet}>• Eseguire testing non funzionale a partire dal livello di test di componente, quando possibile. Questa 
è una forma di shift-left, poiché questi tipi di test non funzionali tendono a essere eseguiti più tardi 
nel SDLC, quando sono disponibili un sistema completo e un ambiente di test rappresentativo. 
Lo shift-left potrebbe comportare attività di formazione, effort e/o costi aggiuntivi nelle prime fasi del 
processo, ma si prevede un risparmio di effort e/o costi nelle fasi successive. 
Per lo shift-left è importante che gli stakeholder siano convinti e credano in questo concetto.</Text>
      <Text style={styles.subtitle}>2.1.6 Retrospettive e Process Improvement (Miglioramento del Processo)</Text>
      <Text style={styles.bullet}>• Le retrospettive si svolgono spesso alla fine di un progetto o di un'iterazione, in corrispondenza di una 
milestone di rilascio, oppure possono essere organizzate quando necessario. Le tempistiche e 
l'organizzazione delle retrospettive dipendono dal particolare modello del SDLC che viene seguito. Durante 
questi meeting i partecipanti (non solo i tester, ma anche, ad esempio, sviluppatori, architetti, product 
owner, business analyst) discutono su:</Text>
      <Text style={styles.bullet}>• Cosa ha avuto successo e dovrebbe essere mantenuto?</Text>
      <Text style={styles.bullet}>• Cosa non ha avuto successo e potrebbe essere migliorato?</Text>
      <Text style={styles.bullet}>• Come incorporare i miglioramenti e mantenere i successi in futuro? 
I risultati dovrebbero essere memorizzati e di solito fanno parte del test completion report (si veda il 
paragrafo 5.3.2). Le retrospettive sono fondamentali per il successo dell'implementazione del continuous 
improvement (miglioramento continuo), ed è importante che a tutti i miglioramenti raccomandati venga dato 
l’opportuno seguito. 
I vantaggi tipici per il testing includono:</Text>
      <Text style={styles.bullet}>• Aumento dell'efficacia e dell'efficienza dei test (es. implementando suggerimenti per il process 
improvement)</Text>
      <Text style={styles.bullet}>• Aumento della qualità del testware (es. attraverso la review congiunta dei processi di test)</Text>
      <Text style={styles.bullet}>• Coesione e apprendimento del team (es. grazie all'opportunità di evidenziare problemi e proporre 
punti di miglioramento)</Text>
      <Text style={styles.bullet}>• Miglioramento della qualità della base di test (es., poiché le carenze nell'estensione e nella qualità 
dei requisiti possono essere affrontate e risolte).</Text>
      <Text style={styles.bullet}>• Migliore cooperazione tra sviluppo e testing (es. poiché la collaborazione viene rivista e ottimizzata 
regolarmente).</Text>
      <Text style={styles.subtitle}>2.2 Livelli di Test e Tipi di Test</Text>
      <Text style={styles.paragraph}>I livelli di test sono gruppi di attività di test che vengono organizzate e gestite insieme. Ogni livello di test è 
un'istanza del processo di test, eseguita in relazione al software in una determinata fase di sviluppo, dai 
singoli componenti ai sistemi completi o, dove applicabile, ai sistemi di sistemi.  
I livelli di test sono correlati ad altre attività all'interno del SDLC. Nei modelli del SDLC sequenziali, i livelli 
di test sono spesso definiti in modo che i criteri di uscita di un livello siano parte dei criteri di ingresso del 
livello successivo. In alcuni modelli iterativi, questo non può essere applicato. Le attività di sviluppo possono 
estendersi a più livelli di test. I livelli di test possono sovrapporsi nel tempo.</Text>

      <Text style={styles.paragraph}>I tipi di test sono gruppi di attività di test relative a specifiche caratteristiche di qualità e la maggior parte di 
queste attività di test può essere eseguita a ogni livello di test.</Text>
      <Text style={styles.subtitle}>2.2.1 Livelli di Test</Text>
      <Text style={styles.bullet}>• In questo Syllabus sono descritti i seguenti cinque livelli di test:</Text>
      <Text style={styles.bullet}>• Il testing di componente (conosciuto anche come unit testing) si focalizza sul testing di un 
componente in modo isolato. Spesso richiede un supporto specifico, come una test harness o un 
framework di unit test. Il testing di componente viene normalmente eseguito dagli sviluppatori nei 
loro ambienti di sviluppo.</Text>
      <Text style={styles.bullet}>• Il testing di integrazione dei componenti (noto anche come unit integration testing) si focalizza 
sul testing delle interfacce e delle interazioni tra componenti. Il testing di integrazione dei 
componenti dipende fortemente dalla strategia di integrazione, come bottom-up, top-down o big-
bang.</Text>
      <Text style={styles.bullet}>• Il testing di sistema si focalizza sul comportamento e sulle capacità complessive di un sistema o 
prodotto completo, spesso includendo il testing funzionale end-to-end e il testing non funzionale 
delle caratteristiche di qualità. Per alcune caratteristiche di qualità non funzionali, è preferibile 
eseguire il testing di un sistema completo in un ambiente di test rappresentativo (es. l’usabilità). È 
possibile anche utilizzare simulazioni di sottosistemi. Il testing di sistema può essere eseguito da 
un team di test indipendente ed è relativo alle specifiche del sistema.</Text>
      <Text style={styles.bullet}>• Il testing di integrazione dei sistemi si focalizza sul testing delle interfacce del sistema sotto test 
con altri sistemi e servizi esterni. Il testing di integrazione dei sistemi richiede ambienti di test 
adeguati, preferibilmente simili all'ambiente operativo.</Text>
      <Text style={styles.bullet}>• Il testing di accettazione si focalizza sul testing e sul dimostrare la readiness per il rilascio, e 
questo significa che il sistema soddisfa le esigenze di business dell'utente. Idealmente, il testing di 
accettazione dovrebbe essere eseguito dagli utenti previsti. Le principali forme di testing di 
accettazione sono: user acceptance testing (UAT, testing di accettazione utente), operational 
acceptance testing (testing di accettazione operativa), testing di accettazione contrattuale e testing 
di accettazione normativa, alpha testing e beta testing. 
I livelli di test si distinguono secondo il seguente elenco, non esaustivo, di attributi, per evitare la 
sovrapposizione delle attività di test:</Text>
      <Text style={styles.bullet}>• Oggetto di test</Text>
      <Text style={styles.bullet}>• Obiettivi del testing</Text>
      <Text style={styles.bullet}>• Base di test</Text>
      <Text style={styles.bullet}>• Difetti e failure</Text>
      <Text style={styles.bullet}>• Approccio e responsabilità.</Text>

      <Text style={styles.subtitle}>2.2.2 Tipi di test</Text>
      <Text style={styles.bullet}>• Esistono molti tipi di test che possono essere applicati nei progetti. In questo Syllabus vengono affrontati i 
seguenti quattro tipi di test: 
Il testing funzionale valuta le funzioni che un componente o sistema dovrebbe svolgere. Le funzioni 
rappresentano "cosa" l'oggetto di test dovrebbe fare. L'obiettivo principale del testing funzionale è verificare 
la completezza funzionale, la correttezza funzionale e l'appropriatezza funzionale. 
Il testing non funzionale valuta attributi diversi dalle caratteristiche funzionali di un componente o di un 
sistema. Il testing non funzionale è la verifica di "quanto bene si comporta il sistema". L'obiettivo principale 
del testing non funzionale è verificare le caratteristiche di qualità non funzionali. Lo standard ISO/IEC 25010 
fornisce la seguente classificazione delle caratteristiche di qualità non funzionali:</Text>
      <Text style={styles.bullet}>• Efficienza delle prestazioni</Text>
      <Text style={styles.bullet}>• Compatibilità</Text>
      <Text style={styles.bullet}>• Usabilità (nota anche come capacità di interazione)</Text>
      <Text style={styles.bullet}>• Affidabilità</Text>
      <Text style={styles.bullet}>• Sicurezza</Text>
      <Text style={styles.bullet}>• Manutenibilità</Text>
      <Text style={styles.bullet}>• Portabilità (nota anche come flessibilità)</Text>
      <Text style={styles.bullet}>• Sicurezza e incolumità (safety) 
A volte è appropriato che il testing non funzionale inizi negli stadi iniziali del SDLC (es. come parte delle 
review o del testing di componente). Molti test non funzionali derivano dai test funzionali, in quanto 
utilizzano gli stessi test funzionali, ma verificano che durante l'esecuzione della funzione sia soddisfatto un 
vincolo non funzionale (es. verificando che una funzione venga eseguita entro un tempo specifico o che 
una funzione possa essere trasferita su una nuova piattaforma). La scoperta tardiva di difetti non funzionali 
può rappresentare una seria minaccia per il successo di un progetto. Il testing non funzionale richiede 
talvolta un ambiente di test molto specifico, come un laboratorio di usabilità per il testing di usabilità. 
Il testing black-box (si veda il paragrafo 4.2) è basato sulle specifiche e deriva i test dalla documentazione 
non correlata alla struttura interna dell'oggetto di test. L'obiettivo principale del testing black-box è verificare 
il comportamento del sistema rispetto alle sue specifiche. 
Il testing white-box (si veda il paragrafo 4.3) è basato sulla struttura e deriva i test dall'implementazione 
o dalla struttura interna del sistema (es. codice, architettura, workflow e flussi dati). L'obiettivo principale 
del testing white-box è coprire la struttura sottostante con i test a un livello di copertura accettabile. 
Tutti e quattro i tipi di test sopra menzionati possono essere applicati a tutti i livelli di test, anche se il focus 
sarà diverso ad ogni livello. È possibile utilizzare differenti tecniche di test per derivare le condizioni di test 
e i test case per tutti i tipi di test descritti.</Text>
      <Text style={styles.subtitle}>2.2.3 Testing Confermativo e Regression Testing</Text>
      <Text style={styles.paragraph}>Le modifiche vengono normalmente apportate a un componente o a un sistema per migliorarlo con 
l'inserimento di una nuova funzionalità o per correggerlo eliminando un difetto. Il testing dovrebbe quindi 
includere anche il testing confermativo e il regression testing.</Text>

      <Text style={styles.bullet}>• Il testing confermativo verifica e conferma che un difetto originale è stato risolto con successo. In base al 
rischio, la versione del software che è stata corretta può essere testata in modi differenti, che includono:</Text>
      <Text style={styles.bullet}>• eseguire tutti i test che in precedenza erano falliti a causa del difetto o, anche</Text>
      <Text style={styles.bullet}>• aggiungere nuovi test case per coprire le modifiche che sono state necessarie per correggere il difetto. 
Tuttavia, quando il tempo o il denaro a disposizione per la correzione dei difetti non sono sufficienti, il testing 
confermativo potrebbe essere limitato a esercitare semplicemente i passi del test che dovrebbero riprodurre 
il failure causato dal difetto, e a verificare che il failure non si verifichi. 
Il regression testing conferma che una modifica, inclusa la correzione di un difetto che è già stata verificata 
con il testing confermativo, non abbia causato conseguenze negative. Queste conseguenze negative 
potrebbero riguardare lo stesso componente in cui è stata apportata la modifica, altri componenti dello 
stesso sistema o addirittura altri sistemi collegati. Il regression testing può non essere limitato all'oggetto di 
test stesso, ma può anche riguardare l'ambiente. È consigliabile eseguire prima un'analisi degli impatti per 
valutare l’entità del regression testing. L'analisi degli impatti mostra quali parti del software potrebbero 
essere interessate dalla modifica. 
Le suite di regression test vengono eseguite molte volte e in genere il numero di regression test aumenterà 
ad ogni iterazione o rilascio; quindi, il regression testing è un forte candidato per l'automazione. La test 
automation dovrebbe iniziare fin dalle prime fasi del progetto. Quando si utilizza la Continuous Integration, 
come nel DevOps (si veda il paragrafo 2.1.4), è buona pratica includere anche i regression test 
automatizzati. In base alla situazione, questo può includere i regression test a differenti livelli di test. 
Il testing confermativo e/o il regression testing per l'oggetto di test sono necessari per tutti i livelli di test, se 
i difetti vengono corretti e/o se vengono apportate modifiche a questi livelli di test.</Text>
      <Text style={styles.subtitle}>2.3 Testing di Manutenzione</Text>
      <Text style={styles.bullet}>• Esistono diverse categorie di manutenzione: può essere correttiva, adattativa alle modifiche nell'ambiente, 
o migliorativa per migliorare le prestazioni o la manutenibilità (per i dettagli, si veda ISO/IEC 14764). La 
manutenzione può comportare rilasci pianificati e rilasci non pianificati (hot fix). L'analisi degli impatti può 
essere svolta prima di apportare una modifica, per aiutare a decidere se la modifica stessa debba essere 
eseguita in base alle potenziali conseguenze in altre aree del sistema. Il testing delle modifiche apportate 
a un sistema operativo include sia la valutazione del successo dell'implementazione della modifica, sia la 
verifica di eventuali regressioni nelle parti del sistema rimaste invariate (che sono di solito la maggior parte 
del sistema). 
L’ambito dei testing di manutenzione dipende tipicamente da:</Text>
      <Text style={styles.bullet}>• Il livello di rischio della modifica</Text>
      <Text style={styles.bullet}>• Le dimensioni del sistema esistente</Text>
      <Text style={styles.bullet}>• La dimensione della modifica 
I trigger di attivazione della manutenzione e del testing di manutenzione possono essere classificati come 
segue:</Text>
      <Text style={styles.bullet}>• Modifiche, come miglioramenti pianificati (cioè release-based), modifiche correttive oppure hot fix</Text>

      <Text style={styles.bullet}>• Aggiornamenti o migrazioni dell'ambiente operativo, ad esempio da una piattaforma a un'altra, che 
possono richiedere test associati al nuovo ambiente e al software modificato, oppure test di 
conversione dei dati quando i dati vengono migrati da un'altra applicazione al sistema sottoposto 
a manutenzione</Text>
      <Text style={styles.bullet}>• Ritiro, ad esempio quando un'applicazione raggiunge la fine del suo ciclo di vita. Se un sistema 
viene ritirato, può essere necessario eseguire il testing dell'archiviazione dei dati quando sono 
richiesti lunghi periodi di data-retention (conservazione dei dati). Può anche essere necessario il 
testing delle procedure di retrieve (recupero) e restore (ripristino) dei dati dopo l'archiviazione, nel 
caso in cui alcuni dati siano necessari durante il periodo di archiviazione.</Text>

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