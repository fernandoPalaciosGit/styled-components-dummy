import { ThemeProvider } from "styled-components";
import {brandDarkTheme, brandTheme} from "../src/variables/themes";

export const contexts = [
  {
    icon: "box", // a icon displayed in the Storybook toolbar to control contextual props
    title: "Themes", // an unique name of a contextual environment
    components: [ThemeProvider],
    params: [
      // an array of params contains a set of predefined `props` for `components`
      { name: "Default Theme", props: { theme: brandTheme, default: true } },
      { name: "Dark Theme", props: { theme: brandDarkTheme } }
    ],
    options: {
      deep: true, // pass them toevery component
      disable: false, // disable this contextual environment completely
      cancelable: false // allow this contextual environment to be opt-out optionally in toolbar
    }
  }
];
