//create button to show and unshow it
//load in and serve(use) all needed files to complete the menus and stuff

//imports
import { transformDraggable } from "./utils/actionFunctions.js";
import './utils/main.css'

let openMenuButton = document.createElement('div');
openMenuButton.id = '_openMenuBtn_';
let root = document.body || document

root.appendChild(openMenuButton)
transformDraggable(openMenuButton)
