

class budgety{
    constructor(){
        this.budgety();
    }
    budgety(){
        // BUDGET CONTROLLER
        let budgetController = (function() {
           
        //    Some Code

        })();
        // UI CONTROLLER
        let UIController = (function(){
            // Creating data structure if variables name changes.
            let DOMstrings = {
                inputType:        '.add__type',
                inputDescription: '.add__description',
                inputValue:       '.add__value',
                inputButton:      '.add__btn'
            }

            return {
                getInput: function() {

                    return {
                    type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                    description: document.querySelector(DOMstrings.inputDescription).value,
                    value: document.querySelector(DOMstrings.inputValue).value
                    };
                },
                getDOMstrings: function(){
                    return DOMstrings;
                }
            };
            
        })();

        // GLOBAL APP CONTROLLER
        let controller = (function(budgetCtrl, UICtrl){

        let DOM = UICtrl.getDOMstrings();
        
        let ctrlAddItem = function(){
            //  TO DO List
            // 1.Get the filed input data
            let input = UICtrl.getInput();
            console.log(input);

            // 2. Add the item to the budget controlller
            // 3. Add the item to the UI.
            // 4. Calculate the budget.
            // 5. Display The budget on the UI

        } 

           document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
               
            
           document.addEventListener('keypress', function(event){
            //    Event.which for older browsers support.
               if(event.keyCode === 13 || event.which === 13){
                   ctrlAddItem();
               }
           });

        })(budgetController, UIController);

    }
}

export default budgety;