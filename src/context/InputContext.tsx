import React, { createContext, useState } from 'react';
import { InputContextType } from '../types/types';

export const InputContext = createContext<InputContextType | null>(null);

const InputProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [inputText, setInputText] = useState<string>('');
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(event.target.value.toLowerCase().trim());
  };

  return (
    <InputContext.Provider value={{ inputText, onChangeInput }}>
      {children}
    </InputContext.Provider>
  );
};

export default InputProvider;
