
import { DOMStrings, getInput } from "./views/UIController";


    class ctrlAddItem{
        constructor(){
        // Properties
        this.addBtn = document.querySelector(DOMStrings.addBtn);
        
        
        // Methods
        this.events();
        this.addBtn.addEventListener('click', event => this.AddItem(event));



        }
        events(){
     
        }
        AddItem(){
            console.log(getInput.type.value)
            console.log(getInput.description.value)
            console.log(getInput.value.value);
            console.log("click");
            console.log(getInput);
        }
    }

export default ctrlAddItem;