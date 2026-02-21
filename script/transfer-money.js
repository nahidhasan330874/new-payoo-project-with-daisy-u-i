document.getElementById("transfer-btn").addEventListener("click", function () {
  // 1 - get the agent number & validate
  const transferNumber = getValueFormInput("transfer-number");
    if( transferNumber.length !=11  ){
        alert('Invalid Number');
        return;
    }
  //  2 - get the Amount
  const transferAmount = getValueFormInput("transfer-amount");

   //  3- machine e
   const currentBalance = getBalance();

//    // 4- Calculate new Balance
    const newBalance = currentBalance - Number(transferAmount);
   if( newBalance < 0){
     alert('Invalid Amount');
     return;
   };

    const pin = getValueFormInput('transfer-pin');
   if( pin === "1234"){
     alert('Transfer Successful');
       setBalance(newBalance);

        // 1 ->history-container ke dhore nie asbo
        const history = document.getElementById('history-container');

        // 2 -> new div create kordo
        const newHistory = document.createElement('div');

        // 3-> new div innerHTML add korbo
        newHistory.innerHTML = `
        <div class=" shadow-md rounded-lg p-5 bg-base-100">

         Transfer- ${transferAmount} taka Successful 
          acc-no ${ transferNumber} , at ${new Date()}
        
        </div>
        `;
        //  4 -> history-container e new div append korbo
            history.append(newHistory);
   }else{
       alert("Invalid Pin");
       return;
   }
});