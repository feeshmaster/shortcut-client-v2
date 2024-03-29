//imports
import ContainerMenu from './Gui/ContainerMenu/Menu'
import EntryBtn from './Gui/EntryButton/EntryButton'
import MenuInits from './Gui/Menu_inits'
import './utils/font-awesome/css/all.min.css'

export default  {
    init() {
       this.root = document.body || document
       //initiate each part in order
       this.init_ContainerMenu()
       this.init_Menus()
       this.init_EntryButton()
    },
    init_ContainerMenu() {
       this.ContainerMenu = new ContainerMenu()
       this.ContainerMenu.init(this.root)
    },
    init_Menus() {
       for (let Menu in MenuInits) {
          Menu = MenuInits[Menu]
          Menu.init()
          this.ContainerMenu.add(Menu.HTML())
       }
    },
    init_EntryButton() {
       new EntryBtn().init(this.root, ()=>{if (this.ContainerMenu.showing) {this.ContainerMenu.hide()} else {this.ContainerMenu.show()}})
    },
    destroy() {

    }

}