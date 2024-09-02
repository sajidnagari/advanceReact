import {  createContext, useContext, useState } from 'react';

export const GlobalState = createContext({});

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState('Ali')
  const [count, setCount]=  useState(0)


  return (
    <GlobalState.Provider
      value={{
       user,
       setUser,
       count,
       setCount
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalState);
};
