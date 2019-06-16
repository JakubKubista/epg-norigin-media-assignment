/**
 * This lib contains methods to handle date formats.
 * @module utils/base/dates
 * @see components:ListDate
 */

import Constants from '../constants/dates';

export default {

  /**
   * Get date from the list of dates in order.
   * @function
   * @param {number} order
   * @return {date} date
   */
  getDateInOrder(order) {
    let date = new Date();
    return new Date((date.setDate(date.getDate() - (Constants.count / 2) + order)));
  },

  /**
   * Format date into string with date and month
   * @function
   * @param {date} date
   * @return {string} day and month
   */
  getDayAndMonth(date) {
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');

    return dd + '.' + mm + '.';
  },

  /**
   * Format date into string with hour and minute
   * @function
   * @param {date} date
   * @return {string} hour and minute
   */
  getHourAndMinute(date) {
    let hh = String(date.getHours());
    let mm = String(date.getMinutes());
    if (mm === '0') mm = '00';

    return hh + ':' + mm;
  },

  /**
   * Get first 3 letters of day from input date.
   * @function
   * @param {date} date
   * @return {string} day
   */
  getDayOfWeek(date) {
    return Constants.days[date.getDay()].substr(0, 3);
  },

  /**
   * For both following functions is wanted to
   * get date by order and then tranform it into
   * wanted state.
   * @function
   * @param {number} order
   * @return {string} date in chosen representation
   */
  getDayAndMonthInOrder(order) {
    return this.getDayAndMonth(
      this.getDateInOrder(order)
    );
  },
  getDayOfWeekInOrder(order) {
    return this.getDayOfWeek(
      this.getDateInOrder(order)
    );
  },

  /**
   * Transform string dates into dates and
   * get minutes of their difference.
   * @function
   * @param {string} start
   * @param {string} end
   * @return {number} minutes between two dates
   */
  getMinuteDiffOfDates(start, end) {
    let diffMs = new Date(end) - new Date(start);
    return Math.round(((diffMs % 86400000) % 3600000) / 60000);
  },

  /**
   * Count today's elasped time.
   * @function
   * @return {number} seconds
   */
  getElapsedSeconds() {
    let now = new Date();
    let hours = now.getHours() * 60 * 60;
    let minutes = now.getMinutes() * 60;
    let seconds = now.getSeconds();
    return hours + minutes + seconds;
  },

};