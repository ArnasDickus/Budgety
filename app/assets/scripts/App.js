// jquery is used for bootstrap
import $ from "jquery";
import 'bootstrap';


import CtrlAddItem from "./AppController";

const ctrlAddItem = new CtrlAddItem;

/*
    What I want to happen?
1) If I click button submit. console.log("hello"); COMPLETED
    APP CONTROLLLER:
        1) Create a class ctrlAddItem.
        2) In that class receive from UI Controller.

    BUDGET CONTROLLER:
        1) Nothing.
    UICONTROLLER:
        1) Export UI classes to App Controller.
---------------------------------------------------------------

2) After I click the button I get description and value to console.log COMPLETED
    UICONTROLLER:
    1) 3 selectors add__type, add__description, add__value; 
    they are always together. Put them into an object.
    and export it into App.js

    APP CONTROLLLER:
    2) Console.log() Object.
    BUDGET CONTROLLER:

----------------------------------------------------------------------

3) I want to create data and classes in Budget controller. COMPLETED

    BUDGET CONTROLLER:
    1) Create getInput data with addItem.
    2) Create 2 classes.

    APP CONTROLLLER:
    1) Connect it with app controller

-------------------------------------------------------------------

*/








