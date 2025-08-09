// budget functionality
class Budget {
    constructor(budget, transaction, income, expense, incomeList = [], expenseList = []) {
        this.budget = budget;
        this.transaction = transactionList;
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

    getTransactions() {
        return this.transactionList;
    }

    displayTransactions() {
        for (let i; i < this.transactionList.length; i++) {
            const transactionContainer = document.createElement('div');
            const transactionDescription = document.createElement('p');
            const transactionAmount = document.getElementById('p');

            transactionDescription.innerText = this.transactionList[i]['description'];
            transactionAmount.innerText = this.transactionList[i]['amount'];

            transactionContainer.appendChild(transactionDescription);
            transactionContainer.appendChild(transactionAmount);
            document.body.appendChild(transactionContainer);
        }
    }

    // based on transaction type: budget += income, budget -= expense => save budget (will use to display)
    // save income: income += amount (will use to display)
    // save expense: expense += amount (will use to display)
    // getTotalBudget() {
    //     return this.budget;
    // }
    getTotalBudget(transaction) {
        // this method will return the total budget
        // add income into total budget
        // subtract expense from total budget
        const transactionType = Object.values(transaction)[0];
        console.log(transactionType);
        const amount = Number(Object.values(transaction)[2]);
        if (transactionType === 'income') {
            console.log(`${transactionType} is an income`);
            console.log(`Current Balance: ${this.budget} + Adding ${amount}`);
            console.log(`Current Income: ${this.income} + Adding ${amount}`);
            this.budget += amount;
            this.income += amount;
            console.log(`Updated Budget: ${this.budget}; Updated Income: ${this.income}`);
        } else if (transactionType === 'expense') {
            console.log(`${transactionType} is an expense`);
            console.log(`Current Balance: ${this.budget} + Subtracting ${amount}`);
            console.log(`Current Expense: ${this.expense} + Adding ${amount}`);
            this.budget -= amount;
            this.expense += amount;
            console.log(`Updated Budget: ${this.budget}; Updated Expense: ${this.expense}`);
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
//             console.log(`Updated Budget: ${this.budget}; Updated Income: ${this.income}`);
//         } else if (this.transactionType === 'expense') {
//             console.log(`${this.transactionType} is an expense`);
//             console.log(`Current Balance: ${this.budget} + Subtracting ${this.amount}`);
//             console.log(`Current Expense: ${this.expense} + Adding ${this.amount}`);
//             this.budget -= this.amount;
//             console.log(`Updated Budget: ${this.budget}; Updated Expense: ${this.expense}`);
//         }
//         return this.budget;
//     }

//     getIncome() {
//         this.income += this.amount;
//         return this.income;
//     }

//     getExpense() {
//         this.expense += this.amount;
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

// on page load, create budget object
const addTransactionBtn = document.getElementById('expense-add');
const addTransactionForm = document.getElementById('new-transaction__container');
const cancelTransactionBtn = document.getElementById('close-new-transaction');
const formOveray = document.getElementById('form-overlay');
const balanceDisplay = document.getElementById('balance-display');
const transactionsDisplay = document.getElementById('transaction-display');

let budgetTracker;
// let transactionList;
let transaction; // object of form submission
let balance = 0, transactionList = [], income = 0, expense = 0;
budgetTracker = new Budget(balance, transactionList, income, expense, [], []);

// addTransactionForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const transactionType = document.getElementById('transaction-type').value;
//     const transactionDescription = document.getElementById('description').value;
//     const transactionAmount = Number(document.getElementById('amount').value);

//     const transaction = new Transaction(balance, income, expense, transactionType, transactionDescription, transactionAmount);
//     console.log(transaction);
//     console.log(budgetTracker);
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

// form validation
// every form submission => take input values as an object
addTransactionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(addTransactionForm); // get form's input fields and their values as key/value pairs
    transaction = Object.fromEntries(formData.entries()); // convert key/value pairs into an object
    // console.log(transaction);
    budgetTracker.addTransaction(transaction); // add form data into transaction array (will use to display into transactions list)
    addTransactionForm.style.display = 'none';

    // display balance
    // display income
    // display expense
    balance = budgetTracker.getTotalBudget(transaction);
    income = budgetTracker.getIncome();
    expense = budgetTracker.getExpense();
    console.log(`Current Balance: ${balance}`);
    console.log(`Current Income: ${income}`);
    console.log(`Current Expense: ${expense}`);
    balanceDisplay.innerText = balance;
    formOveray.style.display = 'none';
})

// display list of transactions
const displayingTransactions = budgetTracker.displayTransactions();
console.log(displayingTransactions);
// transactionList = budgetTracker.getTransactions();
// console.log(transactionList);
// for (let i; i < transactionList.length; i++) {
//     const transactionContainer = document.createElement('div');
//     const transactionDescription = document.createElement('p');
//     const transactionAmount = document.getElementById('p');

//     transactionDescription.innerText = Object.values(transactionList[i][1]);
//     transactionAmount.innerText = Object.values(transactionList[i][2]);

//     transactionContainer.appendChild(transactionDescription);
//     transactionContainer.appendChild(transactionAmount);
//     document.body.appendChild(transactionContainer);
// }

// mobile ui js
addTransactionBtn.addEventListener('click', () => {
    addTransactionForm.style.display = 'flex';
    formOveray.style.display = 'block';
})

cancelTransactionBtn.addEventListener('click', () => {
    addTransactionForm.style.display = 'none';
    formOveray.style.display = 'none';
})

// desktop ui js