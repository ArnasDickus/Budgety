


class AddItem{
    constructor(){
        // Properties

        // Methods
        this.events;
    }
    events(){
        console.log("Budget Controller");
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
        this.percentage  = percentage;
    }
}

export default AddItem;