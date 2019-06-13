/**
 * This lib contains methods to handle date formats.
 * @module utils/base/dates
 * @see components:ListDate
 */

import Constants from './constants';

export default {

  getDateInOrder(order) {
    let date = new Date();
    return new Date((date.setDate(date.getDate() - 10 + order)));
  },

  /**
   * Format date into string with date and month
   *
   * @function
   * @param {date} date
   * @return {string} day and month
   */
  getDayAndMonth(date) {
    console.log(date);
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');

    return dd + '.' + mm + '.';
  },

  getDayAndMonthInOrder(order) {
    return this.getDayAndMonth(
      this.getDateInOrder(order)
    );
  },

  getDayOfWeek(date) {
    return Constants.days[date.getDay()].substr(0, 3);
  },

  getDayOfWeekInOrder(order) {
    return this.getDayOfWeek(
      this.getDateInOrder(order)
    );
  }

};
