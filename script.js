// create an account object
account = {
    name : "Philippe Prevost",
    expenses : [],
    income : [],
    addExpenses() {

        const kindOfExpenses = parseFloat(prompt("what kind of expenses? 1.) Gas 2.) Leisure 3.) Food 4.) Rent "))
        let amount = parseFloat(prompt("How much was your expense?"))
        
        if (kindOfExpenses === 1){
            
            console.log(amount)
        }
        else if (kindOfExpenses === 2){
            console.log(amount)
        }
        else if (kindOfExpenses === 3){
            console.log(amount)
        }
        else if (kindOfExpenses === 4){
            console.log(amount)
        }
        else {
            alert("please select a number between 1 and 4")
            menu()
        }
        
        this.expenses.push(amount), // add the entered amount into the expenses array
        menu()// call the menu() function again to show the menu prompt
    },
    addIncome() {
        const amount = parseFloat(prompt("Enter an amount to add on your income"))
        // add an income to the income array
        this.income.push(amount), // add the entered amount into the account's income variable
        menu()
    },
    listAllExpenses(){
  
    //list all the expenses in the expenses array. Use loop
    let expensesTotal = 0;
    for (let i= 0; i < this.expenses.length; i++) { 
        expensesTotal += this.expenses[i];
        // a loop going trought all values in the expenses array to addition them and store them in the expenseTotal variable 
    }
    alert(`Your total expensese are: ${expensesTotal}\nExpenses list: ${this.expenses}`)
    // display the total and whats in the expenses array

    menu()

    },
    getSummary(){
        let expensesTotal = 0;
    for (let i= 0; i < this.expenses.length; i++) { 
        expensesTotal += this.expenses[i];
    }
    
    let incomeTotal = 0;
    for (let i= 0; i < this.income.length; i++) { 
        incomeTotal += this.income[i];
         
    }
        alert(`Total balance: ${incomeTotal - expensesTotal}\nTotal income: ${incomeTotal}\nTotal expenses: ${expensesTotal}`),
        menu()
    //summarize your total balances. It should show your total income, your total expenses and also calculate your current balances (income - expenses).
    }
    
}

    function menu(){
        // the function menu() should only be responsible to show the different choices for the user.
        const choice = parseFloat(prompt("EXPENSE TRACKER" + "\n" + "Select a choice: 1.) Add income 2.) Add expenses 3.) List all expenses 4.) Get summary 5.) Exit"));
        // i chose if else as i am more confortable with it
        if (choice === 1){
            account.addIncome()// depending on which number is entered on the prompt different functions get called in the account object 
        }
        else if (choice === 2){
            account.addExpenses()
        }
        else if (choice === 3){
            account.listAllExpenses()
        }
        else if (choice === 4){
            account.getSummary()
        }
        else if (choice ===5){

        }
        else {
            alert("please select a number between 1 and 4")
            menu()
        }
     
    }
    menu();


  //  const amount = parseFloat(prompt("How much was your expense?"));
  

// the object should hold all of our logic

// THE ACCOUNT OBJECT SHOULD HAVE THE FOLLWOING PROPERTIES:
// name: the account holders name, should be a string
// expenses: an array that should hold all of your expenses, can be empty from start
// income: an array that should hold all of your income, can be empty from start  
// addExpenses: a function that vill add an expense to the expenses array
// addIncome: a function that vill add an income to the income array
// listAllExpenses: a function that should list all the expenses in the expenses array
// getSummary: a function that should summarize your total balances. It should show your total
// income, your total expenses and also calculate your current balances (income - expenses).

// create a function called menu()

// the function menu() should only be responsible to show the different choices
// for the user.

// The menu() function should display the menu with different choices for the user
// depending on what the user selects from the menu you should call on the correct
// method or poperty from the account object. You can use a switch or if/else statement for your
// different menu choices. Please motivate you choice in a comment.

// CODE TO HELP YOU GET STARTED

// Here are some code snippets to help you get started. You need to place them at the correct
// place in your code but this is the logic for some parts of your assignment.

// if we want to take an input from the user in a quite nice way we can use the propmt() function
// the prompt will show a window to the user where we can add a message and it will also display
// an input field where the user can type something. In order to make this work a bit easier
// we need to wrap the propmt() in a function called parseFloat(). Why is that? You need to do some
// googling anf the put your answer in a comment in your code.
// the syntax you can use looks like this:
const amount = parseFloat(promp("How much was your expense?"));
// the answer that the user will put in the input box will get stored in the variable amount.

// HINT: you will need to use array methods in this assignment and there is one very basic one
// that is important. It is the method for adding something to an existing array, which one is that? => .push

// In order to show all elements in an array we need to loop through it. In this assignment a
// forEach loop would be good to use. If you want to display the outcome of each element in the
// array on separate lines you can add:
("\n");
// for example:
aler("This is a message " + "\n" + "with a new line");
// to your ouput. This will make the nes output on a new line.

// to make the menu look nice we should not console.log any output. Instead we shoul use either alert()
// or propmt()
// we use alert() when we just want to display something to the user, for example a message:
aler("This is a message in an alert box!");
// we use the prompt() when we want to ask the user to do something cause the prompt()
// will display any message that we want and also display an input field where the user
// can type an input. Like this:
const age = parseFloat(promp("How old are you?"));
// whatever the user types in the input field will be stored in the variable age.