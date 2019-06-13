/**
 * This lib contains methods to handle date formats.
 * @module utils/base/dates
 * @see components:ListDate
 */

import Constants from './constants';

export default {
  /**
   * Format date into string with date and month
   *
   * @function
   * @param {date} date
   * @return {string} day and month
   */

  formatDate(date) {
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');

    return dd + '.' + mm + '.';
  },

  getDayOfWeek(date) {
    return Constants.days[date.getDay()].substr(0, 3);
  },

  getDate() {
    let date = new Date();
    let dateFormated = this.formatDate(date) + "\n" + this.getDayOfWeek(date);
    return dateFormated;
  }
};
