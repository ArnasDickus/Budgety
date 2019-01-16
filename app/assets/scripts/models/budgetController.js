


class BudgetController{
    constructor(){
        // Properties
        this.data = data;

        // Methods

        this.addItemMethod;
    }

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
}


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