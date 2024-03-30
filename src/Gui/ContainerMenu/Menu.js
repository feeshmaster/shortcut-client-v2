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
      this.addDrag()
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
      MenuObj.loader(this.menuContainer)
      //add option
      let sideBarOption = document.createElement('div');
      sideBarOption.className = '__side-bar-option__ '
      sideBarOption.innerHTML = MenuObj.tag;
      sideBarOption.onclick = () => {this.selectMenu(MenuObj.menu);}
      this.sidebar.appendChild(sideBarOption);
      this.sideBarOptions[MenuObj.menu] = { elem: sideBarOption, menu: MenuObj };
    }
    selectMenu(menu) {
      if (menu === this.currentMenu) return;
      //unselect current menu
      if (this.currentMenu) {this.sideBarOptions[this.currentMenu].menu.hide();
      this.sideBarOptions[this.currentMenu].elem.classList.toggle('__selected__');}
      //select menu
      this.sideBarOptions[menu].menu.show()
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
      this.menuContainer = document.getElementById('__menu-container__')
      this.topbar = document.getElementById('__top-bar__')
    }
    bindEvent(element, event, handler, ctx, config={}) {
      element.addEventListener(event, handler.bind(ctx), config)
    }
    unbindEvent(element, event, handler) {
      element.addEventListener(event, handler)
    }

    addDrag() {
      this.container.style.position = "absolute"
      this.isDrag = false, this.offsetX, this.offsetY;
      this.bindEvent(this.topbar, "mousedown", this.dragStartHandler, this)
      this.bindEvent(this.topbar, "touchstart", this.dragStartHandler, this, { passive: true })
      this.bindEvent(window, "mouseup", this.mouseUpHandler, this)
      this.bindEvent(window, "touchend", this.mouseUpHandler, this)
      this.bindEvent(window, "resize", this.adjustToFit, this)
    }
    adjustToFit() {
      this.oldLeft = this.container.style.left.slice(0, -2)
      this.oldTop = this.container.style.top.slice(0, -2)
      if (this.oldLeft > window.innerWidth - this.container.offsetWidth) {
        this.oldLeft = window.innerWidth - this.container.offsetWidth
      }
      if (this.oldTop > window.innerHeight - this.container.offsetHeight) {
        this.oldTop = window.innerHeight - this.container.offsetHeight
      }
      this.container.style.left = this.oldLeft + "px"
      this.container.style.top = this.oldTop + "px"
    }
    dragStartHandler(e) {
      this.bindEvent(document, "pointermove", this.mouseMoveHandler, this)
      this.bindEvent(document, "touchmove", this.mouseMoveHandler, this)
      this.isDrag = true;
      this.offsetX = e.type === 'touchstart' ? e.touches[0].clientX - this.container.getBoundingClientRect().left : e.clientX - this.container.getBoundingClientRect().left;
      this.offsetY = e.type === 'touchstart' ? e.touches[0].clientY - this.container.getBoundingClientRect().top : e.clientY - this.container.getBoundingClientRect().top;
    }
    mouseUpHandler(e) {
      this.unbindEvent(document, "pointermove", this.mouseMoveHandler)
      this.unbindEvent(document, "touchmove", this.mouseMoveHandler)
      this.isDrag = false;
    }
    mouseMoveHandler(e) {
      if (this.isDrag) {
        e.preventDefault();
        this.Left = (e.type === 'touchmove' ? e.touches[0].clientX : e.clientX) - this.offsetX
        this.Top = (e.type === 'touchmove' ? e.touches[0].clientY : e.clientY) - this.offsetY
  
        if (this.Left < 0) {
          this.Left = 0
        }
        if (this.Top < 0) {
          this.Top = 0
        }
        if (this.Left > window.innerWidth - this.container.offsetWidth) {
          this.Left = window.innerWidth - this.container.offsetWidth
        }
        if (this.Top > window.innerHeight - this.container.offsetHeight) {
          this.Top = window.innerHeight - this.container.offsetHeight
        }
        this.container.style.top = this.Top + "px"
        this.container.style.left = this.Left + "px"
      }
    }
    
}
/*<div class="__main-menu__">
    <div class="__top-bar__"></div>
    <div class="__menu-container__"></div>
    <div class="__side-bar__">
      
      

    </div>
   </div>*/