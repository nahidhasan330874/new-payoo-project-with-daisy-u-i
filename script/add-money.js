document.getElementById('add-money-btn').addEventListener('click', function(){

    // 1->get bank Account 
    const bankAccount = getValueFormInput('Add-Money-bank');
    if   (bankAccount == "Select Bank"){
        alert('please select a Bank');
        return;
    }

    // 2-> get Bank Account Number
    const account = getValueFormInput('Bank-Account-number') ;
     if (account.length !=11){
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

        // 1 ->history-container ke dhore nie asbo
        const history = document.getElementById('history-container');

        // 2 -> new div create kordo
        const newHistory = document.createElement('div');

        // 3-> new div innerHTML add korbo
        newHistory.innerHTML = `
        <div class=" shadow-md rounded-lg p-5 bg-base-100">

        Add Money Successful From 
        ${bankAccount} , acc-no ${account} at ${new Date()}
        
        </div>
        `;
        //  4 -> history-container e new div append korbo
            history.append(newHistory)

    }else{
        alert('Invalid a Pin');
        return;
    }




})