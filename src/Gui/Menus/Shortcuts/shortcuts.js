export default {
  init() {
    this.createMenu()
  },
  createMenu() {
    this.tag = '<span class="__side-bar-span__"><i class="fa-solid fa-grid-2 fa-fw"></i> Shortcuts</span>'
  },
  loader() {

  },
  show() {

  },
  hide() {

  },
  HTML() {
    return { loader: this.loader, tag: this.tag, menu: 'Shortcuts', show: this.show, hide: this.hide}
  }
}