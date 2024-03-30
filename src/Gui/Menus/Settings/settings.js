export default {
  init() {
    this.createMenu()
  },
  createMenu() {
    this.tag = '<span class="__side-bar-span__"><i class="fa fa-gears fa-fw"></i> Settings</span>'
  },
  loader() {

  },
  show() {

  },
  hide() {

  },
  HTML() {
    return { loader: this.loader, tag: this.tag, menu: 'Settings', show: this.show, hide: this.hide}
  }
}