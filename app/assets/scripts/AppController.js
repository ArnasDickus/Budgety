


import { DOMstrings, getInput } from "./views/UIController";
import BudgetController from "./models/budgetController"
import UIController from "./views/UIController";

    let uiController = new UIController;
    let budgetController = new BudgetController;

class CtrlAddItem{
    constructor(){
        // Properties
        this.addBtn     = document.querySelector(DOMstrings.inputButton);
        this.deleteBtn  = document.querySelector(DOMstrings.container);

       
        // Methods
        this.addBtn.addEventListener('click', () => this.addItem());
        this.deleteBtn.addEventListener('click', (event) => this.deleteItem(event));
        this.addItem;
        this.updateBudget;
        this.loadData;
        this.init();
    }
        // On startup.
        init(){
        uiController.displayMonth();
        this.loadData();
        }
        // Click a addBtn button.
        addItem(){
            let input, newItem;
            
            
            // 1) Get the filed input data    
            input = getInput;

            if(input.description.value !== "" && !isNaN(input.value.value) && input.value.value > 0){
                // 2) Add the item to the budget controller
                newItem = budgetController.addItemMethod(input.type.value, input.description.value, input.value.value);
                console.log(newItem);

                // 3) Add the item to the UI
                uiController.addListItem(newItem, input.type.value);
                input.description.value = "";
                input.value.value = "";

                // Update budget screen
                this.updateBudget();

                // Store data
                budgetController.storeData();
            }
        }
        // Update budget changes on the top.
        updateBudget(){
            let budget;
            // Calculate budget
           budget = budgetController.calculateBudget();
            // Display budget on screen
            uiController.displayBudget(budget);

        }
        // Deletes selected list item
        deleteItem(event){
            let itemID, splitID, type, ID;

            // Targeting delete__item node 
           itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
            if(itemID){
                splitID = itemID.split('-');
                type = splitID[0];
                ID = parseInt (splitID[1]);

                // Delete item from the data structure.
                budgetController.deleteItem(type, ID);

                // Delete item from the UI
                uiController.deleteListItem(itemID);

                // Update Budget
                this.updateBudget();

                // Store data
                budgetController.storeData();
            }
        }
        loadData(){
            let storedData, newIncItem, newExpItem, budget;

            // Load data from local storage
            storedData = budgetController.getStoredData();

            if(storedData){
                // Insert the data into the data structure
                budgetController.updateData(storedData);
                
                // Create the Income Object 
                storedData.allItems.inc.forEach(function(current){
                    newIncItem = budgetController.addItemMethod('inc', current.description, current.value)
                    uiController.addListItem(newIncItem, 'inc');
                });
                // Create the Expense Object
                storedData.allItems.exp.forEach(function(current){
                    newExpItem = budgetController.addItemMethod('exp', current.description, current.value)
                    uiController.addListItem(newExpItem, 'exp');
                });
                // Display the Budget
                this.updateBudget();
            }
        }
}

export default CtrlAddItem;