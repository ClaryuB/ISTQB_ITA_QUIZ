import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Question } from '../types/Question';

interface Props {
  data: Question;
  onAnswer: (selected: string[], isCorrect: boolean) => void;
  currentIndex: number;
  total: number;
  timer?: number | null;
}

export default function QuestionCard({ data, onAnswer, currentIndex, total, timer }: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [triggerAnswer, setTriggerAnswer] = useState<null | boolean>(null);
  const isSingleChoice = data.corretta.length === 1;

  useEffect(() => {
    setSelected([]);
    setFeedback(null);
    setTriggerAnswer(null);
  }, [data.id]);

  useEffect(() => {
    if (triggerAnswer !== null) {
      onAnswer(selected, triggerAnswer);
      setTriggerAnswer(null);
    }
  }, [triggerAnswer]);

  const toggleOption = (letter: string) => {
    if (feedback) return;
    if (isSingleChoice) {
      setSelected([letter]);
    } else {
      setSelected(prev =>
        prev.includes(letter) ? prev.filter(l => l !== letter) : [...prev, letter]
      );
    }
  };

  const confirm = () => {
    const correct = data.corretta.sort().join(',') === selected.sort().join(',');
    setFeedback(correct ? 'correct' : 'wrong');
    setTimeout(() => {
      setTriggerAnswer(correct);
    }, 1500);
  };

  const getOptionStyle = (letter: string) => {
    const isSelected = selected.includes(letter);
    const isCorrect = data.corretta.includes(letter);

    if (feedback === 'correct' && isSelected) return styles.correct;
    if (feedback === 'wrong') {
      if (isSelected && !isCorrect) return styles.wrong;
      if (isCorrect) return styles.correct;
    }
    return isSelected ? styles.selected : styles.option;
  };

  const renderTable = (table: string[][]) => (
    <View style={styles.table}>
      {table.map((row, i) => (
        <View key={i} style={styles.tableRow}>
          {row.map((cell, j) => (
            <View key={j} style={[styles.tableCell, i === 0 && styles.headerCell]}>
              <Text style={styles.tableText}>{cell}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.content}>
        {typeof timer === 'number' && (
          <Text style={styles.timer}>
            ⏱ {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}
          </Text>
        )}
        
        <Text style={styles.counter}>Domanda {currentIndex + 1} / {total}</Text>
        <Text style={styles.question}>{data.domanda}</Text>

        {data.tabella && renderTable(data.tabella)}
        {data.tabella2 && renderTable(data.tabella2)}

        {data.immagine && (
          <Image
            source={data.immagine}
            style={styles.image}
            resizeMode="contain"
          />
        )}

        {data.descrizione && (
          <Text style={styles.description}>{data.descrizione}</Text>
        )}

        {data.opzioni.map((opt, i) => {
          const letter = String.fromCharCode(97 + i);
          return (
            <TouchableOpacity
              key={letter}
              onPress={() => toggleOption(letter)}
              style={getOptionStyle(letter)}
            >
              <Text style={styles.optionText}>{`${letter}) ${opt}`}</Text>
            </TouchableOpacity>
          );
        })}

        {feedback && (
          <Text style={styles.feedback}>
            {feedback === 'correct' ? '✔️ Risposta corretta!' : '❌ Risposta errata'}
          </Text>
        )}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={confirm}
          disabled={selected.length === 0 || feedback !== null}
          style={[
            styles.confirmButton,
            (selected.length === 0 || feedback) && styles.disabledButton
          ]}
        >
          <Text style={styles.buttonText}>Conferma risposta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, justifyContent: 'space-between' },
  content: { paddingBottom: 20 },
  timer: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10
  },
  counter: {
    color: '#aaa',
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center'
  },
  question: {
    color: '#fff',
    marginBottom: 10,
    fontSize: 16
  },
  description: {
    color: '#ccc',
    fontSize: 15,
    marginBottom: 10
  },
  option: {
    padding: 10,
    backgroundColor: '#1e1e1e',
    marginVertical: 5,
    borderRadius: 5
  },
  selected: {
    padding: 10,
    backgroundColor: '#3333aa',
    marginVertical: 5,
    borderRadius: 5
  },
  correct: {
    padding: 10,
    backgroundColor: '#2e7d32',
    marginVertical: 5,
    borderRadius: 5
  },
  wrong: {
    padding: 10,
    backgroundColor: '#c62828',
    marginVertical: 5,
    borderRadius: 5
  },
  optionText: {
    color: '#fff',
    fontSize: 15
  },
  feedback: {
    marginTop: 10,
    fontSize: 18,
    color: '#fff',
    textAlign: 'center'
  },
  buttonContainer: {
    paddingBottom: 30,
    alignItems: 'center'
  },
  confirmButton: {
    backgroundColor: '#007aff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8
  },
  disabledButton: {
    backgroundColor: '#555'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    borderRadius: 8
  },
  table: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 6
  },
  tableRow: {
    flexDirection: 'row'
  },
  tableCell: {
    flex: 1,
    padding: 6,
    borderRightWidth: 1,
    borderColor: '#444',
    backgroundColor: '#1e1e1e'
  },
  headerCell: {
    backgroundColor: '#333'
  },
  tableText: {
    color: '#fff',
    fontSize: 13,
    textAlign: 'center'
  }
});
