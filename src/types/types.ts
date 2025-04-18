export interface WordsType {
  word: string;
  hint: string;
}

export interface WordContextType {
  currentWord: WordsType;
  setNewWord: () => void;
}

export interface TimerContextType {
  isStart: boolean;
  timeLeft: number | null;
  startTimer: () => void;
}

export interface InputContextType {
  inputText: string;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
