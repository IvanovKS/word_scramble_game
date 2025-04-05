import React, { createContext, useState } from 'react';
import { TimerContextType } from '../types/types';

export const TimerContext = createContext<TimerContextType | null>(null);

const TimerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isStart, setIsStart] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(20);

  const startTimer = (): void => {
    setIsStart(true);
    let time = timeLeft;
    const interval = setInterval(() => {
      time -= 1;
      setTimeLeft(time);
      if (time === 0) {
        setIsStart(false);
        clearInterval(interval);
      }
    }, 1000);
  };

  return (
    <TimerContext.Provider value={{ isStart, timeLeft, startTimer }}>
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
