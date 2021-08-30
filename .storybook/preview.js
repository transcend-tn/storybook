// The preview application is essentially just your stories with
// a framework-agnostic 'router'.
// It renders whichever story the manager application tells it to render.
// In this case we just use it to import the stylesheet and inject it
// in the context of our stories

import "../styles/globals.css";
import { addDecorator } from '@storybook/react'; // <- or your view layer
import { withTests } from '@storybook/addon-jest';

import results from '../.jest-test-results.json';

addDecorator(
  withTests({
    results,
  })
);

export const parameters = {
  options: {
    storySort: {
      method: 'alphabetical'
    }
  },
};
