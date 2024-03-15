//function to make elements draggable
import { settings } from './settings'
//todo: make it so the drag uses the offset of the targetEl as well, making it not seem as if it teleports and making it much smoother
export function transformDraggable(el, targetEl="self") {
  el.style.position = "absolute"
  targetEl = targetEl === "self" ? el : targetEl
  //add needed variables to keep track of the offset and stuff
  let isDrag = false, offsetX, offsetY;
  let mouseDownHandler = function(e) {
    isDrag = true;
    offsetX = e.type === 'touchstart' ? e.touches[0].clientX - el.getBoundingClientRect().left : e.clientX - el.getBoundingClientRect().left;
    offsetY = e.type === 'touchstart' ? e.touches[0].clientY - el.getBoundingClientRect().top : e.clientY - el.getBoundingClientRect().top;
  }
  let mouseMoveHandler = function(e) {
    if (isDrag) {
      e.preventDefault();
      targetEl.style.left = (e.type === 'touchmove' ? e.touches[0].clientX : e.clientX) - offsetX + 'px';
      targetEl.style.top = (e.type === 'touchmove' ? e.touches[0].clientY : e.clientY) - offsetY + 'px';
      localStorage.setItem("_utilsMenuPos_", JSON.stringify({
          top: targetEl.style.top,
          left: targetEl.style.left
      }));
  }
  }
  let mouseUpHandler = function(e) {
    isDrag = false;
  }
  el.addEventListener("mousedown", mouseDownHandler)
  el.addEventListener("touchstart", mouseDownHandler)
  el.addEventListener("mousemove", mouseMoveHandler)
  el.addEventListener("touchmove", mouseMoveHandler)
  el.addEventListener("mouseup", mouseUpHandler)
  el.addEventListener("touchend", mouseUpHandler)
}

export function toggleOpacityOnClick(e) {
  return 2
}
