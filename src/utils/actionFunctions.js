//function to make elements draggable
import { settings } from './settings'
//todo: make it so the use of targetEl works as well
export function transformDraggable(el, targetEl="self") {
  let bindEvent = function(element, event, handler) {
    element.addEventListener(event, handler)
  }
  let unbindEvent = function(element, event, handler) {
    element.removeEventListener(event, handler)
  }
  el.style.position = "absolute"
  targetEl = targetEl === "self" ? el : targetEl
  //add needed variables to keep track of the offset and stuff
  let isDrag = false, offsetX, offsetY;
  let dragStartHandler = function(e) {
    bindEvent(document, "pointermove", mouseMoveHandler)
    bindEvent(document, "touchmove", mouseMoveHandler)
    isDrag = true;
    offsetX = e.type === 'touchstart' ? e.touches[0].clientX - el.getBoundingClientRect().left : e.clientX - el.getBoundingClientRect().left;
    offsetY = e.type === 'touchstart' ? e.touches[0].clientY - el.getBoundingClientRect().top : e.clientY - el.getBoundingClientRect().top;
  }
  let mouseMoveHandler = function(e) {
    if (isDrag) {
      e.preventDefault();
      let Left = (e.type === 'touchmove' ? e.touches[0].clientX : e.clientX) - offsetX
      let Top = (e.type === 'touchmove' ? e.touches[0].clientY : e.clientY) - offsetY
      //if it goes past edges
      
      if (Left < 0) {
        Left = 0
      }
      if (Top < 0) {
        Top = 0
      }
      if (Left > window.innerWidth - targetEl.offsetWidth) {
        Left = window.innerWidth - targetEl.offsetWidth
      }
      if (Top > window.innerHeight - targetEl.offsetHeight) {
        Top = window.innerHeight - targetEl.offsetHeight
      }
      targetEl.style.top = Top + "px"
      targetEl.style.left = Left + "px"
  }
  }
  let mouseUpHandler = function(e) {
    unbindEvent(document, "pointermove", mouseMoveHandler)
    unbindEvent(document, "touchmove", mouseMoveHandler)
    isDrag = false;
    localStorage.setItem("_utilsMenuPos_", JSON.stringify({
        top: targetEl.style.top,
        left: targetEl.style.left
    }));
  }
  bindEvent(el, "mousedown", dragStartHandler)
  bindEvent(el, "touchstart", dragStartHandler)
  bindEvent(window, "mouseup", mouseUpHandler)
  bindEvent(window, "touchend", mouseUpHandler)
}

export function toggleOpacityOnClick(e) {
  return 2
}
