import './Menu.css'
export default class ContainerMenu {
    constructor() {

    }
    init(root) {
      this.root = root
      this.showing = false
      this.menus = {}
      this.buildClient()
    }
    show() {
       this.container.style.display = 'block'
       this.showing = true
    }
    hide() {
       this.container.style.display = 'none'
       this.showing = false
    }
    add(MenuObj) {
      let sideBarOption = document.createElement('div');
      sideBarOption.className = '__side-bar-option__ '
      sideBarOption.innerHTML = MenuObj.tag;
      this.sidebar.appendChild(sideBarOption)
      //add menu
    }
    buildClient() {
      let container = document.createElement('div')
      container.className = '__main-menu__'
      container.innerHTML = `
      <div class="__top-bar__" id="__top-bar__"></div>
      <div class="__menu-container__" id="__menu-container__></div>
      <div class="__side-bar__" id="__side-bar__></div>`
      this.root.appendChild(container)
      this.container = container
      this.sidebar = document.getElementById('__side-bar__')
      this.menuContainer = document.getElementById('__main-menu__')
    }
}
/*<div class="__main-menu__">
    <div class="__top-bar__"></div>
    <div class="__menu-container__"></div>
    <div class="__side-bar__">
      
      

    </div>
   </div>*/