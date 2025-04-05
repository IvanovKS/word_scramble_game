import React, { createContext, useState } from 'react';
import { TimerContextType } from '../types/types';

export const TimerContext = createContext<TimerContextType | null>(null);

const TimerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isStart, setIsStart] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(15);

  const startTimer = (): void => {
    setIsStart(true);
    let time = timeLeft;
    const interval = setInterval(() => {
      time -= 1;
      setTimeLeft(time);
      if (time === 0) {
        setIsStart(false);
        setTimeLeft(15);
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
