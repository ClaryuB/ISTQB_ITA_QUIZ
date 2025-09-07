import AsyncStorage from '@react-native-async-storage/async-storage';

const SETTINGS_KEY = 'impostazioni_quiz';

export type ImpostazioniQuiz = {
  darkMode: boolean;
  timerAttivo: boolean;
};

export async function salvaImpostazioni(settings: ImpostazioniQuiz) {
  try {
    await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (error) {
    console.error('Errore nel salvataggio delle impostazioni:', error);
  }
}

export async function caricaImpostazioni(): Promise<ImpostazioniQuiz> {
  try {
    const data = await AsyncStorage.getItem(SETTINGS_KEY);
    return data ? JSON.parse(data) : { darkMode: true, timerAttivo: true };
  } catch (error) {
    console.error('Errore nel caricamento delle impostazioni:', error);
    return { darkMode: true, timerAttivo: true };
  }
}
