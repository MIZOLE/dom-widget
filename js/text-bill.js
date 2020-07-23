var addToBillBtn = document.querySelector(".addToBillBtn");

var smsTotalCost = document.querySelector(".smsTotalOne");

var callTotalCost = document.querySelector(".callTotalOne");

let total = document.querySelector(".totalOne");


var billTypeText = document.querySelector(".billTypeText");

var color=document.querySelector(".red");


var callTotal=0;
var smsTotal=0;



var textInstance = TextbillTotal()

addToBillBtn.addEventListener("click", function(){
  var textInput = billTypeText.value;

  textInstance.amountEntered(textInput)

total.classList.add(textInstance.totalClassName())

 smsTotalCost.innerHTML=textInstance.smsTotal().toFixed(2);
 callTotalCost.innerHTML=textInstance.callTotal().toFixed(2);
 total.innerHTML=textInstance.totalCost().toFixed(2);
// style(totalCost)
//  }

});
