document.getElementById('calculate-btn').addEventListener('click',
    function () {
        // income part
        const income = document.getElementById('income-input');
        const insideIncome = parseFloat(income.value);
        // expenses part
        const food = document.getElementById('food-input');
        const insideFood = parseFloat(food.value);
        const rent = document.getElementById('rent-input');
        const insideRent = parseFloat(rent.value);
        const cloth = document.getElementById('cloth-input');
        const insideCloth = parseFloat(cloth.value);
        // alret massage 
        if (insideIncome < 0) {
            alert('Input Valid Digit')
            income.value = '';
        }
        else if (insideFood < 0) {
            alert('Input Valid Digit')
            food.value = '';
        }
        else if (insideRent < 0) {
            alert('Input Valid Digit')
            rent.value = '';
        }
        else if (insideCloth < 0) {
            alert('Input Valid Digit')
            cloth.value = '';
        }
        else {
            // total expenses
            const expensesAmount = document.getElementById('total-expenses')
            expensesAmount.innerText = insideFood + insideRent + insideCloth;
            // balance part 
            const balanceTotal = document.getElementById('balance');
            balanceTotal.innerText = insideIncome - expensesAmount.innerText;
            // input clear part 
            // income.value = '';
            food.value = '';
            rent.value = '';
            cloth.value = '';

        }


    });
// bonus part 

document.getElementById('save-btn').addEventListener('click',
    function () {
        const income = document.getElementById('income-input');
        const insideIncome = parseFloat(income.value);
        const amount = document.getElementById('amount-input');
        const insideAmount = parseFloat(amount.value);
        // saving amount 
        const savingAmount = document.getElementById('saving-amount')
        savingAmount.innerText = (insideIncome * insideAmount) / 100;

        // remaining balance part 
        const remainingBalance = document.getElementById('lastbalance');
        const balanceTotal = document.getElementById('balance');
        remainingBalance.innerText = parseFloat(balanceTotal.innerText) - parseFloat(savingAmount.innerText)



    })