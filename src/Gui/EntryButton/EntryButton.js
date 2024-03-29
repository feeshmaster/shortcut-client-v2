import './EntryButton.css'
import Settings from '../../utils/settings'
export default class EntryBtn {
    constructor() {
  
    }
    init(root, clientToggle) {
        this.justMoved = false;
        this.root = root
        this.toggleClient = clientToggle
        this.buildSelf()
    }
    buildSelf() {
      let self = document.createElement("div")
      self.id = '__client-button__'
      self.className = '__client-button__'
      self.innerHTML = `
        <span><i class="fa-solid fa-gamepad-modern fa-fw" style='width: 100%; height:100%; font-size:25px;'></i></span>
      `
      this.root.appendChild(self)
      this.self = self
      this.addListeners()
    }
    destroy() {
      
    }
    bindEvent(element, event, handler, ctx, config) {
      element.addEventListener(event, handler.bind(ctx), config)
    }
    unbindEvent(element, event, handler) {
      element.addEventListener(event, handler)
    }
    checkConfigs() {

    }
    addListeners() {
      this.addDrag(this.self)
      this.bindEvent(this.self, "mousedown", this.mouseDownOpacity, this)
      this.bindEvent(this.self, "touchstart", this.mouseDownOpacity, this, { passive: true })
      this.bindEvent(document, "mouseup", this.mouseUpOpacity, this)
      this.bindEvent(document, "touchend", this.mouseUpOpacity, this)
      this.bindEvent(this.self, "mouseup", this.toggle, this)
      this.bindEvent(this.self, "touchend", this.toggle, this)
    }
    toggle() {
      console.log(1)
      if (this.justMoved) {
        this.justMoved = false
        return
      }
      //load client
      this.toggleClient()
    }
    mouseDownOpacity() {
      this.self.style.opacity = 1
    }
    mouseUpOpacity() {
      this.self.style.opacity = 0.3
    }
    addDrag() {
      this.self.style.position = "absolute"
      this.isDrag = false, this.offsetX, this.offsetY;
      this.bindEvent(this.self, "mousedown", this.dragStartHandler, this)
      this.bindEvent(this.self, "touchstart", this.dragStartHandler, this, { passive: true })
      this.bindEvent(window, "mouseup", this.mouseUpHandler, this)
      this.bindEvent(window, "touchend", this.mouseUpHandler, this)
      this.bindEvent(window, "resize", this.adjustToFitOnResize, this)
    }
    adjustToFitOnResize() {
      this.oldLeft = this.self.style.left.slice(0, -2)
      this.oldTop = this.self.style.top.slice(0, -2)
      if (this.oldLeft > window.innerWidth - this.self.offsetWidth) {
        this.oldLeft = window.innerWidth - this.self.offsetWidth
      }
      if (this.oldTop > window.innerHeight - this.self.offsetHeight) {
        this.oldTop = window.innerHeight - this.self.offsetHeight
      }
      this.self.style.left = this.oldLeft + "px"
      this.self.style.top = this.oldTop + "px"
    }
    dragStartHandler(e) {
      this.bindEvent(document, "pointermove", this.mouseMoveHandler, this)
      this.bindEvent(document, "touchmove", this.mouseMoveHandler, this)
      this.isDrag = true;
      this.offsetX = e.type === 'touchstart' ? e.touches[0].clientX - this.self.getBoundingClientRect().left : e.clientX - this.self.getBoundingClientRect().left;
      this.offsetY = e.type === 'touchstart' ? e.touches[0].clientY - this.self.getBoundingClientRect().top : e.clientY - this.self.getBoundingClientRect().top;
    }
    mouseUpHandler(e) {
      this.unbindEvent(document, "pointermove", this.mouseMoveHandler)
      this.unbindEvent(document, "touchmove", this.mouseMoveHandler)
      this.isDrag = false;
      localStorage.setItem("_utilsMenuPos_", JSON.stringify({
          top: this.self.style.top,
          left: this.self.style.left
      }));
    }
    mouseMoveHandler(e) {
      if (this.isDrag) {
        e.preventDefault();
        this.justMoved = true;
        this.Left = (e.type === 'touchmove' ? e.touches[0].clientX : e.clientX) - this.offsetX
        this.Top = (e.type === 'touchmove' ? e.touches[0].clientY : e.clientY) - this.offsetY
  
        if (this.Left < 0) {
          this.Left = 0
        }
        if (this.Top < 0) {
          this.Top = 0
        }
        if (this.Left > window.innerWidth - this.self.offsetWidth) {
          this.Left = window.innerWidth - this.self.offsetWidth
        }
        if (this.Top > window.innerHeight - this.self.offsetHeight) {
          this.Top = window.innerHeight - this.self.offsetHeight
        }
        this.self.style.top = this.Top + "px"
        this.self.style.left = this.Left + "px"
      }
    }
}