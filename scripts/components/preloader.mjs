class Preloader {
  constructor(preloaderOptions) {
    this.options = { ...preloaderOptions };
    this.preloader = document.querySelector(this.options.selector);
  }

  show() {
    this.preloader.classList.add(this.options.activeSelector);
  }

  hide() {
    this.preloader.classList.remove(this.options.activeSelector);
  }
}

export default Preloader;
