export default {
  init() {
    this.createMenu()
  },
  createMenu() {
    this.tag = '<span class="__side-bar-span__"><i class="fa fa-gamepad-modern fa-fw"></i> Games</span>'
  },
  loader() {

  },
  show() {

  },
  hide() {

  },
  HTML() {
    return { loader: this.loader, tag: this.tag, menu: 'Games', show: this.show, hide: this.hide}
  }
}