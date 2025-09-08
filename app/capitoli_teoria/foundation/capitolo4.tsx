import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Capitolo1Screen() {
  return (
    <View style={styles.wrapper}>
    <ScrollView style={styles.container}>
      <Text style={styles.title}>4. Tecniche di Test</Text>
      <Text style={styles.paragraph}>4. Analisi e Progettazione dei Test - 390 minuti{'\n'} 
Parole chiave{'\n'} 
acceptance test-driven development, analisi ai valori limite, approccio del test basato sulla collaborazione, 
copertura, copertura dei rami, copertura delle istruzioni, criteri di accettazione, elemento di copertura, error 
guessing, partizionamento di equivalenza, tecnica di test, tecnica di test basata sull'esperienza, tecnica di 
test black-box, tecnica di test white-box, testing checklist-based, testing della tabella delle decisioni, testing 
delle transizioni di stato, testing esplorativo</Text>
      <Text style={styles.paragraph}>Obiettivi di Apprendimento per il Capitolo 4:</Text>
      <Text style={styles.subtitle}>4.5 Approcci del Test basati sulla Collaborazione</Text>
      <Text style={styles.paragraph}>FL-4.5.1{'\n'} 
(K2) Spiegare come scrivere le user story in collaborazione con gli sviluppatori e i 
rappresentanti di business{'\n'} 
FL-4.5.2{'\n'} 
(K2) Classificare le differenti opzioni per la scrittura dei criteri di accettazione{'\n'} 
FL-4.5.3{'\n'} 
(K3) Utilizzare acceptance test-driven development (ATDD) per derivare i test case</Text>

      <Text style={styles.subtitle}>4.1 Panoramica sulle Tecniche di Test</Text>
      <Text style={styles.paragraph}>Le tecniche di test supportano il tester nell'analisi dei test (cosa testare) e nella progettazione dei test (come 
testare). Le tecniche di test aiutano a sviluppare un insieme relativamente piccolo, ma sufficiente, di test 
case in modo sistematico. Le tecniche di test aiutano inoltre il tester, durante l'analisi e la progettazione dei 
test, a definire le condizioni di test, a determinare gli elementi di copertura e a identificare i dati di test. 
Ulteriori informazioni sulle tecniche di test sono disponibili nello standard ISO/IEC/IEEE 29119-4 e in 
(Beizer 1990, Craig 2002, Copeland 2004, Koomen 2006, Jorgensen 2014, Ammann 2016, Forgács 2019). 
In questo Syllabus, le tecniche di test sono classificate come black-box, white-box e basate sull'esperienza. 
Le tecniche di test black-box (note anche come tecniche basate sulle specifiche) si basano sull'analisi 
del comportamento specificato per l'oggetto di test senza fare riferimento alla sua struttura interna. 
Pertanto, i test case sono indipendenti da come è stato implementato il software. Di conseguenza, se 
l'implementazione viene modificata, ma il comportamento atteso rimane lo stesso, i test case sono ancora 
utili. 
Le tecniche di test white-box (note anche come tecniche basate sulla struttura) si basano sull'analisi della 
struttura interna e dell'implementazione dell'oggetto di test. Poiché i test case dipendono da come è stato 
progettato il software, possono essere creati solo dopo la progettazione o l'implementazione dell'oggetto di 
test.  
Le tecniche di test basate sull'esperienza utilizzano in modo efficace la conoscenza e l'esperienza dei 
tester per la progettazione e l'implementazione dei test case. L'efficacia di queste tecniche di test dipende 
in larga misura dalle competenze del tester. Le tecniche di test basate sull'esperienza possono rilevare 
difetti che potrebbero essere sfuggiti utilizzando le tecniche di test black-box e le tecniche di test white-box. 
Pertanto, le tecniche di test basate sull'esperienza sono complementari alle tecniche di test black-box e 
alle tecniche di test white-box.</Text>
      <Text style={styles.subtitle}>4.2 Tecniche di Test Black-Box</Text>
      <Text style={styles.bullet}>• Le tecniche di test black-box comunemente utilizzate e trattate nei paragrafi successivi sono:</Text>
      <Text style={styles.bullet}>• Partizionamento di equivalenza</Text>
      <Text style={styles.bullet}>• Analisi ai valori limite</Text>
      <Text style={styles.bullet}>• Testing della tabella delle decisioni</Text>
      <Text style={styles.bullet}>• Testing delle transizioni di stato</Text>
      <Text style={styles.subtitle}>4.2.1 Partizionamento di Equivalenza</Text>
      <Text style={styles.paragraph}>Il partizionamento di equivalenza (EP, Equivalence Partitioning) divide i dati in partizioni (note come 
partizioni di equivalenza) basandosi sull'aspettativa che tutti gli elementi di una data partizione vengano 
elaborati nello stesso modo dall'oggetto di test. La teoria alla base di questa tecnica è che, se un test case 
che verifica un valore di una partizione di equivalenza rilevasse un difetto, questo difetto dovrebbe essere 
rilevato anche dai test case che verificano qualsiasi altro valore all'interno della stessa partizione.  
Le partizioni di equivalenza possono essere identificate per qualsiasi elemento dei dati relativi all'oggetto 
di test, che includono gli input, gli output, i configuration item, i valori interni, i valori temporali e i parametri</Text>

      <Text style={styles.paragraph}>di interfaccia. Le partizioni possono essere continue o discrete, ordinate o non ordinate, finite o infinite. Le 
partizioni non devono sovrapporsi e devono essere insiemi non vuoti. 
Per elementi di test semplici, il partizionamento di equivalenza può essere facile, ma in pratica, capire come 
l'oggetto di test tratterà i differenti valori è spesso complicato. Pertanto, il partizionamento dovrebbe essere 
fatto con attenzione. 
Una partizione contenente valori validi è detta partizione valida. Una partizione che contiene valori non 
validi è detta partizione invalida. Le definizioni di valori validi e invalidi possono variare tra i team e le 
organizzazioni. Ad esempio, i valori validi possono essere interpretati come quelli che dovrebbero essere 
elaborati dall'oggetto di test o come quelli per i quali la specifica definisce la loro elaborazione. I valori 
invalidi possono essere interpretati come quelli che dovrebbero essere ignorati o rifiutati dall'oggetto di test 
o come quelli per i quali la specifica dell'oggetto di test non definisce alcuna elaborazione. 
Nel partizionamento di equivalenza, gli elementi di copertura sono le partizioni di equivalenza. Per 
raggiungere il 100% di copertura con questa tecnica di test, i test case devono esercitare tutte le partizioni 
identificate (comprese quelle invalide) coprendo ogni partizione almeno una volta. La copertura, espressa 
in percentuale, è misurata come il numero di partizioni esercitate da almeno un test case, diviso per il 
numero totale di partizioni identificate. 
Molti elementi di test includono più insiemi di partizioni (es. elementi di test con più di un parametro di 
input), e questo significa che un test case coprirà partizioni da differenti insiemi di partizioni. Il criterio di 
copertura più semplice nel caso di insiemi multipli di partizioni è chiamato copertura Each Choice (Ammann 
2016). La copertura Each Choice richiede che i test case esercitino ogni partizione di ogni insieme di 
partizioni almeno una volta. La copertura Each Choice non tiene conto delle combinazioni di partizioni.</Text>
      <Text style={styles.subtitle}>4.2.2 Analisi ai Valori Limite</Text>
      <Text style={styles.paragraph}>L'analisi ai valori limite (BVA, Boundary Value Analysis) è una tecnica di test che si basa sull'esercitare i 
limiti delle partizioni di equivalenza. Pertanto, l'analisi ai valori limite può essere utilizzata solo per partizioni 
ordinate. I valori minimo e massimo di una partizione sono i suoi valori limite. Nell’analisi ai valori limite, se 
due elementi appartengono alla stessa partizione, anche tutti gli elementi compresi tra questi devono 
appartenere a quella partizione. 
L'analisi ai valori limite si focalizza sui valori limite delle partizioni perché è più probabile che gli sviluppatori 
commettano errori con questi valori limite. I difetti tipici rilevati dall’analisi ai valori limite si localizzano dove 
i limiti implementati sono posizionati in modo errato, al di sopra o al di sotto della posizione prevista, o sono 
del tutto omessi.  
Questo Syllabus copre due versioni dell’analisi ai valori limite: l’analisi ai valori limite a 2 valori (BVA a 2 
valori) e l’analisi ai valori limite a 3 valori (BVA a 3 valori). Queste differiscono in termini di elementi di 
copertura per valore limite che devono essere esercitati per ottenere una copertura del 100%. 
Nell’analisi ai valori limite a 2 valori (Craig 2002, Myers 2011), per ogni valore limite esistono due elementi 
di copertura: il valore limite e il suo valore adiacente più vicino appartenente alla partizione adiacente. Per 
raggiungere il 100% di copertura, i test case devono esercitare tutti gli elementi di copertura, cioè tutti i 
valori limite identificati. La copertura, espressa in percentuale, è misurata come il numero di valori limite 
esercitati, diviso per il numero totale di valori limite identificati. 
Nell’analisi ai valori limite a 3 valori (Koomen 2006, O’Regan 2019), per ogni valore limite esistono tre 
elementi di copertura: il valore limite ed entrambi i suoi valori adiacenti. Pertanto, nell’analisi ai valori limite 
a 3 valori, alcuni elementi di copertura potrebbero non essere valori limite. Per ottenere il 100% di copertura,</Text>

      <Text style={styles.paragraph}>i test case devono esercitare tutti gli elementi di copertura, cioè i valori limite identificati e i loro valori 
adiacenti. La copertura, espressa in percentuale, è misurata come il numero di valori limite e dei valori 
adiacenti esercitati, diviso per il numero totale di valori limite identificati e dei loro valori adiacenti. 
L’analisi ai valori limite a 3 valori è più rigorosa dell’analisi ai valori limite a 2 valori, poiché può rilevare 
difetti trascurati dall’analisi ai valori limite a 2 valori. Ad esempio, se la decisione "IF (x ≤ 10) ..." è 
implementata in modo errato come "IF (x = 10) ...", nessun dato di test derivato dall’analisi ai valori limite a 
2 valori (x = 10, x = 11) può rilevare il difetto. Tuttavia, x = 9, derivato dall’analisi ai valori limite a 3 valori, 
è probabile che venga rilevato.</Text>
      <Text style={styles.subtitle}>4.2.3 Testing della Tabella delle Decisioni</Text>
      <Text style={styles.paragraph}>Le tabelle delle decisioni sono utilizzate per il testing dell'implementazione dei requisiti che specificano 
come diverse combinazioni di condizioni producano risultati differenti. Le tabelle delle decisioni sono un 
modo efficace di registrare logiche complesse, come le regole di business. 
Quando si creano le tabelle delle decisioni, vengono definite le condizioni e le azioni risultanti del sistema. 
Queste costituiscono le righe della tabella. Ogni colonna corrisponde a una regola decisionale che definisce 
una combinazione unica di condizioni, insieme alle azioni associate. Nelle tabelle delle decisioni limited-
entry (a valori limitati) tutti i valori delle condizioni e delle azioni (eccetto quelli irrilevanti o non fattibili, per 
cui si veda di seguito) sono booleani, e quindi possono assumere solo i valori “vero” (“true”) e “falso” 
(“false”). Nelle tabelle delle decisioni “extended-entry” (a valori estesi) , alcuni o tutti i valori delle condizioni 
e delle azioni possono assumere valori multipli (es. valori discreti, intervalli numerici o partizioni di 
equivalenza). 
La notazione per le condizioni è la seguente: "T" (true o vero) significa che la condizione è soddisfatta; "F" 
(false o falso) significa che la condizione non è soddisfatta; "-" significa che il valore della condizione è 
irrilevante per il risultato dell'azione; "N/A" (“not applicable”) significa che la condizione non è fattibile per 
una determinata regola. La notazione per le azioni è la seguente: "X" significa che l'azione dovrebbe 
verificarsi; “ “ (blank o campo vuoto) significa che l'azione non dovrebbe verificarsi. Possono essere 
utilizzate anche altre notazioni. 
Una tabella delle decisioni completa ha un numero di colonne sufficiente a coprire ogni combinazione di 
condizioni. La tabella può essere semplificata eliminando le colonne che contengono combinazioni di 
condizioni non fattibili. La tabella può anche essere minimizzata unendo in un'unica colonna tutte quelle 
colonne in cui alcune condizioni non influiscono sul risultato. Gli algoritmi di minimizzazione della tabella 
delle decisioni in una singola colonna non rientrano nell'ambito di questo Syllabus. 
Nel testing della tabella delle decisioni, gli elementi di copertura sono le colonne contenenti le combinazioni 
fattibili di condizioni. Per ottenere una copertura del 100% con questa tecnica, i test case devono esercitare 
tutte queste colonne. La copertura, espressa in percentuale, è misurata come numero di colonne esercitate, 
diviso per il numero totale di colonne possibili. 
Il punto di forza del testing della tabella delle decisioni è che fornisce un approccio sistematico per 
identificare tutte le combinazioni di condizioni, alcune delle quali potrebbero altrimenti essere trascurate. 
Inoltre, aiuta a trovare eventuali lacune o contraddizioni nei requisiti. Se le condizioni sono numerose, 
esercitare tutte le regole decisionali può richiedere molto tempo, poiché il numero di regole cresce 
esponenzialmente con il numero di condizioni. In questo caso, per ridurre il numero di regole che devono 
essere esercitate, può essere utilizzata una tabella delle decisioni minimizzata o un approccio basato sul 
rischio.</Text>

      <Text style={styles.subtitle}>4.2.4 Testing delle Transizioni di Stato</Text>
      <Text style={styles.paragraph}>Uno state diagram modella il comportamento di un sistema mostrando i suoi possibili stati e le transizioni 
di stato valide. Una transizione viene iniziata da un evento, che può essere ulteriormente qualificato da una 
condizione o “guard condition”. Si assume che le transizioni siano istantanee e che talvolta possano 
causare un’azione nel software. La sintassi comune per l'etichetta di una transizione è la seguente: "event 
[guard condition] / action". Le guard condition e le azioni possono essere omesse se non esistono o sono 
irrilevanti per il tester. 
Una tabella degli stati è un modello equivalente allo state diagram. Le sue righe rappresentano gli stati e 
le sue colonne rappresentano gli eventi (insieme alle guard condition, se esistono). Le celle della tabella 
rappresentano le transizioni e contengono lo stato di destinazione e le azioni risultanti, se definite. A 
differenza dello state diagram, la tabella degli stati mostra esplicitamente le transizioni invalide, che sono 
rappresentate da celle vuote. 
Un test case basato su uno state diagram o su una tabella degli stati è solitamente rappresentato come 
una sequenza di eventi, che si traduce in una sequenza di cambiamenti di stato (e di azioni, se necessario). 
Un test case può, e di solito lo farà, coprire diverse transizioni di stato.  
Esistono molti criteri di copertura per il testing delle transizioni di stato. Questo Syllabus considera tre criteri 
di copertura. 
Nella copertura di tutti gli stati, gli elementi di copertura sono gli stati. Per ottenere il 100% di copertura 
di tutti gli stati, i test case devono garantire che tutti gli stati siano esercitati. La copertura, espressa in 
percentuale, è misurata come il numero di stati esercitati diviso per il numero totale di stati. 
Nella copertura delle transizioni valide (chiamata anche copertura 0-switch), gli elementi di copertura 
sono le singole transizioni valide. Per ottenere il 100% di copertura delle transizioni valide, i test case 
devono esercitare tutte le transizioni valide. La copertura, espressa in percentuale, è misurata come il 
numero di transizioni valide esercitate diviso per il numero totale di transizioni valide.  
Nella copertura di tutte le transizioni, gli elementi di copertura sono tutte le transizioni mostrate in una 
tabella degli stati. Per ottenere il 100% di copertura di tutte le transizioni, i test case devono esercitare tutte 
le transizioni valide e tentare di eseguire le transizioni invalide. Eseguire il testing di una sola transizione 
invalida in un singolo test case aiuta a evitare il mascheramento dei difetti, cioè una situazione in cui un 
difetto impedisce il rilevamento di un altro. La copertura, espressa in percentuale, è misurata come il 
numero di transizioni valide e invalide esercitate o che si è tentato di coprire con i test case eseguiti, diviso 
per il numero totale di transizioni valide e invalide. 
La copertura di tutti gli stati è più debole della copertura delle transizioni valide, perché in genere può essere 
ottenuta senza esercitare tutte le transizioni. La copertura delle transizioni valide è il criterio di copertura 
ampiamente più utilizzato. Raggiungere la copertura completa delle transizioni valide garantisce la 
copertura completa di tutti gli stati. Raggiungere la copertura completa di tutte le transizioni garantisce sia 
la copertura completa di tutti gli stati sia la copertura completa delle transizioni valide, e dovrebbe essere 
un requisito minimo per i software mission-critical e safety-critical.</Text>
      <Text style={styles.subtitle}>4.3 Tecniche di Test White-Box</Text>
      <Text style={styles.bullet}>• A causa della loro popolarità e semplicità, questo paragrafo si focalizza su due tecniche di test white-box 
relative al codice:</Text>
      <Text style={styles.bullet}>• Testing delle istruzioni</Text>

      <Text style={styles.bullet}>• Testing dei rami 
Esistono tecniche di test white-box più rigorose che vengono utilizzate in alcuni ambienti safety-critical, 
mission-critical o ad alta integrità per ottenere una copertura del codice più completa. Esistono anche 
tecniche di test white-box utilizzate nei livelli di test più elevati (es. testing delle API) o che utilizzano una 
copertura non correlata al codice (es. la copertura dei neuroni nel testing delle reti neurali). Queste tecniche 
non vengono discusse in questo Syllabus.</Text>
      <Text style={styles.subtitle}>4.3.1 Testing delle Istruzioni e Copertura delle Istruzioni</Text>
      <Text style={styles.paragraph}>Nel testing delle istruzioni, gli elementi di copertura sono le istruzioni eseguibili. L'obiettivo è progettare test 
case che esercitino le istruzioni nel codice fino a raggiungere un livello di copertura accettabile. La 
copertura, espressa in percentuale, è misurata come il numero di istruzioni esercitate dai test case diviso 
per il numero totale di istruzioni eseguibili nel codice. 
Quando si raggiunge il 100% di copertura delle istruzioni, si garantisce che tutte le istruzioni eseguibili nel 
codice siano state esercitate almeno una volta. Questo significa che ogni istruzione contenente un difetto 
verrà eseguita e potrà causare un failure che dimostra la presenza del difetto, ma non significa che 
esercitare l'istruzione con un test case rileverà sempre il difetto. Ad esempio, potrebbero non essere rilevati 
difetti dipendenti dai dati (es. una divisione per zero che fallisce solo quando il denominatore è posto uguale 
a zero). Inoltre, la copertura del 100% delle istruzioni non garantisce che tutta la logica decisionale sia stata 
testata perché, ad esempio, potrebbe non essere possibile esercitare tutti i rami nel codice (si veda il 
capitolo 4.3.2).</Text>
      <Text style={styles.subtitle}>4.3.2 Testing dei Rami e Copertura dei Rami</Text>
      <Text style={styles.paragraph}>Un ramo (o “branch”) è un trasferimento di controllo tra due nodi nel grafo del flusso di controllo (control 
flow), che mostra le possibili sequenze in cui vengono eseguite le istruzioni del codice sorgente nell'oggetto 
di test. Ogni trasferimento di controllo può essere non condizionale (cioè codice lineare) o condizionale 
(cioè un risultato decisionale). 
Nel testing dei rami, gli elementi di copertura sono i rami. L'obiettivo è progettare test case che esercitino i 
rami nel codice fino a raggiungere un livello di copertura accettabile. La copertura, espressa in percentuale,  
è misurata come il numero di rami esercitati dai test case diviso per il numero totale di rami. 
Quando si raggiunge il 100% di copertura dei rami, tutti i rami del codice, non condizionali e condizionali, 
sono stati esercitati dai test case. I rami condizionali corrispondono tipicamente a un risultato vero o falso 
di una decisione "IF... THEN", a un risultato di un'istruzione SWITCH/CASE, o a una decisione di uscire o 
continuare in un ciclo (loop). Tuttavia, esercitare un ramo con un test case non rileverà sempre i difetti. Ad 
esempio, potrebbe non rilevare i difetti che richiedono l'esecuzione di un percorso specifico nel codice. 
La copertura dei rami include la copertura delle istruzioni. Questo significa che qualsiasi insieme di test 
case che raggiunga il 100% di copertura dei rami raggiunge anche il 100% di copertura delle istruzioni (ma 
non viceversa).</Text>
      <Text style={styles.subtitle}>4.3.3 Il Valore del Testing White-box</Text>
      <Text style={styles.paragraph}>Un punto di forza fondamentale che tutte le tecniche di test white-box condividono è che durante il testing 
viene presa in considerazione l’implementazione completa del software, e questo facilita la rilevazione dei 
difetti anche quando la specifica del software è vaga, obsoleta o incompleta. Una debolezza è che se non</Text>

      <Text style={styles.paragraph}>vengono implementati uno o più requisiti, il testing white-box potrebbe non rilevare i difetti risultanti dalla 
mancanza dei requisiti (Watson 1996). 
Le tecniche di test white-box possono essere utilizzate nel testing statico (es. durante i dry run del codice). 
Sono adatte per eseguire la review del codice non ancora pronto per l'esecuzione (Hetzel 1988), la review 
di pseudocodice e altre logiche di alto livello o top-down, che possono essere modellate con un grafo del 
flusso di controllo. 
Eseguire solo il testing black-box non fornisce una misura dell'effettiva copertura del codice. Le misure 
della copertura white-box determinano una misura oggettiva della copertura e forniscono quelle 
informazioni necessarie per poter creare i test aggiuntivi che aumentino questa copertura e, di 
conseguenza, aumentino la fiducia nel codice.</Text>
      <Text style={styles.subtitle}>4.4 Tecniche di Test basate sull'Esperienza</Text>
      <Text style={styles.bullet}>• Le tecniche di test basate sull'esperienza comunemente utilizzate e trattate nei paragrafi successivi sono:</Text>
      <Text style={styles.bullet}>• Error guessing</Text>
      <Text style={styles.bullet}>• Testing esplorativo</Text>
      <Text style={styles.bullet}>• Testing checklist-based</Text>
      <Text style={styles.subtitle}>4.4.1 Error Guessing</Text>
      <Text style={styles.bullet}>• Error guessing è una tecnica di test utilizzata per anticipare il verificarsi di errori, difetti e failure, sulla base 
delle conoscenze del tester, che include:</Text>
      <Text style={styles.bullet}>• Come ha funzionato l'applicazione in passato</Text>
      <Text style={styles.bullet}>• I tipi di errori che gli sviluppatori tendono a commettere e i tipi di difetti che derivano da questi errori</Text>
      <Text style={styles.bullet}>• I tipi di failure che si sono verificati in altre applicazioni similari. 
In generale, gli errori, i difetti e i failure possono essere relativi a: input (es. input corretto non accettato, 
parametri errati o mancanti), output (es. formato errato, risultato errato), logica (es. casi mancanti, operatore 
errato), calcolo (es. operando errato, calcolo errato), interfacce (es. mancata corrispondenza dei parametri, 
tipi incompatibili) o dati (es. inizializzazione errata, tipo errato). 
I fault attack sono un modo per implementare l'error guessing. Questa tecnica di test richiede che il tester 
crei o acquisisca un elenco di possibili errori, difetti e failure, e che progetti i test che identificheranno i difetti 
associati agli errori, rendano visibili i difetti, o causino i failure. Questi elenchi possono essere creati in base 
all'esperienza, ai dati sui difetti e sui failure, o alle conoscenze comuni sui motivi per cui il software fallisce. 
Per ulteriori informazioni sull’error guessing e sui fault attack, si veda (Whittaker 2002, Whittaker 2003, 
Andrews 2006).</Text>
      <Text style={styles.subtitle}>4.4.2 Testing Esplorativo</Text>
      <Text style={styles.paragraph}>Nel testing esplorativo i test vengono progettati, eseguiti e valutati contemporaneamente, mentre il tester 
impara a conoscere l'oggetto di test. Il testing viene utilizzato per conoscere meglio l'oggetto di test, per 
esplorarlo in modo più approfondito con test focalizzati, e per creare i test per le aree non testate.</Text>

      <Text style={styles.paragraph}>Il testing esplorativo viene talvolta eseguito utilizzando il testing session-based per strutturare il testing. In 
un approccio session-based, il testing esplorativo viene eseguito all’interno di un periodo time-box definito. 
Il tester utilizza un Test Charter contenente gli obiettivi del testing per guidare il testing. La sessione di test 
è solitamente seguita da un debriefing che prevede una discussione tra il tester e gli stakeholder interessati 
ai risultati della sessione di test. In questo approccio, gli obiettivi del testing possono essere trattati come 
condizioni di test di alto livello. Gli elementi di copertura sono identificati ed esercitati durante la sessione 
di test. Il tester può utilizzare dei session sheet di test per documentare i passi seguiti e le scoperte fatte. 
Il testing esplorativo è utile quando le specifiche sono poche o inadeguate, oppure quando esistono 
pressioni significative sulle tempistiche del testing. Il testing esplorativo è anche utile per integrare altre 
tecniche di test più formali. Il testing esplorativo sarà più efficace se il tester è esperto, ha una conoscenza 
del dominio e possiede un alto grado di competenze essenziali, come competenze analitiche, curiosità e 
creatività (si veda il paragrafo 1.5.1). 
Il testing esplorativo può incorporare l'uso di altre tecniche di test (es. il partizionamento di equivalenza). 
Ulteriori informazioni sul testing esplorativo sono disponibili in (Kaner 1999, Whittaker 2009, Hendrickson 
2013).</Text>
      <Text style={styles.subtitle}>4.4.3 Testing Checklist-Based</Text>
      <Text style={styles.paragraph}>Nel testing checklist-based un tester progetta, implementa ed esegue i test per coprire le condizioni di test 
di una checklist. Le checklist possono essere costruite in base all'esperienza, alla conoscenza di ciò che è 
importante per l'utente, o alla comprensione del perché e del come il software fallisce. Le checklist non 
dovrebbero contenere elementi che possono essere controllati automaticamente, elementi che sono più 
adatti ad essere criteri di ingresso, criteri di uscita, o elementi troppo generici (Brykczynski 1999). 
Gli elementi della checklist sono spesso formulati sotto forma di domanda. Dovrebbe essere possibile 
controllare ogni elemento separatamente e direttamente. Questi elementi possono riferirsi a requisiti, 
proprietà dell'interfaccia grafica, caratteristiche di qualità o altre forme di condizioni di test. Le checklist 
possono essere create per supportare vari tipi di test, compresi il testing funzionale e il testing non 
funzionale (es. le 10 euristiche per il testing di usabilità (Nielsen 1994)). 
Alcuni elementi della checklist possono diventare gradualmente meno efficaci nel corso del tempo, perché 
gli sviluppatori impareranno a evitare di commettere gli stessi errori. Può anche essere necessario 
aggiungere nuovi elementi che corrispondano ai nuovi difetti di alta severità che sono stati rilevati. Pertanto, 
le checklist dovrebbero essere aggiornate regolarmente sulla base dell'analisi dei difetti. Bisogna 
comunque evitare che la checklist diventi troppo lunga (Gawande 2009).  
In assenza di test case dettagliati, il testing checklist-based può fornire linee guida e un certo grado di 
consistenza per il testing. Se le checklist sono di alto livello, è probabile che si verifichi una certa variabilità 
nel testing effettivo, con una copertura potenzialmente maggiore ma una minore ripetibilità.</Text>
      <Text style={styles.subtitle}>4.5 Approcci del Test basati sulla Collaborazione</Text>
      <Text style={styles.paragraph}>Ognuna delle tecniche di test sopra descritte (si veda paragrafi 4.2, 4.3, 4.4) ha un obiettivo particolare 
rispetto al rilevamento dei difetti. Gli approcci basati sulla collaborazione, invece, si focalizzano anche sulla 
prevenzione dei difetti attraverso la collaborazione e la comunicazione.</Text>

      <Text style={styles.subtitle}>4.5.1 Scrittura Collaborativa delle User Story</Text>
      <Text style={styles.bullet}>• Una user story rappresenta una funzionalità che sarà significativa e importante per un utente o un cliente 
di un sistema o software. Le user story hanno tre aspetti critici (Jeffries 2000), chiamati insieme le "3 C":</Text>
      <Text style={styles.bullet}>• Card - Il mezzo che descrive una user story (es. una card, una voce in una card elettronica)</Text>
      <Text style={styles.bullet}>• Conversazione (Conversation) – La spiegazione di come verrà utilizzato il software (può essere 
scritta o verbale)</Text>
      <Text style={styles.bullet}>• Conferma (Confirmation) - I criteri di accettazione (si veda il paragrafo 4.5.2). 
Il formato più comune per una user story è:</Text>
      <Text style={styles.bullet}>• In italiano: "Come [ruolo], voglio che [obiettivo sia realizzato], in modo da poter [valore di business 
risultante per il ruolo]", seguito dai criteri di accettazione</Text>
      <Text style={styles.bullet}>• In inglese: “As a [role], I want [goal to be accomplished], so that I can [resulting business value for 
the role]”, seguito dai criteri di accettazione. 
La scrittura collaborativa delle user story può utilizzare tecniche come il brainstorming e le mappe mentali. 
La collaborazione consente al team di ottenere una visione condivisa di quello che dovrebbe essere 
rilasciato, tenendo conto di tre prospettive: business, sviluppo e testing. 
Una buona user story dovrebbe rispettare il concetto di INVEST: Indipendente (independent), Negoziabile 
(Negotiable), Valutabile (Valuable), Stimabile (Estimable), Piccola (Small) e Testabile (Testable). Se uno 
stakeholder non conosce come testare una user story, questo può indicare che la user story non è 
abbastanza chiara, o che non riflette qualcosa di significativo per lo stakeholder, oppure che lo stakeholder 
ha semplicemente bisogno di un aiuto nel testing (Wake 2003).</Text>
      <Text style={styles.subtitle}>4.5.2 Criteri di Accettazione</Text>
      <Text style={styles.bullet}>• I criteri di accettazione per una user story sono le condizioni che un'implementazione della user story deve 
