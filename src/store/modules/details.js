/**
 * Store for details page contains logic for render program.
 * @module store/modules/details
 * @see views/details
 */

export default {
  namespaced: true,
  state: {
    program: {} // the main content of details page
  },

  actions: {
    /**
     * Send async program to mutation.
     * @param {any} state
     * @param {array} program
     */
    updateProgram({
      commit
    }, program) {
      commit('updateProgram', program);
    },
  },

  mutations: {

    /**
     * Save program for render.
     * @param {any} state
     * @param {array} program
     */
    updateProgram(state, program) {
      state.program = program;
    }
  }
};