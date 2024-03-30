export default {
  init() {
    this.createMenu()
  },
  createMenu() {
    this.tag = '<span class="__side-bar-span__"><i class="fa-solid fa-home fa-fw"></i> Home</span>'
  },
  loader() {

  },
  show() {

  },
  hide() {

  },
  HTML() {
    return { loader: this.loader, tag: this.tag, menu: 'Home', show: this.show, hide: this.hide}
  }
}