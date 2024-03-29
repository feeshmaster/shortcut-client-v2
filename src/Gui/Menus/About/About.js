export default {
    init() {
      this.createMenu()
    },
    createMenu() {
      this.tag = '<span class="__side-bar-span__"><i class="fa fa-book fa-fw"></i> About</span>'
    },
    loader() {

    },
    HTML() {
      return { loader: this.loader, tag: this.tag }
    }
}