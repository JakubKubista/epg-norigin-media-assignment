/**
 * This lib is to be used to call services of server.
 * To change default url, change method getUrl in object ISAC_URL.
 * @module utils/isac/api
 * @see store:base/isac-service
 */

import Axios from 'axios';
import Constants from '../constants/api';

export default {
  /**
   * Define server url.
   * @function
   * @param {object} input - Server service parameters.
   * @return {string} url with service.
   */
  setUrl(input) {
    return Constants.url.local + '/' + input.serviceName;
  },

  /**
   * Method call ISAC service.
   * @function
   * @param {object} input - ISAC service parameters.
   * @return {any} Axios request by service url.
   */
  get(input) {
    const url = this.setUrl(input);
    return Axios.get(url, { params: input.parameters });
  },
};
