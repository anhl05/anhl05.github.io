let depositMoney = 0;
const moneyAmount = 100;

function depositMoney() {
    depositMoney = depositMoney + moneyAmount;

    const moneyText = document.getElementById("money-display");
    const statusText = document.getElementById("status-message");

    moneyText.innerText = depositMoney;

}

    if(depositMoney > 0)
    {
        moneyText.innerText = depositMoney;
        statusText.innerText = "Save More!";
    }
    else
    {
        moneyText.innerText = 1000;
        statusText.innerText = "Limit Reached!";
        statusText.style.color = "#00cf00";
        statusText.style.fontWeight = "bold";

        document.body.style.backgroundColor = "#5a1a1a";

        document.querySelector("button").disabled = true;
        document.querySelector("button").innerText = "Great Job!";
    }

function takeMoney() {
    withdrawMoney = depositMoney - moneyAmount;

    const moneyText = document.getElementById("money-display");
    const statusText = document.getElementById("status-message");

    moneyText.innerText = withdrawMoney;
}

    if(withdrawMoney > 0)
    { 
        moneyText.innerText = 1000;
        statusText.innerText = "Limit Reached!";
        statusText.style.color = "green";
        statusText.style.fontWeight = "bold";

        document.body.style.backgroundColor = red;

        document.querySelector("button").disabled = true;
        document.querySelector("button".innerText = "Great");
    }