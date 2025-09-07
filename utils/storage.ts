import AsyncStorage from '@react-native-async-storage/async-storage';
import { RisultatoQuiz } from '../types/RisultatoQuiz';


const STORAGE_KEY = 'storico_quiz';

export async function salvaRisultatoQuiz(result: {
  domande: number;
  corrette: number;
  superato: boolean;
  timestamp: string;
}) {
  try {
    const existing = await AsyncStorage.getItem(STORAGE_KEY);
    const storico = existing ? JSON.parse(existing) : [];
    const aggiornato = [result, ...storico];
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(aggiornato));
  } catch (error) {
    console.error('Errore nel salvataggio dello storico:', error);
  }
}

export async function caricaStoricoQuiz(): Promise<
 RisultatoQuiz[]
> {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Errore nel caricamento dello storico:', error);
    return [];
  }
}
