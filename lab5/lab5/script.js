let bankBalance = 100;
const withdrawAmount = 50;
const depositAmount = 50;

function withdraw() {
    bankBalance = bankBalance - withdrawAmount;

    const balanceText = document.getElementById("balance-display");
    const statusText = document.getElementById("status-message");

    if(bankBalance > 0)
    {
       balanceText.innerText = bankBalance;
    }
    else
    {
        balanceText.innerText = 0;
        statusText.innerText = "Limit Reached!";
        document.body.style.backgroundColor = "#5a1a1a";

        document.getElementById("withdraw").disabled = true;
        document.getElementById("withdraw").innerText = "No Money";
    }

    balanceText.innerText = bankBalance
}

function deposit() {
    if(bankBalance === 0)
    {
        const statusText = document.getElementById("status-message");
        statusText.innerText = "Choose wisely...";

        document.body.style.backgroundColor = #008b8b;
        document.getElementById("withdraw").disabled = false;
        document.getElementById("withdraw").innerText = "Withdraw $50";
    }

    bankBalance = bankBalance + despositAmount; 

    const balanceText = document.getElementById("balance-display")

    balanceText.innerText = bankBalance
}