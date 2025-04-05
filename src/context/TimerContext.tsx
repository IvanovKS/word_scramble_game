import React, { createContext, useRef, useState } from 'react';
import { TimerContextType } from '../types/types';

export const TimerContext = createContext<TimerContextType | null>(null);

const TimerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isStart, setIsStart] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startTimer = (): void => {
    clearTimer();
    let time = 15;
    setIsStart(true);
    setTimeLeft(time);
    intervalRef.current = setInterval(() => {
      time -= 1;
      setTimeLeft(time);
      if (time === 0) {
        setIsStart(false);
        setTimeLeft(null);
        clearTimer();
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
