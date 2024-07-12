let cashCount = 0;
let multiplier = 0;

function addMoney() {
    cashCount = cashCount + 1;
    updateMoneyCount(cashCount);
    console.log(cashCount);
    
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
}

function updateMoneyCount(money) {
    document.getElementById("moneyCounter").innerHTML = money;
    saveMoneyCount(money);
}

onLoad();
