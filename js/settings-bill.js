//get a reference to the call or sms radio button
let billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
//get refference to all settings fields
let smsCostSettingElement = document.querySelector(".smsCostSetting");
let callCostSettingElement = document.querySelector(".callCostSetting");
let warningLevelSettingElement = document.querySelector(".warningLevelSetting");
let criticalLevelSettingElement = document.querySelector(".criticalLevelSetting");
let callTotalSettingElement = document.querySelector(".callTotalSettings");
let smsTotalSettingElement = document.querySelector(".smsTotalSettings");
let totalSettingElem = document.querySelector(".totalSettings");
let theSpaneElementThree = document.querySelector(".totalColor");
//get a reference to the add button
let theAddButtonElement = document.querySelector(".addBtnSettings");
//get a reference to the "update settings" button
let updateSettingsButton = document.querySelector(".updateSettings");
// create variables that will keep track of the settings totals
// var totalCall3 = 0;
// var totalSms3 = 0;
// var totalCost = 0;
// var callCost3 = 0;
// var smsCost3 = 0;
// var warningLevel = 0;
// var criticalLevel = 0;


var settingsInstance = BillWithSettings()

function settingsBill() {

    settingsInstance.setCallCost(Number(callCostSettingElement.value));
    settingsInstance.setSmsCost (Number(smsCostSettingElement.value));
    settingsInstance.setWarningLevel(Number(warningLevelSettingElement.value));
    settingsInstance.setCriticalLevel(Number(criticalLevelSettingElement.value));

    settingsInstance.totalClassName()
}

updateSettingsButton.addEventListener("click", settingsBill);



function radioSettings() {

    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn){
        var cheque = checkedRadioBtn.value;
    }
    
    settingsInstance.allTotals(cheque);

    callTotalSettingElement.innerHTML = settingsInstance.getCallCost().toFixed(2);
    smsTotalSettingElement.innerHTML = settingsInstance.getSmsCost().toFixed(2);
    totalSettingElem.innerHTML = settingsInstance.getTotalCost().toFixed(2);

    totalSettingElem.classList = settingsInstance.totalClassName();

}
theAddButtonElement.addEventListener('click', radioSettings);
