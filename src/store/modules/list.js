/**
 * Store for list page contains logic for render all schedules.
 * @module store/modules/list
 * @see views/list
 */

import Dates from '@/utils/constants/dates';

export default {
  namespaced: true,
  state: {
    channels: [], // the main content of list page
    favourite: false, // filter for favourite programs
    tabActiveId: 'tab-' + Dates.count / 2,
    tabMiddleNumber: Dates.count / 2,
    scrollPosition: 0
  },

  actions: {
    /**
     * Send async channels to mutation.
     * TODO: Add validation and error handler.
     * @param {any} state
     * @param {array} channels
     */
    updateChannels({
      commit
    }, channels) {
      commit('updateChannels', channels);
    },

    /**
     * Send async tabActiveId to mutation.
     * @param {any} state
     * @param {array} tabActiveId
     */
    updateTabActiveId({
      commit
    }, tabActiveId) {
      commit('updateTabActiveId', tabActiveId);
    },
  },

  mutations: {
    /**
     * Save channels for render into lists.
     * TODO: With lazy loading and ES6 is easy
     * to add new groups of elements.
     * @param {any} state
     * @param {array} channels
     */
    updateChannels(state, channels) {
      state.channels = [...channels];
    },

    /**
     * Save favourite for render.
     * @param {any} state
     * @param {array} favourite
     */
    updateFavourite(state, favourite) {
      state.favourite = favourite;
    },

    /**
     * Save tabActiveId for render.
     * @param {any} state
     * @param {array} tabActiveId
     */
    updateTabActiveId(state, tabActiveId) {
      state.tabActiveId = tabActiveId;
    }
  }
};