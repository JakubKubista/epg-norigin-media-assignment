/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator } from '@storybook/vue';

import "@/plugins/vuetify";
import 'vuetify/dist/vuetify.css';
// import '@/components/_globals.js';

import Files from '@/utils/base/files';
Files.loadFile('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons', 'css');

addDecorator(() => ({
  template: '<v-app><story style="margin: auto"/></v-app>',
}));

const req = require.context('@/stories', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}
configure(loadStories, module);

