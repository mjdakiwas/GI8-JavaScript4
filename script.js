// budget functionality
class Budget {
    constructor(budget = 0, transactionList = [], income = 0, expense = 0, incomeList = [], expenseList = []) {
        this.budget = budget;
        this.transactionList = transactionList;
        this.income = income;
        this.expense = expense;
        this.incomeList = incomeList;
        this.expenseList = expenseList;
    }

    addTransaction(transaction) {
        // this method will add the transaction into the array
        // trigger everytime "add new transaction" form is submitted
        this.transactionList.unshift(transaction);
    }

    getIncomeTransactions() {
        for (const transaction of transactionList) {
            if (transaction['transaction-type'] === 'income') {
                this.incomeList.unshift(transaction);
            }
        }
        return this.incomeList;
    }

    getExpenseTransactions() {
        for (const transaction of transactionList) {
            if (transaction['transaction-type'] === 'expense') {
                this.expenseList.unshift(transaction);
            }
        }
        return this.expenseList;
    }

    displayTransactions(displayContainer, transactionList) {
        // looping through transaction list to display
        displayContainer.innerText = '';
        transactionList.forEach(transaction => {
            const transactionContainer = document.createElement('div');
            const transactionDescription = document.createElement('p');
            const transactionAmount = document.createElement('p');
            const transactionDivider = document.createElement('hr');

            transactionContainer.classList.add('transaction-container');
            transactionDescription.classList.add('transaction-description');
            transactionAmount.classList.add('transaction-amount');
            transactionDivider.classList.add('transaction-divider');

            transactionDescription.innerText = transaction.description;
            transactionAmount.innerText = `$${transaction.amount}`;

            transactionContainer.appendChild(transactionDescription);
            transactionContainer.appendChild(transactionAmount);
            displayContainer.appendChild(transactionContainer);
            displayContainer.appendChild(transactionDivider);
        });
    }

    getTotalBudget(transaction) {
        // this method will return the total budget
        // add income into total budget
        // subtract expense from total budget
        const transactionType = Object.values(transaction)[0];
        const amount = Number(Object.values(transaction)[2]);
        if (transactionType === 'income') {
            this.budget += amount;
            this.income += amount;
        } else if (transactionType === 'expense') {
            this.budget -= amount;
            this.expense += amount;
        }
        return this.budget;
    }

    getIncome() {
        // used to display total income
        return this.income;
    }

    getExpense() {
        // used to display total expenses
        return this.expense;
    }
}

const addTransactionBtn = document.getElementById('expense-add');
const addTransactionForm = document.getElementById('new-transaction__container');
const cancelTransactionBtn = document.getElementById('close-new-transaction');
const formOveray = document.getElementById('form-overlay');
const balanceDisplay = document.getElementById('balance-display');
const incomeDisplay = document.getElementById('income-display');
const expenseDisplay = document.getElementById('expense-display');
const transactionsDisplay = document.getElementById('transaction-display');

// create budget object
// create variables to store and dynamically use budget properties
let balance = 0, transactionList = [], income = 0, expense = 0, incomeList = [], expenseList = [];
const budgetTracker = new Budget(balance, transactionList, income, expense, incomeList, expenseList);
const transactionTypeInput = document.getElementById('transaction-type');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const invalidTransactionType = document.getElementById('transaction-type__invalid');
const invalidDescription = document.getElementById('description__invalid');
const invalidAmount = document.getElementById('amount__invalid');
const mobileView = window.matchMedia('(max-width:  601px)');

// reset form display
function emptyForm() {
    transactionTypeInput.classList.remove('invalid');
    descriptionInput.classList.remove('invalid');
    amountInput.classList.remove('invalid');
    invalidTransactionType.style.display = 'none';
    invalidDescription.style.display = 'none';
    invalidAmount.style.display = 'none';

    transactionTypeInput.value = '';
    descriptionInput.value = '';
    amountInput.value = '';
}

transactionTypeInput.addEventListener('change', () => {
    transactionTypeInput.classList.remove('invalid');
    invalidTransactionType.style.display = 'none';
})

descriptionInput.addEventListener('change', () => {
    descriptionInput.classList.remove('invalid');
    invalidDescription.style.display = 'none';
})

amountInput.addEventListener('change', () => {
    amountInput.classList.remove('invalid');
    invalidAmount.style.display = 'none';
})

addTransactionForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;
    // form validation
    if (transactionTypeInput.value === '') {
        transactionTypeInput.classList.add('invalid');
        invalidTransactionType.innerText = 'Please select a transaction type.'
        invalidTransactionType.style.display = 'block';
        isValid = false;
    }

    if (descriptionInput.value === '') {
        descriptionInput.classList.add('invalid');
        invalidDescription.innerText = "Please enter the transaction's description."
        invalidDescription.style.display = 'block';
        isValid = false;
    }

    if (amountInput.value === '') {
        amountInput.classList.add('invalid');
        invalidAmount.innerText = "Please enter the transaction's amount."
        invalidAmount.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        // every form submission => take input values as an object
        const formData = new FormData(addTransactionForm); // get form's input fields and their values as key/value pairs
        const transaction = Object.fromEntries(formData.entries()); // convert key/value pairs into an object
        budgetTracker.addTransaction(transaction); // add form data into transaction array (will use to display into transactions list)

        budgetTracker.displayTransactions(transactionsDisplay, transactionList);

        // display balance
        // display income
        // display expense
        balance = budgetTracker.getTotalBudget(transaction);
        income = budgetTracker.getIncome();
        expense = budgetTracker.getExpense();
        balanceDisplay.innerText = `$${balance}`;
        incomeDisplay.innerText = `$${income}`;
        expenseDisplay.innerText = `$${expense}`;

        formOveray.style.display = 'none';
        mobileView.addEventListener('change', windowResize(mobileView));

        event.target.reset();
    }
})

