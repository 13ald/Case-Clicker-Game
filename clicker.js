let cashCount = 0;
let multiplier = 0;
let perTap = 1;
let caseData = {};

function addMoney() {
    cashCount = cashCount + perTap;
    updateMoneyCount(cashCount);
}

function getMoneyCount() {
    let localCashCount = window.localStorage.getItem("cashCount");
    if (!localCashCount) {
        localCashCount = "0";
    }
    return Number.parseInt(localCashCount);
}

function saveMoneyCount(money) {
    window.localStorage.setItem("cashCount", money);
}

function onLoad() {
    getCaseData();
    cashCount = getMoneyCount();
    tapVal = 1;
    updateMoneyCount(cashCount);
    updateTapPerSec(tapVal);
}

function updateMoneyCount(money) {
    document.getElementById("moneyCounter").innerHTML = money;
    saveMoneyCount(money);
}

function getTapVal() {
    let localTapPerSec = window.localStorage.getItem("perTap");
    return Number.parseInt(localTapPerSec);
}
function savePerSecCount(tapVal) {
    window.localStorage.setItem("perTap", tapVal);
}

function updateTapPerSec(tapVal) {
    document.getElementById("moneyMulti").innerHTML = tapVal;
    savePerSecCount(tapVal);
}
function addPerSec() {
    perTap = perTap * 1.1;
    updateTapPerSec(tapVal);
}

function buyItem(item) {
    const caseData = {};

    const itemToBuy = caseData[item];
    return itemToBuy;
}

function getCaseData() {
    fetch("./cases.json")
        .then((res) => res.json())
        .then((cases) => {
            caseData = cases;
            console.log("Successfully read case data");

            const shopItemsRef = document.getElementById("shopItems");
            if (!shopItemsRef) return;

            const keys = Object.keys(cases);

            /**
             * <div class="shop-item" id="<CASE_KEY>">
                    <img
                        class="shop-item-image"
                        src=".\Assets\Case Images\CS_GO_Weapon_Case.png" />

                    <p class="shop-text">CS:GO Weapon Case</p>
                    <label>BUY $90</label>
                    <label><span id="wpnCaseOwned"></span> Cases Owned</label>
                </div>
 */

            for (const key of keys) {
                const caseData = cases[key];
                console.log(caseData);

                // Create Parent Element
                const shopItem = document.createElement("div");
                shopItem.classList.add("shop-item");
                shopItem.id = key;

                // Create Image Element
                const img = document.createElement("img");
                img.src = "./Assets/Case Images/" + caseData.img; // Modify attribute
                img.classList.add("shop-item-image"); // Add class to element
                shopItem.appendChild(img); // Append element to parent

                // Create Shop Text
                const p = document.createElement("p");
                p.textContent = caseData.displayName;
                p.classList.add("shop-text");
                shopItem.appendChild(p);

                // Create Price Tag
                const label = document.createElement("label");
                label.textContent = "$" + caseData.price;
                shopItem.appendChild(label);

                // Create Owned
                const labelOwned = document.createElement("label");
                labelOwned.textContent = "Cases Owned";
                shopItem.appendChild(labelOwned);

                const spanOwned = document.createElement("span");
                spanOwned.id = key + "Owned";
                labelOwned.appendChild(spanOwned);

                document.getElementById("shopItems").appendChild(shopItem);
            }
        })
        .catch((err) => {
            console.error(err);
        });
}

onLoad();
