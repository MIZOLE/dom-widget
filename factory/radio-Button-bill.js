function Radiobuttonbill() {

    var smsTotal1 = 0;
    var callTotal1 = 0;

    function callTotal() {
        return callTotal1
    }

    function radioTotals(billItemType){

    if (billItemType === 'call'){
        callTotal1 += 2.75;
        } else if (billItemType === 'sms'){
        smsTotal1 += 0.75;
        }
    }
    function smsTotal() {
        return smsTotal1
    }

    function totalCost() {
        return callTotal1 + smsTotal1
    }

    function totalClassName() {

        if (totalCost() >= 30) {
            return "critical"
    }


        else if (totalCost() >= 20) {
            return "warning"
    }
    }
    return {
        radioTotals,
        callTotal,
        smsTotal,
        totalClassName,
        totalCost
    }

}