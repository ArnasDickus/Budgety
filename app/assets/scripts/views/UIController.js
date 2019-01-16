

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
    }
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
}

export default UIController;