import React, { useState } from 'react';
import words from '../data/words';
import { WordContextType, WordsType } from '../types/types';
import { createContext } from 'react';

export const WordContext = createContext<WordContextType | undefined>(
  undefined,
);

const WordProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentWord, setCurrentWord] = useState<WordsType>(
    words[Math.floor(Math.random() * words.length)],
  );

  const setNewWord = () => {
    const newWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(newWord);
  };

  return (
    <WordContext.Provider value={{ currentWord, setNewWord }}>
      {children}
    </WordContext.Provider>
  );
};

export default WordProvider;
