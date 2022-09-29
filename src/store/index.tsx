import React, { useState } from 'react';

export const CounterContext = React.createContext<{
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}>({ count: 0, setCount: () => null });

export const CounterProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};
