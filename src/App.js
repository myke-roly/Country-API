import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './containers/header/Header';
import Main from './containers/main/Main';
import CountryContext from './context/CountryContext';
import useTheme from './hooks/useTheme';

const App = () => {
  const { theme, toggleDarkMode } = useTheme();
  
  return (
    <ThemeProvider theme={theme}>
      <CountryContext>
        <Header theme={theme} toggleDarkMode={toggleDarkMode} />

        
        <Main theme={theme} />
      </CountryContext>
    </ThemeProvider>
  );
};

export default App;
