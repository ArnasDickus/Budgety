
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
}

class BudgetController{
    constructor(){
        // Properties
        this.data = data;

        // Methods

        this.addItemMethod;
        this.calculateTotal;
        this.calculateBudget;
    }
    // Adds item that is either income or expense.
    addItemMethod(type, description, value){
        let newItem, ID;

        // Create new id
        if(data.allItems[type].length > 0) {
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
        }else{
            ID = 0;
        }
        if(type === "exp"){
            newItem = new Expense(ID,description, value);
        }else if (type === "inc"){
            newItem = new Income(ID, description, value);
        }
        // Push it into our data structure.
        data.allItems[type].push(newItem);

        return newItem;
    }
    // Calculates entire budget (income - expenses)
    calculateBudget(){
        // Fetches income
        this.calculateTotal('exp');
        this.calculateTotal('inc');

        data.budget = data.totals.inc - data.totals.exp;

        // Return results for AppController
        return{
            budget:     data.budget,
            totalInc:   data.totals.inc,
            totalExp:   data.totals.exp,
        }
    }
    // Calculates either income or expenses.
    calculateTotal(type){
        let sum = 0;
        data.allItems[type].forEach(function(current){
            sum =+ sum + current.value;
        });
        data.totals[type] = sum;
    }
}

class Income {
    constructor(id, description, value){
        this.id          = id;
        this.description = description;
        this.value       = value;
    }
}

class Expense{
    constructor(id, description, value){
        this.id          = id;
        this.description = description;
        this.value       = value;

    }
}

export default BudgetController;