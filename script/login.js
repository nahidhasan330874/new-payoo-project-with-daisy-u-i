

document.getElementById('btn-login').addEventListener('click', function(){
    // 1. get the mobile number input
    const inputNumber = document.getElementById('input-number');
     const  Number = inputNumber.value;
        
    // 2. get the pin input 
    const pinInput = document.getElementById('input-pin');
     const pin = pinInput.value;

    // 3. match pin & mobile number 
    if(Number == "01234567890" &&  pin == "1234" ){

        // 3-1  true :: > alert> homepage
        alert('login Success');

        // window.location.replace('/home.html')
        window.location.assign('/index2.html');
    }
    else{
        alert('login Failed');
        return;
    }
    // 3-2  false :: > alert> return
})