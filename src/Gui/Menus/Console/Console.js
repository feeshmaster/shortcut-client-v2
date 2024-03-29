export default {
  init() {
    return this.createMenu()
  },
  createMenu() {
    this.tag = '<span class="__side-bar-span__"><i class="fa fa-code fa-fw"></i> Console</span>'
  },
  loader() {

  },
  HTML() {
    return { 'loader': this.loader, 'tag': this.tag }
  }
}