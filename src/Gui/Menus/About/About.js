export default {
    init() {
      console.log(this, 1)
      this.createMenu()
    },
    createMenu() {
      console.log(1)
      this.tag = '<span class="__side-bar-span__"><i class="fa fa-book fa-fw"></i> About</span>'
    },
    loader() {

    },
    HTML() {
      return { loader: this.loader, tag: this.tag }
    }
}