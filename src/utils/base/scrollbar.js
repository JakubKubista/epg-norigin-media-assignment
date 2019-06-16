/**
 * This lib contains features for more components.
 * @module utils/base/scrollbar
 * @see components
 */

import Dates from "./dates";

export default {
  /**
   * Set scrollbar on default position by
   * elapsed time of today.
   */

  setDefaultScrollPosition() {
    let scrollbar = document.querySelector(".md-scrollbar");
    let scrollbarMax =
      scrollbar.scrollWidth - scrollbar.clientWidth;
    let timeProportion = Dates.getTodayTimeProportion()/100;
    timeProportion = 0.5;
    if (timeProportion >= 0.9) {
      timeProportion = 1;
    } else if (timeProportion <= 0.1) {
      timeProportion = 0;
    } else if (timeProportion < 0.5){
      timeProportion -= 0.1;
    } else {
      timeProportion += 0.1;
    }
    scrollbar.scrollLeft = (scrollbarMax * timeProportion);
  }
};
