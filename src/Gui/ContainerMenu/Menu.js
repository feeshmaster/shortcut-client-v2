import './Menu.css'
import MenuInits from '../Menu_inits'

export default class ContainerMenu {
    constructor() {

    }
    init(root) {
      this.root = root
      this.showing = false
      this.menus = {}
      this.buildClient()
      this.sideBarOptions = {}
      this.currentMenu
    }
    show() {
       this.container.style.opacity = 1;
       this.showing = true
    }
    hide() {
       this.container.style.opacity = 0;
       this.showing = false
    }
    add(MenuObj) {
      //load menu
      MenuObj.loader()
      //add option
      let sideBarOption = document.createElement('div');
      sideBarOption.className = '__side-bar-option__ '
      sideBarOption.innerHTML = MenuObj.tag;
      sideBarOption.onclick = () => {this.selectMenu(MenuObj.menu);}
      this.sidebar.appendChild(sideBarOption);
      this.sideBarOptions[MenuObj.menu] = { elem: sideBarOption, show: MenuObj.show, hide: MenuObj.hide };
    }
    selectMenu(menu) {
      if (menu === this.currentMenu) return;
      //unselect current menu
      if (this.currentMenu) {this.sideBarOptions[this.currentMenu].hide();
      this.sideBarOptions[this.currentMenu].elem.classList.toggle('__selected__');}
      //select menu
      this.sideBarOptions[menu].show()
      this.sideBarOptions[menu].elem.classList.toggle('__selected__')
      this.currentMenu = menu
    }
    buildClient() {
      let container = document.createElement('div')
      container.className = '__main-menu__'
      container.innerHTML = `
      <div class="__top-bar__" id="__top-bar__"></div>
      <div class="__menu-container__" id="__menu-container__"></div>
      <div class="__side-bar__" id="__side-bar__"></div>
      `
      this.root.appendChild(container)
      this.container = container
      this.sidebar = document.getElementById('__side-bar__')
      this.menuContainer = document.getElementById('__main-menu__')
      this.topbar = document.getElementById('__top-bar__')
    }
    bindEvent(element, event, handler, ctx, config={}) {
      element.addEventListener(event, handler.bind(ctx), config)
    }
    unbindEvent(element, event, handler) {
      element.addEventListener(event, handler)
    }
    
}
/*<div class="__main-menu__">
    <div class="__top-bar__"></div>
    <div class="__menu-container__"></div>
    <div class="__side-bar__">
      
      

    </div>
   </div>*/