document.getElementById('btn-withdraw').addEventListener('click', function () {


    // step-1
    const withdrawFeild = document.getElementById('withdraw');
    const withdrawString = withdrawFeild.value;
    const newWithdraw = parseFloat(withdrawString);

    // step-2
    const withdrawAmount = document.getElementById('withdraw-total');
    const previousWithdraw = withdrawAmount.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdraw);



    const balanceAmount = document.getElementById('balance-total');
    const currentBalanceAmount = balanceAmount.innerText;
    const currentBalance = parseFloat(currentBalanceAmount);
    if (newWithdraw > currentBalance) {
        alert('you can not withdraw more than your balance')
    }
    else if (withdrawFeild.value === '') {
        alert('put an amount!')
    }
    else {
        const currentWithdrawTotal = newWithdraw + previousWithdrawTotal;
        withdrawAmount.innerText = currentWithdrawTotal;
        newBalance = currentBalance - newWithdraw;
        balanceAmount.innerText = newBalance;
        withdrawFeild.value = '';
    }



})