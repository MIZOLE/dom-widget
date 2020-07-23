describe("text input bill with factory functions",  function() {


    it("should be able to add call cost ", function () {
        let textbillTotal = TextbillTotal();

        // radiobuttonbill.CallCost += 2.75();
        textbillTotal.amountEntered("call")
        assert.equal(2.75, textbillTotal.callTotal());

    });

    it("should be able to add sms cost ", function () {
        let textbillTotal = TextbillTotal();

        // radiobuttonbill.CallCost += 2.75();
        textbillTotal.amountEntered("sms")
        assert.equal(0.75, textbillTotal.smsTotal());

    });

    it("should return a class name of 'warning' if warning level is reached", function () {

        let textbillTotal = TextbillTotal();

        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")

        
    
        assert.equal("warning", textbillTotal.totalClassName());
        
       
        

    });

    it("should return a class name of 'critical' if critical level is reached", function () {

        let textbillTotal = TextbillTotal();

        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")
        textbillTotal.amountEntered("call")

        assert.equal("critical", textbillTotal.totalClassName());
    
    });


})




