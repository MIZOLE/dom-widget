describe("The radio button bill with factory functions", function () {

    it("should be able to add call cost ", function () {
        let radiobuttonbill1 = Radiobuttonbill();

        // radiobuttonbill.CallCost += 2.75();
        radiobuttonbill1.radioTotals("call")
        assert.equal(2.75, radiobuttonbill1.callTotal());

    });

    it("should be able to add sms cost", function () {

        let radiobuttonbill1 = Radiobuttonbill();
        radiobuttonbill1.radioTotals("sms")
        assert.equal(0.75, radiobuttonbill1.smsTotal());

    });


    it("should return a class name of 'warning' if warning level is reached", function () {

        let radiobuttonbill1 = Radiobuttonbill();

        radiobuttonbill1.radioTotals("call")
        radiobuttonbill1.radioTotals("call")
        radiobuttonbill1.radioTotals("call")
        radiobuttonbill1.radioTotals("call")
        radiobuttonbill1.radioTotals("call")
        radiobuttonbill1.radioTotals("call")
        radiobuttonbill1.radioTotals("call")
        radiobuttonbill1.radioTotals("call")
        radiobuttonbill1.radioTotals("call")
        radiobuttonbill1.radioTotals("call")
        
       

        assert.equal("warning", radiobuttonbill1.totalClassName());
        // assert.equal("critical", radiobuttonbill1.totalClassName());
       
        

    });


    it("should return a class name of 'critical' if warning level is reached", function () {

        let radiobuttonbill1 = Radiobuttonbill();

        radiobuttonbill1.radioTotals("call")
        radiobuttonbill1.radioTotals("call")
        radiobuttonbill1.radioTotals("call")
        radiobuttonbill1.radioTotals("call")
        radiobuttonbill1.radioTotals("call")
        radiobuttonbill1.radioTotals("call")
        radiobuttonbill1.radioTotals("call")
        radiobuttonbill1.radioTotals("call")
        radiobuttonbill1.radioTotals("call")
        radiobuttonbill1.radioTotals("call")
        radiobuttonbill1.radioTotals("call")
        radiobuttonbill1.radioTotals("call")
        assert.equal("critical", radiobuttonbill1.totalClassName());
        // assert.equal("critical", radiobuttonbill1.totalClassName());
       
        

    });






})


