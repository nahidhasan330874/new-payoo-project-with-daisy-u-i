document.getElementById("bill-btn").addEventListener("click", function () {
  // 1->get bank Account
  const billAccount = getValueFormInput("pay-select");
  if (billAccount == "Select back") {
    alert("please select a Bill");
    return;
  }

  // 2-> get Bank Account Number
  const account = getValueFormInput("biller-Account-number");
  if (account.length != 11) {
    alert("Invalid Account Number");
    return;
  }

  //  3-> get Amount
  const amount = getValueFormInput("pay-amount");
  const currentBalance = getBalance();
  const newBalance = currentBalance + Number(amount);

  const pin = getValueFormInput("biller-pin");
  if (pin == "1234") {
    alert(` pay Bill- ${amount} Successful   
             at ${new Date()}`);
    setBalance(newBalance);

    // 1 ->history-container ke dhore nie asbo
    const history = document.getElementById("history-container");

    // 2 -> new div create kordo
    const newHistory = document.createElement("div");

    // 3-> new div innerHTML add korbo
    newHistory.innerHTML = `
        <div class=" shadow-md rounded-lg p-5 bg-base-100">

        Pay Bill -  ${ amount} taka Successful  
        from- ${billAccount} , acc-no ${account} at ${new Date()}
        
        </div>
        `;
    //  4 -> history-container e new div append korbo
    history.append(newHistory);
  } else {
    alert("Invalid a Pin");
    return;
  }
});
