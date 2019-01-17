
// All html values.
export const DOMstrings = {
    inputType:          '.add__type',
    inputDescription:   '.add__description',
    inputValue:         '.add__value',
    inputButton:        '.add__btn',
    incomeContainer:    '.income__list',
    expensesContainer:  '.expenses__list',
    budgetLabel:        '.budget__value',
    incomeLabel:        '.budget__income--value',
    expensesLabel:      '.budget__expenses--value',
    percentageLabel:    '.budget__expenses--percentage',
    container:          '.container',
    expensesPercLabel:  '.item__percentage',
    dateLabel:          '.budget__title--month'
};

export const getInput = {
    type:           document.querySelector(DOMstrings.inputType),
    description:    document.querySelector(DOMstrings.inputDescription),
    value:          document.querySelector(DOMstrings.inputValue)
};

class UIController{
    constructor(){
        // Properties

        // Methods
        this.addListItem;
        this.displayBudget;
        this.formatNumber;
        this.deleteListItem;
    }
    // add List item to income or expense
    addListItem(object, type){
        let html, newHtml, element;

        if(type === 'inc'){
            element = DOMstrings.incomeContainer;
    
    html = `<div class="item clearfix" id="inc-%id%">
                <div class="item__description">
                    %description%
                </div> 
                <div class="right clearfix">
                    <div class="item__value">
                        %value%
                    </div> 
                    <div class="item__delete"> 
                        <button class="item__delete--btn">
                            <i class="ion-ios-close-outline"></i>
                        </button>
                    </div>
                </div>
            </div>`;
        }else if (type === "exp"){
                    element = DOMstrings.expensesContainer;
    html =  `<div class="item clearfix" id="exp-%id%">
                    <div class="item__description">
                        %description%
                    </div>
                    <div class="right clearfix">
                        <div class="item__value">
                            %value%
                        </div>
                        <div class="item__percentage">
                            %21%
                        </div>
                        <div class="item__delete">
                            <button class="item__delete--btn">
                                <i class="ion-ios-close-outline"></i>
                            </button>
                        </div>
                    </div>
            </div>`;   
        }
        // Replace the placeholder text with data
        newHtml = html.replace('%id%', object.id);
        newHtml = newHtml.replace('%description%', object.description);
        newHtml = newHtml.replace("%value%", object.value, type);

         // Insert the HTML into the DOM
        document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    }
    // Display budget on screen
    displayBudget(obj){
        let type;
        if(obj.budget > 0){
            type = 'inc';
        }else{
            type = 'exp';
        };
        document.querySelector(DOMstrings.budgetLabel).textContent = this.formatNumber(obj.budget, type);
        document.querySelector(DOMstrings.incomeLabel).textContent = this.formatNumber(obj.totalInc, 'inc');
        document.querySelector(DOMstrings.expensesLabel).textContent = this.formatNumber(obj.totalExp, 'exp');
    }
    // Deletes selected list item.
    deleteListItem(selectorID){
        let el = document.getElementById(selectorID);
        el.parentNode.removeChild(el);
    }
    // Format numbers on screen.
    formatNumber(number, type){
        let numberSplit, integer, decimal;

        number = Math.abs(number);
        number = number.toFixed(2);

        numberSplit = number.split('.');
        integer = numberSplit[0];
        if(integer.length > 3){
            integer = int.substr(0, int.length - 3) + ',' 
            + int.substr(int.length - 3, 3);
        }
        decimal = numberSplit[1];
        return (type === 'exp' ? '-' : '+') + ' ' + integer + '.' + decimal;
    }
    
}

export default UIController;