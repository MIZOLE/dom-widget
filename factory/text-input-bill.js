function TextbillTotal() {
    var callCostTotal = 0;
    var smsCostTotal = 0;
    var totalPrice = 0;


    // function getcallCost() {
    //     return callCost 
    // }

    function callTotal() {
        return callCostTotal;
    }

    // function getSmsCost() {
    //     return smsCost
    // }

    function smsTotal() {
        return smsCostTotal;
    }
    function totalCost() {
        totalPrice = callCostTotal + smsCostTotal;
        return totalPrice
    }
    function amountEntered(itemType) {

        if (itemType === "call") {
            callCostTotal += 2.75;

        } else if (itemType === "sms") {
            smsCostTotal += 0.75;

        }

    }


    function totalClassName() {


        if (totalCost() >= 50) {

            return "critical"
        }


        else if (totalCost() >= 30 && totalCost() < 50) {

            return "warning"
        }

    }

    return {
        amountEntered,
        callTotal,
        smsTotal,
        totalClassName,
        totalCost
    }
}