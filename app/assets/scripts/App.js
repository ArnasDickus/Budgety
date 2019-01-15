// jquery is used for bootstrap
import $ from "jquery";
import 'bootstrap';


import AppController from "./AppController";


let appController = new AppController;


/* My Strategy
If there is nothing to count use object.
If there is something to count use classes.


I have 3 controllers
App Controller - Main controller
UI Controller - User interface
Budget Controller - all calculations

1) I need to add event listener in app controller on add__btn. DONE
2) I need to get input from UI Controller. DONE
    add__type
    add__description
    add__value
I think this should be an object, that I return to App Controller.

3) I need to calculate with addItem. 
    Create a class AddItem - for something...
    Create a class Expense - for calculating expenses. DONE
    Create a class Income  - for calculating income. DONE
*/





