export default class Page {
  constructor() {
    this.title = 'my Page';
  }

  open(path) {
    browser.url(path);
  }
}