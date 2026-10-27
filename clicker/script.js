let linesOfCode = 0;

// Manual upgrade: mechanical keyboards
let clickPower = 1;
let upgradeCost = 50;

// Automatic upgrade: interns
let interns = 0;
let internCost = 100;

// Additional manual upgrade: coffee
let coffeeMultiplier = 1;
let coffeeCost = 200;

// Additional automatic upgrade: senior developers
let developers = 0;
let developerCost = 300;
const developerPower = 5;

// Keep fractional costs, such as 112.5, readable.
function formatNumber(number) {
    return number.toLocaleString("en-US", {
        maximumFractionDigits: 10
    });
}

function writeCode() {
    linesOfCode += clickPower * coffeeMultiplier;
    updateScreen();
}

function buyKeyboard() {
    if (linesOfCode >= upgradeCost) {
        linesOfCode -= upgradeCost;
        clickPower += 1;
        upgradeCost *= 1.5;
        updateScreen();
    }
}

function buyIntern() {
    if (linesOfCode >= internCost) {
        linesOfCode -= internCost;
        interns += 1;
        internCost *= 1.5;
        updateScreen();
    }
}

function buyCoffee() {
    if (linesOfCode >= coffeeCost) {
        linesOfCode -= coffeeCost;
        coffeeMultiplier *= 2;
        coffeeCost *= 1.5;
        updateScreen();
    }
}

function buyDeveloper() {
    if (linesOfCode >= developerCost) {
        linesOfCode -= developerCost;
        developers += 1;
        developerCost *= 1.5;
        updateScreen();
    }
}

function updateScreen() {
    const totalClickPower = clickPower * coffeeMultiplier;
    const developerProduction = developers * developerPower;
    const totalProduction = interns + developerProduction;

    document.getElementById("score-display").textContent =
        formatNumber(linesOfCode) + " lines of code";

    document.getElementById("click-total-display").textContent =
        formatNumber(totalClickPower);

    document.getElementById("production-display").textContent =
        formatNumber(totalProduction);

    document.getElementById("power-display").textContent =
        formatNumber(clickPower);

    document.getElementById("cost-display").textContent =
        formatNumber(upgradeCost);

    document.getElementById("intern-display").textContent =
        formatNumber(interns);

    document.getElementById("cost-intern-display").textContent =
        formatNumber(internCost);

    document.getElementById("coffee-display").textContent =
        formatNumber(coffeeMultiplier) + "x";

    document.getElementById("coffee-cost-display").textContent =
        formatNumber(coffeeCost);

    document.getElementById("developer-display").textContent =
        formatNumber(developers);

    document.getElementById("developer-production-display").textContent =
        formatNumber(developerProduction);

    document.getElementById("developer-cost-display").textContent =
        formatNumber(developerCost);

    // Enable each purchase when the player can afford it.
    document.getElementById("keyboard-button").disabled =
        linesOfCode < upgradeCost;

    document.getElementById("intern-button").disabled =
        linesOfCode < internCost;

    document.getElementById("coffee-button").disabled =
        linesOfCode < coffeeCost;

    document.getElementById("developer-button").disabled =
        linesOfCode < developerCost;
}

// Interns and senior developers produce code every second.
setInterval(function () {
    const automaticProduction = interns + developers * developerPower;

    if (automaticProduction > 0) {
        linesOfCode += automaticProduction;
        updateScreen();
    }
}, 1000);

// Display starting values and purchase availability.
updateScreen();