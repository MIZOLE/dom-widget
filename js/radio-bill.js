var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");

var smsTotalTwoElement = document.querySelector(".smsTotalTwo");

var callTotalTwoElement  = document.querySelector(".callTotalTwo");

var totalTwoElement  = document.querySelector(".totalTwo");

// var billItemTypeRadioElement  = document.querySelector(".billItemTypeRadio");

// var billTypeText = document.querySelector(".billTypeText");

var smsTotal2= 0;
var callTotal2 = 0;
var radioInstance = Radiobuttonbill()

function radioBillTotal(){
  
var checkedRadio = document.querySelector("input[name='billItemType']:checked");
if(checkedRadio){
var billItemType = checkedRadio.value;

radioInstance.radioTotals(billItemType)
  // update your DOM here - callTotal, SmsTotal and GrandTotal
  totalTwoElement.classList.add(radioInstance.totalClassName())

callTotalTwoElement.innerHTML= radioInstance.callTotal().toFixed(2);
smsTotalTwoElement.innerHTML= radioInstance.smsTotal().toFixed(2);
totalTwoElement.innerHTML= radioInstance.totalCost().toFixed(2);
}




//  if (totalCost>= 50){
//          totalTwoElement.classList.add("danger");
//     }
//     else if (totalCost >= 30){
//         totalTwoElement.classList.add("warning");
//    }


// call the correct function here, the one with your logic
}
  
radioBillAddBtnElement.addEventListener("click", radioBillTotal);