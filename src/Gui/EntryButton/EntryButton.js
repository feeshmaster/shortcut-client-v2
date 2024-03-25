import './EntryButton.css'
import Settings from '../../utils/settings'
import utilFunctions from '../../utils/utilFunctions'
export default {
    init(root) {
        this.root = root
        
        this.buildSelf()
    },
    buildSelf() {
      let self = document.createElement("div")
      self.id = '__client-button__'
      self.className = '__client-button__'
      self.innerHTML = `
        <span><i class="fa-solid fa-gamepad-modern fa-fw" style='width: 100%; height:100%; font-size:35px;'></i></span>
      `
      this.root.appendChild(self)
      utilFunctions.addDrag(self)
    },
    destroy() {
      
    },
    checkConfigs() {

    }
}