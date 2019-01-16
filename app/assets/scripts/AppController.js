


import { DOMstrings, getInput } from "./views/UIController";
import AddItem from "./models/budgetController"
    
    let addItem = new AddItem;
class CtrlAddItem{
    constructor(){
        // Properties
        this.addBtn = document.querySelector(DOMstrings.inputButton);
       

        // Methods
        this.addBtn.addEventListener('click', this.addItem);
        this.addItem;
    }
        addItem(){
            console.log("hello");
            console.log(getInput.type.value);
            console.log(getInput.description.value);
            console.log(getInput.value.value);
        }

}

export default CtrlAddItem;