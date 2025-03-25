export interface WordsType {
  word: string;
  hint: string;
}

export interface WordContextType {
  currentWord: WordsType;
  setNewWord: () => void;
}
