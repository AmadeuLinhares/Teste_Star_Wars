import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Routes from './routes';
import GlobalStyles from './styles/globals';
import { LoadingProvider } from './context/loading';

function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <Routes />
      </LoadingProvider>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