// ui js
// prevent form from disappearing on different screen size
function windowResize(width) {
    if (width.matches) {
        addTransactionForm.style.display = 'none';
    }
}

windowResize(mobileView);
mobileView.addEventListener('change', windowResize(mobileView));

addTransactionBtn.addEventListener('click', () => {
    selectTransactionHeader.style.display = 'none';
    addTransactionForm.style.display = 'flex';
    formOveray.style.display = 'block';
    emptyForm();
})

cancelTransactionBtn.addEventListener('click', () => {
    addTransactionForm.style.display = 'none';
    formOveray.style.display = 'none';
    emptyForm();
})

const overviewSlidesContainer = document.getElementById('overview-display__container');
const overviewSlides = document.getElementsByClassName('overview-display__section');
const indicatorsContainer = document.getElementById('indicators');
const indicators = document.getElementsByClassName('indicator');
const nextSlideBtn = document.getElementById('overview-right');
const prevSlideBtn = document.getElementById('overview-left')
let currentIndex = 1;
showSlide(currentIndex);

function showSlide(index) {
    if (index > overviewSlides.length) { currentIndex = 1 } // if index is more than length of slides, go to the first slide
    if (index < 1) { currentIndex = overviewSlides.length } // if index is less than 0 (negative), go to the last slide
    for (let i = 0; i < overviewSlides.length; i++) {
        overviewSlides[i].style.display = 'none';
    }
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove('active');
    }
    overviewSlides[currentIndex - 1].style.display = 'flex';
    indicators[currentIndex - 1].classList.add('active');
}

function nextSlide() {
    showSlide(currentIndex += 1);
}

function prevSlide() {
    showSlide(currentIndex -= 1);
}

nextSlideBtn.addEventListener('click', nextSlide);
prevSlideBtn.addEventListener('click', prevSlide);

for (let i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener('click', function () {
        for (let i = 0; i < overviewSlides.length; i++) {
            overviewSlides[i].style.display = 'none';
        }
        for (let i = 0; i < indicators.length; i++) {
            indicators[i].classList.remove('active');
        }
        overviewSlides[i].style.display = 'flex';
        indicators[i].classList.add('active');
    });
}

// transaction display
const transactionHeaderDisplay = document.getElementById('section-title');
const currentTransactionHeader = document.getElementById('current-title');
const selectTransactionHeader = document.getElementById('transaction-view-dropdown');
const transactionHeader = document.getElementById('transactions');
const incomeHeader = document.getElementById('income');
const expenseHeader = document.getElementById('expense');
const incomeTransactionsDisplay = document.getElementById('transaction-display__income');
const expenseTransactionsDisplay = document.getElementById('transaction-display__expense');

transactionHeaderDisplay.addEventListener('click', () => {
    if (window.getComputedStyle(selectTransactionHeader).getPropertyValue('display') === 'none') {
        selectTransactionHeader.style.display = 'flex';
    } else if (window.getComputedStyle(selectTransactionHeader).getPropertyValue('display') === 'flex') {
        selectTransactionHeader.style.display = 'none';
    }

    if (currentTransactionHeader.textContent == transactionHeader.textContent) {
        transactionHeader.style.display = 'none';
        incomeHeader.style.display = 'block';
        expenseHeader.style.display = 'block';
    } else if (currentTransactionHeader.textContent == incomeHeader.textContent) {
        transactionHeader.style.display = 'block';
        incomeHeader.style.display = 'none';
        expenseHeader.style.display = 'block';
    } else if (currentTransactionHeader.textContent == expenseHeader.textContent) {
        transactionHeader.style.display = 'block';
        incomeHeader.style.display = 'block';
        expenseHeader.style.display = 'none';
    }
})

transactionHeader.addEventListener('click', () => {
    currentTransactionHeader.innerText = transactionHeader.innerText;
    selectTransactionHeader.style.display = 'none';
    transactionsDisplay.style.display = 'flex';
    incomeTransactionsDisplay.style.display = 'none';
    expenseTransactionsDisplay.style.display = 'none';
    if (transactionList.length !== 0) {
        budgetTracker.displayTransactions(transactionsDisplay, transactionList);
    }
})

incomeHeader.addEventListener('click', () => {
    currentTransactionHeader.innerText = incomeHeader.innerText;
    selectTransactionHeader.style.display = 'none';
    transactionsDisplay.style.display = 'none';
    incomeTransactionsDisplay.style.display = 'flex';
    expenseTransactionsDisplay.style.display = 'none';
    budgetTracker.getIncomeTransactions();
    if (incomeList.length !== 0) {
        budgetTracker.displayTransactions(incomeTransactionsDisplay, incomeList);
    }
})

expenseHeader.addEventListener('click', () => {
    currentTransactionHeader.innerText = expenseHeader.innerText;
    selectTransactionHeader.style.display = 'none';
    transactionsDisplay.style.display = 'none';
    incomeTransactionsDisplay.style.display = 'none';
    expenseTransactionsDisplay.style.display = 'flex';
    budgetTracker.getExpenseTransactions();
    if (expenseList.length !== 0) {
        budgetTracker.displayTransactions(expenseTransactionsDisplay, expenseList);
    }
})