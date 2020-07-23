let calculateBtn = document.querySelector(".calculateBtn");
let billTotalElem = document.querySelector(".billTotal");
let billStringElement = document.querySelector(".billString");

calculateBtn.addEventListener("click", function() {
  var item = billStringElement.value
  var list2 = item.split(",")
  var billTotal = calculatebillTotal(list2)

  
 if (billTotal >= 30){
        // adding the danger class will make the text red 
         billTotalElem.classList.add("critical");
         billTotalElem.classList.remove("warning")
    }
    else if (billTotal >= 20  && billTotal <= 30 ){
         billTotalElem.classList.remove("critical")
         billTotalElem.classList.add("warning");
    }
  // else {
  //    billTotalElem.classList.remove("warning")
  // }
//appending the result to html in place of returning the result
billTotalElem.innerHTML = billTotal.toFixed(2);
});

