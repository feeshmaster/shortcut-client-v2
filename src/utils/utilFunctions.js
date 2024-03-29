//function to make elements draggable
import { settings } from './settings'
//todo: make it so the use of targetEl works as well
let bindEvent = function(element, event, handler) {
  element.addEventListener(event, handler)
}
let unbindEvent = function(element, event, handler) {
  element.removeEventListener(event, handler)
}

export default {
  bindEvent,
  unbindEvent,
}
//USELESS