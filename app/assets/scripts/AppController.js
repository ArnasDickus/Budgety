


import { DOMstrings, getInput } from "./views/UIController";
import BudgetController from "./models/budgetController"
import UIController from "./views/UIController";

    let uiController = new UIController;
    let budgetController = new BudgetController;

class CtrlAddItem{
    constructor(){
        // Properties
        this.addBtn = document.querySelector(DOMstrings.inputButton);
       

        // Methods
        this.addBtn.addEventListener('click', this.addItem);
        this.addItem;
    }
        // Adds item to INCOME or EXPENSES
        addItem(){
            let input, newItem;
            
  
            // 1) Get the filed input data    
            input = getInput;

            if(input.description.value !== "" && !isNaN(input.value.value) && input.value.value > 0){
                // 2. Add the item to the budget controller
                newItem = budgetController.addItemMethod(input.type.value, input.description.value, input.value.value);

                // Add the item to the UI
                uiController.addListItem(newItem, input.type.value);

                // Clear fields
                input.description.value = "";
                input.value.value = "";


            }
        }

}

export default CtrlAddItem;