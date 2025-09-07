import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { caricaImpostazioni } from '../../utils/settings';

const options = [10, 20, 30, 40];

export default function StartScreen() {
  const router = useRouter();
  const [selectedCount, setSelectedCount] = useState<number | null>(null);
  const [useTimer, setUseTimer] = useState(false);
  const [modalitaEsame, setModalitaEsame] = useState(false);

  // ⬇️ Carica impostazioni salvate all'avvio
  useEffect(() => {
    caricaImpostazioni().then((s) => {
      setUseTimer(s.timerAttivo);
    });
  }, []);

  const startQuiz = () => {
    if (modalitaEsame) {
      router.push('/quiz?count=40&timer=true&mode=esame');
    } else if (selectedCount) {
      router.push(`/quiz?count=${selectedCount}&timer=${useTimer}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quante domande vuoi provare?</Text>

      {options.map((num) => (
        <TouchableOpacity
          key={num}
          style={[styles.button, selectedCount === num && styles.selectedButton]}
          onPress={() => {
            setSelectedCount(num);
            setModalitaEsame(false); // disattiva modalità esame se selezioni manualmente
          }}
        >
          <Text style={styles.buttonText}>{num} domande</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Timer attivo</Text>
        <Switch
          value={useTimer}
          onValueChange={setUseTimer}
          thumbColor="#fff"
          trackColor={{ false: '#555', true: '#007aff' }}
        />
      </View>

      <TouchableOpacity
        style={[styles.startButton, !selectedCount && !modalitaEsame && styles.disabled]}
        onPress={startQuiz}
        disabled={!selectedCount && !modalitaEsame}
      >
        <Text style={styles.buttonText}>Inizia quiz</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  title: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 30,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#1e1e1e',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    width: '100%'
  },
  selectedButton: {
    backgroundColor: '#007aff'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '100%'
  },
  switchLabel: {
    color: '#fff',
    fontSize: 16
  },
  startButton: {
    backgroundColor: '#007aff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 40,
    width: '100%'
  },
  disabled: {
    backgroundColor: '#555'
  }
});
