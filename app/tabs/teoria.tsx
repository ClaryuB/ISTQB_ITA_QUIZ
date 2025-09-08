import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function TeoriaScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📚 Teoria ISTQB Foundation Level</Text>

      <Link href="../capitoli_teoria/foundation/capitolo1"><Text style={styles.link}>1. Fondamenti del Testing</Text></Link>
      <Link href="../capitoli_teoria/foundation/capitolo2"><Text style={styles.link}>2. Ciclo di Vita del Software</Text></Link>
      <Link href="../capitoli_teoria/foundation/capitolo3"><Text style={styles.link}>3. Tecniche Statiche</Text></Link>
      <Link href="../capitoli_teoria/foundation/capitolo4"><Text style={styles.link}>4. Tecniche di Test</Text></Link>
      <Link href="../capitoli_teoria/foundation/capitolo5"><Text style={styles.link}>5. Gestione dei Test</Text></Link>
      <Link href="../capitoli_teoria/foundation/capitolo6"><Text style={styles.link}>6. Strumenti di Supporto</Text></Link>

      <Text style={styles.notice}>⚠️ La webapp è ancora in fase di sviluppo. Alcuni contenuti potrebbero essere incompleti.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { fontSize: 22, color: '#fff', marginBottom: 20 },
  link: { fontSize: 18, color: '#4DA6FF', marginBottom: 15 },
  notice: { fontSize: 14, color: '#ffcc00', marginTop: 30, textAlign: 'center' }
});
