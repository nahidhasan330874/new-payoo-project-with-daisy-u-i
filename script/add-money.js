document.getElementById('add-money-btn').addEventListener('click', function(){

    // 1->get bank Account 
    const bankAccount = getValueFormInput('Add-Money-bank');
    if   (bankAccount == "Select Bank"){
        alert('please select a Bank');
        return;
    }

    // 2-> get Bank Account Number
    const accounts = getValueFormInput('Bank-Account-number') ;
     if (accounts.length !=11){
        alert('Invalid Account Number');
        return;
     }

    //  3-> get Amount 
    const amount = getValueFormInput('Add-amount');
    const currentBalance =  getBalance();
    const newBalance = currentBalance  + Number(amount);

    const pin = getValueFormInput('add-money-pin');
    if(pin == "1234"){
        alert( ` Add Money Successful From 
            ${bankAccount}
             at ${new Date()}`)
        setBalance(newBalance);
    }else{
        alert('Invalid a Pin');
        return;
    }




})