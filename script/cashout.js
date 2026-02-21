document.getElementById("cashout-btn").addEventListener("click", function () {
  // 1 - get the agent number & validate
  const cashOutNumber = getValueFormInput("cashout-number");
    if( cashOutNumber.length !=11  ){
        alert('Invalid Number');
        return;
    }
  //  2 - get the Amount
  const cashOutAmount = getValueFormInput("cashout-amount");

   //  3- machine e
   const currentBalance = getBalance();

   // 4- Calculate new Balance
   const newBalance = currentBalance  - Number(cashOutAmount);
   if( newBalance < 0){
     alert('Invalid Amount');
     return;
   };

   // 5- get the pin and verify
   const pin = getValueFormInput('cashout-pin');
   if( pin === "1234"){
     alert('Cashout Successful');
       setBalance(newBalance);
   }else{
       alert("Invalid Pin");
       return;
   }
});



// document.getElementById("cashout-btn").addEventListener("click", function () {
//   // 1 - get the agent number & validate
//   const cashOutNumberInput = document.getElementById("cashout-number");
//   const cashOutNumber = cashOutNumberInput.value;

//   if (cashOutNumber.length != 11) {
//     alert(" Invalid Agent Number");
//     return;
//   }

//   // 2- get the amount
//   const cashOutAmountInput = document.getElementById("cashout-amount");
//   const cashOutAmount = cashOutAmountInput.value;

//   // 3- get Current Balance
//   const balanceElement = document.getElementById("balance");
//   const balance = balanceElement.innerText;

//   // 4- Calculate new Balance
//   const newBalance = Number(balance) - Number(cashOutAmount);
//   if (newBalance < 0) {
//     alert("Invalid Amount");
//     return;
//   }

//   // 5- get the pin and verify
//   const cashOutPinInput = document.getElementById("cashout-pin");
//   const pin = cashOutPinInput.value;

//   if (pin === "1234") {
//     // 5-1: true :: show an alert > set balance
//     alert("CashOut Successful");
//     balanceElement.innerText = newBalance;
//   } else {
//     // 5-2: false :: show an error alert >  retune
//     alert("Invalid Pin");
//     return;
//   }
// });
