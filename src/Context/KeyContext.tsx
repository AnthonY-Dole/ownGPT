import React, { createContext, useState } from "react";

type Key = {
  key: string;
};
type KeyContextType = {
  apikey: Key | null;
  setApiKey: (apikey: Key | null) => void;
};

export const KeyContext = createContext<KeyContextType>({
  apikey: null,
  setApiKey: () => {},
});

type Props = {
  children: React.ReactNode;
};
export default function KeyContextProvider({ children }: Props) {
  const [apikey, setApiKey] = useState<Key | null>(null);
  return (
    <KeyContext.Provider value={{ apikey, setApiKey }}>
      {children}
    </KeyContext.Provider>
  );
}
