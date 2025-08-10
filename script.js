// // budget functionality
// class Budget {
//     constructor(budget, transactionList = [], incomeList = [], expenseList = []) {
//         this.budget = budget;
//         this.transactionList = transactionList;
//         this.incomeList = incomeList;
//         this.expenseList = expenseList;
//     }

//     addTransaction(transaction) {
//         // this method will add the transaction into the array
//         // trigger everytime "add new transaction" form is submitted
//         this.transactionList.unshift(transaction);
//     }

//     getTransactions() {
//         return this.transactionList;
//     }

//     // displayTransactions() {
//     //     for (let i; i < this.transactionList.length; i++) {
//     //         const transactionContainer = document.createElement('div');
//     //         const transactionDescription = document.createElement('p');
//     //         const transactionAmount = document.getElementById('p');

//     //         transactionDescription.innerText = this.transactionList[i]['description'];
//     //         transactionAmount.innerText = this.transactionList[i]['amount'];

//     //         transactionContainer.appendChild(transactionDescription);
//     //         transactionContainer.appendChild(transactionAmount);
//     //         document.body.appendChild(transactionContainer);
//     //     }
//     // }

//     // based on transaction type: budget += income, budget -= expense => save budget (will use to display)
//     // save income: income += amount (will use to display)
//     // save expense: expense += amount (will use to display)
//     // getTotalBudget() {
//     //     return this.budget;
//     // }
//     // getTotalBudget(transaction) {
//     //     // this method will return the total budget
//     //     // add income into total budget
//     //     // subtract expense from total budget
//     //     const transactionType = Object.values(transaction)[0];
//     //     console.log(transactionType);
//     //     const amount = Number(Object.values(transaction)[2]);
//     //     if (transactionType === 'income') {
//     //         console.log(`${transactionType} is an income`);
//     //         console.log(`Current Balance: ${this.budget} + Adding ${amount}`);
//     //         console.log(`Current Income: ${this.income} + Adding ${amount}`);
//     //         this.budget += amount;
//     //         this.income += amount;
//     //         console.log(`Updated Budget: ${this.budget}; Updated Income: ${this.income}`);
//     //     } else if (transactionType === 'expense') {
//     //         console.log(`${transactionType} is an expense`);
//     //         console.log(`Current Balance: ${this.budget} + Subtracting ${amount}`);
//     //         console.log(`Current Expense: ${this.expense} + Adding ${amount}`);
//     //         this.budget -= amount;
//     //         this.expense += amount;
//     //         console.log(`Updated Budget: ${this.budget}; Updated Expense: ${this.expense}`);
//     //     }
//     //     return this.budget;
//     // }

//     // getIncome() {
//     //     return this.income;
//     // }

//     // getExpense() {
//     //     return this.expense;
//     // }
// }

// class Transaction extends Budget {
//     constructor(budget, income, expense, transactionType, description, amount) {
//         super(budget, income, expense);
//         this.transactionType = transactionType;
//         this.description = description;
//         this.amount = amount;
//     }

//     getTotalBudget() {
//         if (this.transactionType === 'income') {
//             console.log(`${this.transactionType} is an income`);
//             console.log(`Current Balance: ${this.budget} + Adding ${this.amount}`);
//             console.log(`Current Income: ${this.income} + Adding ${this.amount}`);
//             this.budget += this.amount;
//             this.income += this.amount;
//             console.log(`Updated Budget: ${this.budget}; Updated Income: ${this.income}`);
//         } else if (this.transactionType === 'expense') {
//             console.log(`${this.transactionType} is an expense`);
//             console.log(`Current Balance: ${this.budget} + Subtracting ${this.amount}`);
//             console.log(`Current Expense: ${this.expense} + Adding ${this.amount}`);
//             this.budget -= this.amount;
//             this.expense += this.amount;
//             console.log(`Updated Budget: ${this.budget}; Updated Expense: ${this.expense}`);
//         }
//         return this.budget;
//     }

