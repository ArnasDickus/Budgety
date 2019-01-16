

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