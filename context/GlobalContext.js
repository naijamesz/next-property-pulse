'use client';
import { createContext, useContext, useState } from 'react';

// Create a provider
const GlobalContext = createContext();

//  Create a provider
export default function GlobalContext({ children }) {
  const [unreadCount, setUnreadCount] = useState(0);
  return (
    <GlobalContext.Provider
      value={{
        unreadCount,
        setUnreadCount
      }}>
      {children}
    </GlobalContext.Provider>
  );
}

// Create a custom hook to access context
export function useGlobalContext() {
  return useContext(GlobalContext);
}
