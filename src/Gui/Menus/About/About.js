export default {
    init() {
      this.createMenu()
    },
    createMenu() {
      this.tag = '<span class="__side-bar-span__"><i class="fa fa-book fa-fw"></i> About</span>'
    },
    loader() {

    },
    show() {

    },
    hide() {

    },
    HTML() {
      return { loader: this.loader, tag: this.tag, menu: 'About', show: this.show, hide: this.hide}
    }
}