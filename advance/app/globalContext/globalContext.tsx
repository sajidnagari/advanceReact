"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type GlobalStateType = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  count: number;
  isUserLogin: boolean;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setIsUserLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GlobalState = createContext<GlobalStateType>({
  user: "Ali",
  setUser: () => {},
  count: 0,
  isUserLogin: false,
  setCount: () => {},
  setIsUserLogin: () => {},
});

type GlobalProviderProps = {
  children: ReactNode;
};

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [user, setUser] = useState<string>("Ali");
  const [count, setCount] = useState<number>(0);
  const [isUserLogin, setIsUserLogin] = useState<boolean>(false);

  const isUserLoginWithToken = localStorage.getItem("token");
  useEffect(() => {
    if (isUserLoginWithToken) {
      setIsUserLogin(true);
    }
  }, [isUserLoginWithToken]);

  return (
    <GlobalState.Provider
      value={{
        user,
        setUser,
        count,
        setCount,
        isUserLogin,
        setIsUserLogin,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalState);
};
