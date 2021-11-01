import {addParameters} from "@storybook/react";
import {addDecorator} from "@storybook/react";
import {withContexts} from "@storybook/addon-contexts/react";
import {withKnobs} from "@storybook/addon-knobs";
import {contexts} from "./contexts";

// THATS TO UPLOAD CONTEXTS IN STORY BOOK
addParameters({
  backgrounds: {
    default: 'Default theme',
    values: [
      {
        name: 'Default theme',
        value: '#ffffff',
      },
      {
        name: 'Dark theme',
        value: '#050449',
      },
    ],
  }
});

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