soddisfare per essere accettata dagli stakeholder. Da questo punto di vista, i criteri di accettazione possono 
essere visti come le condizioni di test che dovrebbero essere esercitate dai test. I criteri di accettazione 
sono di solito il risultato della Conversazione (Conversation) (si veda il paragrafo 4.5.1).  
I criteri di accettazione sono utilizzati per:</Text>
      <Text style={styles.bullet}>• Definire l'ambito della user story</Text>
      <Text style={styles.bullet}>• Raggiungere il consenso tra gli stakeholder</Text>
      <Text style={styles.bullet}>• Descrivere scenari positivi e negativi</Text>
      <Text style={styles.bullet}>• Servire come base per il testing di accettazione delle user story (si veda il paragrafo 4.5.3)</Text>
      <Text style={styles.bullet}>• Consentire una pianificazione e una stima accurate 
Esistono diversi modi per scrivere i criteri di accettazione di una user story. I due formati più comuni sono:</Text>
      <Text style={styles.bullet}>• Scenario-oriented (es. il formato Dato/Quando/Allora, o Given/When/Then, utilizzato nel BDD, si 
veda il paragrafo 2.1.3)</Text>
      <Text style={styles.bullet}>• Rule-oriented (es. un elenco puntato di verifiche o un formato tabellare della mappatura degli input-
output)</Text>

      <Text style={styles.paragraph}>La maggior parte dei criteri di accettazione può essere documentata in uno di questi due formati. Tuttavia, 
