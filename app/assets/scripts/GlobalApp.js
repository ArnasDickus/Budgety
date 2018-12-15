

import budgetController from "./models/budgetController";
import UIController from "./views/UIController";

let controller = (function(budgetCtrl, UICtrl){

        let setupEventListeners = function(){
            let DOM = UICtrl.getDOMstrings();

            document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

            document.addEventListener('keypress', function(event){
            //    Event.which for older browsers support.
               if(event.keyCode === 13 || event.which === 13){
                   ctrlAddItem();
               }
           });

           document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

           document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType );
        };


        let updateBudget = function(){

            // 1. Calculate the budget.
            budgetCtrl.calculateBudget();

            // 2. Return the budget
            let budget = budgetCtrl.getBudget();

            // 3. Display The budget on the UI
            UICtrl.displayBudget(budget);
        };

        let updatePercentages = function() {

            // 1. Calculate percentages.
            budgetCtrl.calculatePercentages();
            // 2. Read percentages from the budget controller.
            let percentages = budgetCtrl.getPercentage();
            // 3. Update the UI with the new percentages.
            UICtrl.displayPercentages(percentages);
        };
        
        let ctrlAddItem = function(){
            let input, newItem;
            //  TO DO List
            // 1.Get the filed input data
            input = UICtrl.getInput();

            if(input.description !== "" && !isNaN(input.value) && input.value > 0){
            // 2. Add the item to the budget controlller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Add the item to the UI.
            UICtrl.addListItem(newItem, input.type);

            // 4. Clear fields
            UICtrl.clearFields();

            // 5. Calculate and update Budget
            updateBudget();

            // 6. Calculate and update percentages
            updatePercentages();
            };
        }; 
        let ctrlDeleteItem = function(event){
            let itemID, splitID, type, ID;

            itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

            if(itemID){

                // inc-1
                splitID = itemID.split('-');
                type = splitID[0];
                ID = parseInt(splitID[1]);

                // 1. delete the item from the data structure.
                budgetController.deleteItem(type, ID);
                // 2. Delete the item from UI.
                UICtrl.deleteListItem(itemID);

                // 3. Update and show the new budget.
                updateBudget();

                // 4. Calculate and update percentages
                updatePercentages();
            }
        };

        return {
            init: function(){
                UICtrl.displayMonth();
                UICtrl.displayBudget({
                    budget:     0,
                    totalInc:   0,
                    totalExp:   0,
                    percentage: -1
                });
                setupEventListeners();
            }
        };

        })(budgetController, UIController);

    controller.init();

export default controller;