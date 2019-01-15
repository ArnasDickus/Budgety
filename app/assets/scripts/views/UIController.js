
            /*
            1) Get inputs from description and value and export it to App Controller. 
            */

    export const DOMStrings = {
                addType:            '.add__type',
                addDescription:     '.add__description',
                addValue:           '.add__value',
                addBtn:             '.add__btn',
                incomeContainer:    '.income__list',
                expensesContainer:  '.expenses__list',
                budgetLabel:        '.budget__value',
                incomeLabel:        '.budget__income--value',
                expensesLabel:      '.budget__expenses--value',
                percentageLabel:    '.budget__expenses--percentage',
                container:          '.container',
                expensesPercLabel:  '.item__percentage',
                dateLabel:          '.budget__title--month'
    }

   export const getInput = {
       type:        document.querySelector(DOMStrings.addType),
       description: document.querySelector(DOMStrings.addDescription),
       value:       document.querySelector(DOMStrings.addValue),
   };



