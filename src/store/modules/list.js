/**
 * Store for list page contains logic for render all schedules.
 * @module store/modules/list
 * @see views/list
 */

import Dates from '@/utils/constants/dates';

export default {
  namespaced: true,
  state: {
    favourite: false, // filter for favourite programs
    tabActiveId: 'tab-' + Dates.count / 2,
    tabMiddleNumber: Dates.count / 2,
    channels: [], // the main content of list page
    scrollPosition: 0
  }
};