//     getIncome() {
//         return this.income;
//     }

//     getExpense() {
//         return this.expense;
//     }

//     getTransactionType() {
//         return this.transactionType;
//     }

//     getDescription() {
//         return this.description;
//     }

//     getAmount() {
//         return this.amount;
//     }
// }

// // on page load, create budget object
// const addTransactionBtn = document.getElementById('expense-add');
// const addTransactionForm = document.getElementById('new-transaction__container');
// const cancelTransactionBtn = document.getElementById('close-new-transaction');
// const formOveray = document.getElementById('form-overlay');
// const balanceDisplay = document.getElementById('balance-display');
// const transactionsDisplay = document.getElementById('transaction-display');

// let budgetTracker;
// // let transactionList;
// let transaction; // object of form submission
// let balance = 0, transactionList = [], income = 0, expense = 0;
// budgetTracker = new Budget(balance, transactionList, income, expense, [], []);

// addTransactionForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const transactionType = document.getElementById('transaction-type').value;
//     const transactionDescription = document.getElementById('description').value;
//     const transactionAmount = Number(document.getElementById('amount').value);

//     const transaction = new Transaction(balance, income, expense, transactionType, transactionDescription, transactionAmount);
//     console.log(transaction);
//     budgetTracker.addTransaction(transaction); // add form data into transaction array (will use to display into transactions list)
//     addTransactionForm.style.display = 'none';

//     // display balance
//     // display income
//     // display expense
//     balance = budgetTracker.getTotalBudget();
//     income = budgetTracker.getIncome();
//     expense = budgetTracker.getExpense();
//     console.log(`Current Balance: ${balance}`);
//     console.log(`Current Income: ${income}`);
//     console.log(`Current Expense: ${expense}`);
//     balanceDisplay.innerText = balance;
//     formOveray.style.display = 'none';
// })

// // form validation
// // every form submission => take input values as an object
// // addTransactionForm.addEventListener('submit', (event) => {
// //     event.preventDefault();
// //     const formData = new FormData(addTransactionForm); // get form's input fields and their values as key/value pairs
// //     transaction = Object.fromEntries(formData.entries()); // convert key/value pairs into an object
// //     // console.log(transaction);
// //     budgetTracker.addTransaction(transaction); // add form data into transaction array (will use to display into transactions list)
// //     addTransactionForm.style.display = 'none';

// //     // display balance
// //     // display income
// //     // display expense
// //     balance = budgetTracker.getTotalBudget(transaction);
// //     income = budgetTracker.getIncome();
// //     expense = budgetTracker.getExpense();
// //     console.log(`Current Balance: ${balance}`);
// //     console.log(`Current Income: ${income}`);
// //     console.log(`Current Expense: ${expense}`);
// //     balanceDisplay.innerText = balance;
// //     formOveray.style.display = 'none';
// // })

// // display list of transactions
// // const displayingTransactions = budgetTracker.displayTransactions();
// // console.log(displayingTransactions);
// // transactionList = budgetTracker.getTransactions();
// // console.log(transactionList);
// // for (let i; i < transactionList.length; i++) {
// //     const transactionContainer = document.createElement('div');
// //     const transactionDescription = document.createElement('p');
// //     const transactionAmount = document.getElementById('p');

// //     transactionDescription.innerText = Object.values(transactionList[i][1]);
// //     transactionAmount.innerText = Object.values(transactionList[i][2]);

// //     transactionContainer.appendChild(transactionDescription);
// //     transactionContainer.appendChild(transactionAmount);
// //     document.body.appendChild(transactionContainer);
// // }

// // mobile ui js
// addTransactionBtn.addEventListener('click', () => {
//     addTransactionForm.style.display = 'flex';
//     formOveray.style.display = 'block';
// })

// cancelTransactionBtn.addEventListener('click', () => {
//     addTransactionForm.style.display = 'none';
//     formOveray.style.display = 'none';
// })

