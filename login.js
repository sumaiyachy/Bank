document.getElementById('btn-submit').addEventListener('click', function () {
    const passwordFeild = document.getElementById('password');
    password = passwordFeild.value;
    const emailFeild = document.getElementById('email');
    email = emailFeild.value;
    // console.log(email, password);


    // user varification
    if (email === 'sum@gmail.com' && password === '3434') {
        window.location.href = 'bank.html';
    }
    else {
        alert('You cannot enter!!');
    }
})