il team può utilizzare un altro formato custom, purché i criteri di accettazione siano ben definiti e non 
ambigui.</Text>
      <Text style={styles.subtitle}>4.5.3 Acceptance Test-Driven Development (ATDD)</Text>
      <Text style={styles.paragraph}>Acceptance Test-Driven Development (ATDD) è un approccio test-first (si veda il paragrafo 2.1.3). I test 
case vengono creati prima dell'implementazione della user story. I test case sono creati da membri del 
team con prospettive differenti, ad esempio clienti, sviluppatori e tester (Adzic 2009). I test case possono 
essere eseguiti manualmente o in modo automatizzato.  
Il primo passo è un workshop di specifica in cui la user story e i relativi criteri di accettazione (se non ancora 
definiti) vengono analizzati, discussi e scritti dai membri del team. Durante questo processo vengono risolte 
le incompletezze, le ambiguità o i difetti nella user story. Il passo successivo è la creazione dei test case. 
Questo può essere eseguito da tutto il team o dal singolo tester. I test case sono basati sui criteri di 
accettazione e possono essere visti come esempi di come funziona il software. Questo aiuterà il team a 
implementare correttamente la user story. 
Poiché esempi e test sono la stessa cosa, questi termini sono spesso usati in modo intercambiabile. 
Durante la progettazione dei test possono essere applicate le tecniche di test descritte nei paragrafi 4.2,</Text>
      <Text style={styles.subtitle}>4.3 e 4.4.</Text>
      <Text style={styles.paragraph}>In genere, i primi test case sono positivi, confermano quindi il comportamento corretto senza eccezioni o 
condizioni di errore, e comprendono la sequenza di attività eseguite se tutto va come previsto. Dopo aver 
completato i test case positivi, il team dovrebbe eseguire il testing negativo. Infine, il team dovrebbe coprire 
le caratteristiche di qualità non funzionali (es. efficienza delle prestazioni, usabilità). I test case dovrebbero 
essere espressi in modo comprensibile per gli stakeholder. In genere, i test case contengono frasi nel 
linguaggio naturale che includono le precondizioni necessarie (se presenti), gli input e le postcondizioni. 
I test case devono coprire tutte le caratteristiche della user story e non dovrebbero andare oltre la user 
story. Tuttavia, i criteri di accettazione possono dettagliare alcuni degli argomenti descritti nella user story. 
Inoltre, nessun test case dovrebbe descrivere le stesse caratteristiche della user story.  
Quando vengono acquisiti in un formato supportato da un framework di test automation, gli sviluppatori 
possono automatizzare i test case, scrivendo il codice di supporto durante l’implementazione della 
funzionalità descritta da una user story. I test di accettazione diventano quindi requisiti eseguibili.</Text>

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