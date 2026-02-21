
// machine id -> input value

function getValueFormInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;

}
//  machine -> balance
 function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
 }

//  machine value -> set Balance
 
function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}

// machine id -> hide >show Id

function showOnly(id){
 const addMoney = document.getElementById('Add-Money');
 const cashOut = document.getElementById('Cashout');
 const  transfer = document.getElementById('Transfer-Money');
 const  getBonus = document.getElementById('get-bonus');
 const  payBill = document.getElementById('pay-bill');
 const transaction  = document.getElementById('history');

 const lastHistory =  document.getElementById("PAyment-history");


 //  sobaike hide kore dibo

addMoney.classList.add('hidden');
cashOut.classList.add('hidden');
transfer.classList.add('hidden');
getBonus.classList.add('hidden');
payBill.classList.add('hidden');
transaction.classList.add('hidden');
lastHistory.style.display = "none";


//  id wala Elament ta ke tumi show koraw

 const selected = document.getElementById(id);
 selected.classList.remove('hidden');


}




 