// // desktop ui js





// // budget class
// class Budget {
//     constructor(budget = 0, income = 0, expense = 0) {
//         this.budget = budget;
//         this.income = income;
//         this.expense = expense;
//     }

//     getBudget() {
//         return this.budget;
//     }

//     getIncome() {
//         return this.income;
//     }

//     getExpense() {
//         return this.expense;
//     }
// }

// class Transaction extends Budget {
//     constructor(transactionType, description, amount) {
//         super();
//         this.transactionType = transactionType;
//         this.description = description;
//         this.amount = amount;
//     }

//     // calculate total budget => budget + income or budget - expense (based on user input)
//     calculateTotalBudget() {
//         if (this.transactionType === 'income') {
//             return this.getBudget() + this.amount;
//         } else if (this.transactionType === 'expense') {
//             return this.getBudget() - this.amount;
//         }
//     }

//     calculateIncome() {
//         if (this.transactionType === 'income') {
//             return this.getIncome() + this.amount;
//         }
//         return;
//     }

//     calculateExpense() {
//         if (this.transactionType === 'expense') {
//             return this.getExpense() + this.amount;
//         }
//         return;
//     }
// }

// const addTransactionBtn = document.getElementById('expense-add');
// const addTransactionForm = document.getElementById('new-transaction__container');
// const cancelTransactionBtn = document.getElementById('close-new-transaction');
// const formOveray = document.getElementById('form-overlay');
// const balanceDisplay = document.getElementById('balance-display');
// const transactionsDisplay = document.getElementById('transaction-display');

// let totalBudget, totalIncome, totalExpense;
// const budgetTracker = new Budget(totalBudget, totalIncome, totalExpense);
// console.log(budgetTracker);
// let transactionList = [];
// // let currentBudget = budgetTracker.getBudget();
// // let currentIncome = budgetTracker.getIncome();
// // let currentExpense = budgetTracker.getExpense();
// addTransactionForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const transactionType = document.getElementById('transaction-type').value;
//     const transactionDescription = document.getElementById('description').value;
//     const transactionAmount = Number(document.getElementById('amount').value);
//     const transaction = new Transaction(transactionType, transactionDescription, transactionAmount);
//     console.log(transaction);
//     transactionList.unshift(transaction);
//     console.log(transactionList);

//     totalBudget = transaction.calculateTotalBudget();
//     totalIncome = transaction.calculateIncome();
//     totalExpense = transaction.calculateExpense();
//     console.log(`Budget: ${totalBudget}; Income: ${totalIncome}; Expense: ${totalExpense}`);
//     formOveray.style.display = 'none';
// })

// // mobile ui js
// addTransactionBtn.addEventListener('click', () => {
//     addTransactionForm.style.display = 'flex';
//     formOveray.style.display = 'block';
// })

// cancelTransactionBtn.addEventListener('click', () => {
//     addTransactionForm.style.display = 'none';
//     formOveray.style.display = 'none';
// })

