function CalculatebillTotal(string2) {

  let billTotals = 0;
  let SmsCost = 0;
  let CallCost = 0;

  var list = string2.split(",");
  
  for (var i = 0; i < list.length; i++) {

    var billItems = list[i].trim();

    if (billItems === "call") {
      billTotals += 2.75;
    }
    else if (billItems === "sms") {
      billTotals += 0.75;
    }
}

  return billTotals

};
