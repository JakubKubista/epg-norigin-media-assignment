/**
 * This lib contains methods to handle date formats.
 * @module utils/base/dates
 * @see components:ListDate
 */

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

  getDate() {
    let date = new Date();
    return this.formatDate(date);
  }
};
