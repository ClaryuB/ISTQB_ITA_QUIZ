import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import React, { useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import QuestionCard from '../components/QuestionCard';
import { Question } from '../types/Question';
import allQuestions from '../utils/mergeQuestions';
import { shuffle } from '../utils/shuffle';
import { salvaRisultatoQuiz } from '../utils/storage';

export default function QuizScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const { count, timer, mode } = useLocalSearchParams();

  const questionCount = parseInt(Array.isArray(count) ? count[0] : count || '10');
  const useTimer = timer === 'true';
  const isEsame = mode === 'esame';

  const [quizKey, setQuizKey] = useState(0);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [risposteUtente, setRisposteUtente] = useState<Record<string, string[]>>({});

  const quizQuestions: Question[] = useMemo(() => {
    return shuffle(allQuestions).slice(0, questionCount);
  }, [quizKey, questionCount]);

  const totalSeconds = Math.round((questionCount / 40) * 60 * 60);
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);

  useEffect(() => {
    navigation.setOptions({
      title: `Domanda ${current + 1}/${quizQuestions.length}`,
      headerStyle: { backgroundColor: '#121212' },
      headerTintColor: '#fff'
    });
  }, [current, quizQuestions.length, navigation]);

  useEffect(() => {
    if (!useTimer || finished) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [useTimer, finished]);

  useEffect(() => {
    if (finished) {
      const passed = (score / quizQuestions.length) >= 0.65;
      salvaRisultatoQuiz({
        domande: quizQuestions.length,
        corrette: score,
        superato: passed,
        timestamp: new Date().toISOString()
      });
    }
  }, [finished]);

  const handleAnswer = (selected: string[], isCorrect: boolean) => {
    const currentId = quizQuestions[current].id;
    setRisposteUtente(prev => ({ ...prev, [currentId]: selected }));
    if (isCorrect) setScore(prev => prev + 1);
    if (current + 1 < quizQuestions.length) {
      setCurrent(prev => prev + 1);
    } else {
      setFinished(true);
    }
  };

  const restartQuiz = () => {
    setQuizKey(prev => prev + 1);
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setSecondsLeft(totalSeconds);
    setRisposteUtente({});
  };

  const passed = (score / quizQuestions.length) >= 0.65;
  const percentage = Math.round((score / quizQuestions.length) * 100);

  return (
    <View style={styles.container}>
      {!finished ? (
        <QuestionCard
          data={quizQuestions[current]}
          onAnswer={handleAnswer}
          currentIndex={current}
          total={quizQuestions.length}
          timer={useTimer ? secondsLeft : null}
        />
      ) : (
        <ScrollView>
          <Text style={styles.result}>
            {isEsame ? 'Simulazione ISTQB completata!' : 'Hai completato il quiz!'}
          </Text>
          <Text style={styles.result}>
            Risposte corrette: {score} su {quizQuestions.length} ({percentage}%)
          </Text>
          <Text style={[styles.result, { color: passed ? '#2e7d32' : '#c62828' }]}>
            {passed ? '✅ Esame superato!' : '❌ Esame non superato'}
          </Text>

          <TouchableOpacity style={styles.button} onPress={restartQuiz}>
            <Text style={styles.buttonText}>Ricomincia quiz</Text>
          </TouchableOpacity>

          {!isEsame && (
            <TouchableOpacity style={[styles.button, { marginTop: 10 }]} onPress={() => router.replace('/tabs/start')}>
              <Text style={styles.buttonText}>Torna alla scelta</Text>
            </TouchableOpacity>
          )}

          <View style={{ marginTop: 30 }}>
            <Text style={styles.result}>📋 Riepilogo domande</Text>
            {quizQuestions.map((q, i) => {
              const userAnswers = risposteUtente[q.id] || [];
              const isCorrect = q.corretta.sort().join(',') === userAnswers.sort().join(',');

              const formatAnswers = (letters: string[]) =>
                letters
                  .map(letter => {
                    const index = letter.charCodeAt(0) - 97;
                    const testo = q.opzioni[index];
                    return `${letter}) ${testo}`;
                  })
                  .join(', ');

              return (
                <View key={q.id} style={[styles.card, { backgroundColor: isCorrect ? '#2e7d32' : '#c62828' }]}>
                  <Text style={styles.question}>{i + 1}. {q.domanda}</Text>
                  <Text style={styles.answer}>✅ Corretta: {formatAnswers(q.corretta)}</Text>
                  <Text style={styles.answer}>📝 Tua risposta: {userAnswers.length > 0 ? formatAnswers(userAnswers) : '—'}</Text>
                  <Text style={styles.feedback}>
                    {isCorrect ? '✔️ Corretto' : '✖️ Sbagliato'}
                  </Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20
  },
  result: {
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 15
  },
  button: {
    backgroundColor: '#007aff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignSelf: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  card: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 10
  },
  question: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 4
  },
  answer: {
    fontSize: 14,
    color: '#eee'
  },
  feedback: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 6
  }
});
