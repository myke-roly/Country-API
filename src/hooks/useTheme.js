import { useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState({ dark: false });

  const toggleDarkMode = () => setTheme({ dark: !theme.dark });

  return { theme, toggleDarkMode };
};

export default useTheme;