// // update total budget dynamically => update every new input
// // incomes array or object
// // expenses array or object
// // form validation => can't enter empty input fields
// // dynamically display total budget, income, expenses => update every new input






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

    addIncomeTransaction(transaction) {
        this.incomeList.unshift(transaction);
    }

    addExpenseTransaction(transaction) {
        this.expenseList.unshift(transaction);
    }

    getTransactions() {
        return this.transactionList;
    }

    getIncomeTransactions() {
        for (const transaction of transactionList) {
            if (transaction.transactionType === 'income') {
                this.incomeList.unshift(transaction);
            }
        }
        return this.incomeList;
    }

    getExpenseTransactions() {
        for (const transaction of transactionList) {
            if (transaction.transactionType === 'expense') {
                this.expenseList.unshift(transaction);
            }
        }
        return this.expenseList;
    }

    displayTransactions(displayContainer, transactionList) {
        console.log(`Looping through ${transactionList}`);
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

    // based on transaction type: budget += income, budget -= expense => save budget (will use to display)
    // save income: income += amount (will use to display)
    // save expense: expense += amount (will use to display)
    getTotalBudget(transaction) {
        // this method will return the total budget
        // add income into total budget
        // subtract expense from total budget
        const transactionType = Object.values(transaction)[0];
        console.log(transactionType);
        const amount = Number(Object.values(transaction)[2]);
        if (transactionType === 'income') {
            // console.log(`${transactionType} is an income`);
            // console.log(`Current Balance: ${this.budget} + Adding ${amount}`);
            // console.log(`Current Income: ${this.income} + Adding ${amount}`);
            this.budget += amount;
            this.income += amount;
            // console.log(`Updated Budget: ${this.budget}; Updated Income: ${this.income}`);
        } else if (transactionType === 'expense') {
            // console.log(`${transactionType} is an expense`);
            // console.log(`Current Balance: ${this.budget} + Subtracting ${amount}`);
            // console.log(`Current Expense: ${this.expense} + Adding ${amount}`);
            this.budget -= amount;
            this.expense += amount;
            // console.log(`Updated Budget: ${this.budget}; Updated Expense: ${this.expense}`);
        }
        return this.budget;
    }

    getIncome() {
        return this.income;
    }

    getExpense() {
        return this.expense;
    }
}

// on page load, create budget object
const addTransactionBtn = document.getElementById('expense-add');
const addTransactionForm = document.getElementById('new-transaction__container');
const cancelTransactionBtn = document.getElementById('close-new-transaction');
const formOveray = document.getElementById('form-overlay');
const balanceDisplay = document.getElementById('balance-display');
const incomeDisplay = document.getElementById('income-display');
const expenseDisplay = document.getElementById('expense-display');
const transactionsDisplay = document.getElementById('transaction-display');

// let transactionList;
let balance = 0, transactionList = [], income = 0, expense = 0, incomeList = [], expenseList = [];
const budgetTracker = new Budget(balance, transactionList, income, expense, incomeList, expenseList);

const transactionTypeInput = document.getElementById('transaction-type');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const invalidTransactionType = document.getElementById('transaction-type__invalid');
const invalidDescription = document.getElementById('description__invalid');
const invalidAmount = document.getElementById('amount__invalid');
const mobileView = window.matchMedia('(max-width:  601px)');
// every form submission => take input values as an object

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
        const formData = new FormData(addTransactionForm); // get form's input fields and their values as key/value pairs
        const transaction = Object.fromEntries(formData.entries()); // convert key/value pairs into an object
        // console.log(transaction);
        budgetTracker.addTransaction(transaction); // add form data into transaction array (will use to display into transactions list)
        console.log(budgetTracker.transactionList);
        // addTransactionForm.style.display = 'none';

        budgetTracker.displayTransactions(transactionsDisplay, transactionList); // display only after submit so not running every submit (no duplicates)

        // display balance
        // display income
        // display expense
        balance = budgetTracker.getTotalBudget(transaction);
        income = budgetTracker.getIncome();
        expense = budgetTracker.getExpense();
        console.log(`Current Balance: ${balance}`);
        console.log(`Current Income: ${income}`);
        console.log(`Current Expense: ${expense}`);
        balanceDisplay.innerText = `$${balance}`;
        incomeDisplay.innerText = `$${income}`;
        expenseDisplay.innerText = `$${expense}`;

        formOveray.style.display = 'none';

        event.target.reset();
    }
})

function windowResize(width) {
    if (width.matches) {
        addTransactionForm.style.display = 'none';
    }
}

windowResize(mobileView);
mobileView.addEventListener('change', windowResize(mobileView));

// mobile ui js
addTransactionBtn.addEventListener('click', () => {
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
    console.log(`going to slide ${index}`);
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
        console.log('indicator clicked');
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

// desktop ui js