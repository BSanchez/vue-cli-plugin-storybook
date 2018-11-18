/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable object-curly-newline */
import { configure, storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, text, color, select } from '@storybook/addon-knobs/vue';
import { registerStories } from 'vue-storybook';

const req = require.context('../../components', true, /.stories.js$/);
const reqVue = require.context('../../components', true, /\.vue$/);

function loadStories() {
  reqVue.keys().forEach((filename) => {
    registerStories(reqVue, filename, storiesOf, {
      withKnobs,
      withNotes,
      action,
      text,
      color,
      select,
    });
  });

  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
