




class budgetController{
    constructor(){
        this.budgety;
    }


budgety(){
        // BUDGET CONTROLLER
        let budgetController = (function() {
           
            class Expense {
                constructor(id, description, value) {
                    this.id = id;
                    this.description = description;
                    this.value = value;
                    this.percentage = -1;
                }
            };

            Expense.prototype.calcPercentage = function(totalIncome){
                if(totalIncome > 0){
                    this.percentage = Math.round((this.value / totalIncome) * 100);
                }else{
                    this.percentage = -1;
                }
            };

            Expense.prototype.getPercentage = function(){
                return this.percentage;
            };

            class Income {
                constructor(id, description, value) {
                    this.id = id;
                    this.description = description;
                    this.value = value;
                };
            };
            let calculateTotal = function(type){
                let sum = 0;
                data.allItems[type].forEach(function(cur) {
                    sum = sum + cur.value;
                });
                data.totals[type] = sum;

            };

            let data = {
                allItems: {
                    exp: [],
                    inc: []
                },
                totals: {
                    exp: 0,
                    inc: 0
                },
                budget: 0,
                percentage: -1
            };

            return {
                addItem: function(type, des, val){
                   let newItem, ID;

                    // Create new Id
                    if(data.allItems[type].length > 0){
                        ID = data.allItems[type][data.allItems[type].length -1].id + 1;
                    }else{
                        ID = 0;
                    }
                   

                    // Recreate new item based on 'inc' or 'exp' type
                    if(type === 'exp'){
                        newItem = new Expense(ID, des, val);
                    }else if (type === "inc"){
                        newItem = new Income(ID,des,val);
                    }
                    // Push it into our data structure
                   data.allItems[type].push(newItem);

                //    Return the new element
                   return newItem;
                },

                deleteItem: function(type, id){
                    let ids, index;

                    ids = data.allItems[type].map(function(current){
                        return current.id;
                    });

                    index = ids.indexOf(id);

                    if (index !== -1){
                        data.allItems[type].splice(index, 1);
                    }
                   
                },

                calculateBudget: function(){
                    
                    // calculate total income and expense
                    calculateTotal('exp');
                    calculateTotal('inc');

                    // Calculate the budget: income - expenses
                    data.budget = data.totals.inc - data.totals.exp;

                    // Calculate the percentage of income that we spent

                    if (data.totals.inc > 0){
                    data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
                    }else{
                        data.percentage = -1;
                    }
                    

                },

                calculatePercentages: function(){
                    
                    data.allItems.exp.forEach(function(cur){
                        cur.calcPercentage(data.totals.inc);
                    });
                },

                getPercentage: function(){

                    let allPerc = data.allItems.exp.map(function(cur){
                        return cur.getPercentage();
                    });
                    return allPerc;

                },

                getBudget: function(){
                    return{
                        budget: data.budget,
                        totalInc: data.totals.inc,
                        totalExp: data.totals.exp,
                        percentage: data.percentage
                    };
                },
                testing: function(){
                    console.log(data);
                }
            };
        

        })();
    }
}


export default budgetController;