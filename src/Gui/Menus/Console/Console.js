export default {
  init() {
    this.createMenu()
  },
  createMenu() {
    this.tag = '<span class="__side-bar-span__"><i class="fa fa-code fa-fw"></i> Console</span>'
  },
  loader() {

  },
  show() {

  },
  hide() {

  },
  HTML() {
    return { loader: this.loader, tag: this.tag, menu: 'Console', show: this.show, hide: this.hide}
  }
}