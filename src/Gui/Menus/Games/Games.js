export default {
  init() {
    this.createMenu()
  },
  createMenu() {
    this.tag = '<span class="__side-bar-span__"><i class="fa fa-gamepad-modern fa-fw"></i> Games</span>'
    console.log(this.tag)
  },
  loader() {

  },
  HTML() {
    return { loader: this.loader, tag: this.tag }
  }
}