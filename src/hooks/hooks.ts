import { useContext } from 'react';
import { WordContext } from '../context/WordContext';
import { TimerContext } from '../context/TimerContext';

export const useWord = () => {
  const context = useContext(WordContext);
  if (!context) {
    throw new Error('useWord must be used within a WordProvider');
  }
  return context;
};

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
};
