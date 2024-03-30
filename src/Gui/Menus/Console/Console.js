import './Console.css'

export default {
  init() {
    this.createMenu()
    this.menu = 'Console'
  },
  createMenu() {
    this.tag = '<span class="__side-bar-span__"><i class="fa fa-code fa-fw"></i> Console</span>'
  },
  loader(root) {
    this.container = document.createElement('div')
    this.container.style = `
    display: none;
    width: 100%;
    height: 100%;
    `
    root.appendChild(this.container)
  },
  show() {
    this.container.style.display = 'block'
  },
  hide() {
    this.container.style.display = 'none'
  },

}