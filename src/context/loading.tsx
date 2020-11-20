import React, { createContext, useCallback, useState } from 'react';

interface LoadingInterfaceParamters {
  active: boolean;
}

interface loadingContextInterface {
  ativo: boolean;
  setIsLoading(parametersLoading: LoadingInterfaceParamters): void;
}

export const LoadingContext = createContext<loadingContextInterface>(
  {} as loadingContextInterface,
);

export const LoadingProvider: React.FC = ({ children }) => {
  const [load, setLoad] = useState(false);

  const setIsLoading = useCallback(({ active }) => {
    setLoad(active);
  }, []);

  return (
    <LoadingContext.Provider value={{ ativo: load, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
