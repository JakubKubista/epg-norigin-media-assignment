/**
 * Architecture of state management is separated into modules, which contains state, getters, actions, mutations.
 * @module store
 * @see main.js
 */

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {}
});
