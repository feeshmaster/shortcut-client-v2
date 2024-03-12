//imports
import { destroy } from './destroy.js'
//todo: add css to the things later
let styleMap = {
    /*
    template
    "id": {
        style : "style",
        identifier: "__template__"
    }
    */
   "id": {
     style: `width: 50px; height: 50px; background-color: #000; color: #fff;
     text-align: center; line-height: 50px; position: absolute; border-radius: 10px;
     cursor: pointer; user-select: none; touch-action: none; transition: opacity 0.2s ease-in-out;
     opacity: 0.4; z-index: 13;`,
     identifier: "_openMenuBtn_"
   }
}

console.log('loading css...')
for (let style in styleMap) {
   try {
   if (style === "id") {
    style = styleMap[style]
    document.getElementById(style.identifier).style = style.style
    continue
   }
   style = styleMap[style]
   document.getElementsByClassName(style.identifier).array.forEach(element => {
    element.style = style.identifier
   });
   } catch(err) {
    console.error('cannot load styles')
    destroy()
    return
  }
}
console.log('loaded css.')