import { useContext } from 'react';
import { WordContext } from '../context/WordContext';

export const useWord = () => {
  const context = useContext(WordContext);
  if (!context) {
    throw new Error('useWord must be used within a WordProvider');
  }
  return context;
};
