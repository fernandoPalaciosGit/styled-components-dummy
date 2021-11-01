import React, {useState} from "react";
import {brandDarkTheme, brandTheme} from "../variables";
import {ThemeProvider} from "styled-components";

const themeList = {
  light: brandTheme,
  dark: brandDarkTheme
};
export const ThemeDesign = ({children}) => {
  const defaultTheme = themeList.light;
  const [theme, setTheme] = useState(defaultTheme);
  const toggleTheme = ({target}) => setTheme(themeList[target.value]);

  return (
    <ThemeProvider theme={theme}>
      <select onChange={toggleTheme}>
        {Object.entries(themeList).map(([name]) => <option value={name}>{name}</option>)}
      </select>
      {children}
    </ThemeProvider>
  );
};
