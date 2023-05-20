document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositFeild = document.getElementById('deposit-feild');
    const newDepositString = depositFeild.value;
    const newDeposit = parseFloat(newDepositString);
    // 
    const depositAmount = document.getElementById('deposit-total');
    const previousDepositTotal = depositAmount.innerText;
    const previousDeposit = parseFloat(previousDepositTotal);



    // get balace from current Total
    const balanceFeild = document.getElementById('balance-total');
    const balanceString = balanceFeild.innerText;
    const newBalance = parseFloat(balanceString);


    if (depositFeild.value === '') {
        alert('put an amount!')
    }
    else {
        const currentDepositTotal = previousDeposit + newDeposit;
        depositAmount.innerText = currentDepositTotal;
        const balance = newDeposit + newBalance;
        balanceFeild.innerText = balance;
        depositFeild.value = '';
    }
})