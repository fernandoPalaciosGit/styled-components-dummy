// CUALQUIER COMPONENTE SOLO VA A LEER ESTE ARCHIVO

import {blue, green, neutral, red, yellow} from "./colors";
import {fontFamily} from "./typography";

export const brandTheme = {
  primaryColor : blue[100],
  primaryHoverColor : blue[200],
  secondaryColor : yellow[200],
  secondaryHoverColor : yellow[300],
  tertiaryColor : neutral[300],
  tertiaryHoverColor : neutral[400],
  alertColor: red[100],
  successColor : green[100],
  textColor : neutral[100],
  textColorContrast : neutral[400],
  textFont : fontFamily.primary,

  status: {
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300]
  },

  formElement: {
    textColor : neutral[100],
    background: neutral[300]
  }
};

export const brandDarkTheme = {
  primaryColor : blue[200],
  primaryHoverColor : blue[300],
  secondaryColor : yellow[300],
  secondaryHoverColor : yellow[400],
  tertiaryColor : neutral[400],
  tertiaryHoverColor : neutral[500],
  alertColor: red[200],
  successColor : green[200],
  textColor : neutral[300],
  textColorContrast : neutral[500],
  textFont : fontFamily.primary,

  status: {
    errorColor: red[200],
    errorColorHover: red[300],
    errorColorActive: red[400],
    successColor: green[200],
    successColorHover: green[300],
    successColorActive: green[400]
  },

  formElement: {
    textColor : blue[100],
    background: blue[300]
  }
};
