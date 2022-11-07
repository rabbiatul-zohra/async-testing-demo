import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [useDarkTheme, setUseDarkTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{ useDarkTheme, setUseDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
