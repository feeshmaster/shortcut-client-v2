export default {
  init() {
    return this.createMenu()
  },
  createMenu() {
    
  },
  HTML() {
    return this.html !== null ? this.html : console.error('menu not initiated')
  }
}