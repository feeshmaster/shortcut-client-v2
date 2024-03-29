export default {
  init() {
    this.createMenu()
  },
  createMenu() {
    this.tag = '<span class="__side-bar-span__"><i class="fa-solid fa-grid-2 fa-fw"></i> Shortcuts</span>'
  },
  loader() {

  },
  HTML() {
    return { loader: this.loader, tag: this.tag }
  }
}