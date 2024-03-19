//imports
import ContainerMenu from './Gui/ContainerMenu/Menu'
import EntryBtn from './Gui/EntryButton/EntryButton'
import MenuInits from './Gui/Menu_inits'

export default  {
    init() {
       this.root = document.body || document
       //initiate each part in order
       this.init_ContainerMenu()
       this.init_Menus()
       this.init_EntryButton()
    },
    init_ContainerMenu() {
       ContainerMenu.init(this.root)
       console.log(1)
    },
    init_Menus() {
       for (Menu in MenuInits) {
          ContainerMenu.add(Menu.init())
          console.log(1)
       }
    },
    init_EntryButton() {
       EntryBtn.init(root)
       console.log(1)
    },
    destroy() {

    }

}