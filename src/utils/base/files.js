/**
 * This lib contains administration with other file types than javascript.
 * @module utils/base/files
 * @see config:storybook/config
 */

export default {
  /**
   * Add css or another javascript file to javascript files.
   * @function
   * The link element is not allowed in the body.
   * However, most browsers will still render it just fine.
   * Add link to the head of the page and not the body.
   *
   * @param {string} path of unknown file
   * @param {string} type of unknown file
   */

  loadFile(path, type) {
    let fileref = null;
    if (type === 'js') {
      fileref = document.createElement('script');
      fileref.setAttribute('type', 'text/javascript');
      fileref.setAttribute('src', path);
    } else if (type === 'css') {
      fileref = document.createElement('link');
      fileref.setAttribute('rel', 'stylesheet');
      fileref.setAttribute('type', 'text/css');
      fileref.setAttribute('href', path);
    }
    document.getElementsByTagName('head')[0].appendChild(fileref);
  },
};
