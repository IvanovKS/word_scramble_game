export interface WordsType {
  word: string;
  hint: string;
}

export interface WordContextType {
  currentWord: WordsType;
  setNewWord: () => void;
}

export interface CountTimer {
  isActive: boolean;
  seconds: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  resetTimer: () => void;
}

export interface ButtonPropsClick {
  onClick?: () => void;
}
