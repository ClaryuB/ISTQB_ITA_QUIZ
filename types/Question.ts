import { ImageSourcePropType } from 'react-native';

export interface Question {
  id: string;
  domanda: string;
  tabella?: string[][];
  tabella2?: string[][];
  descrizione?: string;
  opzioni: string[];
  corretta: string[];
  immagine?: ImageSourcePropType; // URL o path locale
}