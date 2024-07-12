let cashCount = 0;
let multiplier = 0;
let perTap = 1;

function addMoney() {
    cashCount = cashCount + perTap;
    updateMoneyCount(cashCount);
}

function getMoneyCount() {
    let localCashCount = window.localStorage.getItem("cashCount");
    return Number.parseInt(localCashCount);
}

function saveMoneyCount(money) {
    window.localStorage.setItem("cashCount", money);
}

function onLoad() {
    cashCount = getMoneyCount();
    updateMoneyCount(cashCount);
    updateTapPerSec(tapVal)
}

function updateMoneyCount(money) {
    document.getElementById("moneyCounter").innerHTML = money;
    saveMoneyCount(money);
}

function getTapVal(){
    let localTapPerSec = window.localStorage.getItem("perTap");
    return Number.parseInt(localTapPersec)
}
function savePerSecCount(tapVal) {
    window.localStorage.setItem("perTap", tapVal);
}

function updateTapPerSec(tapVal){
    document.getElementById("moneyPerSec") = tapVal;
    saveTapVal(tapVal);

}

onLoad();
