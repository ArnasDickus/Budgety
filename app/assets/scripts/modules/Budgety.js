

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
            
        })();

        // GLOBAL APP CONTROLLER
        let controller = (function(budgetCtrl, UICtrl){

        let ctrlAddItem = function(){
            //  TO DO List
            // 1.Get the filed input data
            // 2. Add the item to the budget controlller
            // 3. Add the item to the UI.
            // 4. Calculate the budget.
            // 5. Display The budget on the UI
            console.log("hello");
        } 

           document.querySelector(".add__btn").addEventListener('click', ctrlAddItem);
               
            
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