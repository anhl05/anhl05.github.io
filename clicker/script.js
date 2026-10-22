let linesOfCode = 0;

let clickPower = 1;
let upgradeCost= 50;

let interns = 0;
let internCost = 100;

let coffeeMultiplier = 1;
let coffeeCost = 200;

let aiAssistants = 0;
let aiCost = 300;
let aiPower = 5;

function writeCode() 
{
    linesOfCode = linesOfCode + clickPower;
    updateScreen();
}

function buyKeyboard()
{
    if(linesOfCode >= upgradeCost)
    {
        linesOfCode = linesOfCode - upgradeCost;
        clickPower = clickPower +1;
        upgradeCost = upgradeCost * 1.5;
        updateScreen();
    }
}

function buyIntern()
{
    if(linesOfCode >= internCost)
    {
        linesOfCode = linesOfCode - internCost;
        interns = interns + 1;
        internCost = internCost * 1.5;
        updateScreen();
    }
}

function buyCoffee()
{
    if (linesOfCode >= coffeeCost)
    {
        linesOfCode = linesOfCode - coffeeCost;
        coffeeMultiplier = coffeeMultiplier * 2;
        clickPower = clickPower * 2;
        coffeeCost = Math.ceil(coffeeCost * 1.5);
        updateScreen();
    }
}

function buyAI()
{
    if (linesOfCode >= aiCost)
    {
        linesOfCode = linesOfCode - aiCost;
        aiAssistants = aiAssistants + 1;
        aiCost = Math.ceil(aiCost * 1.5);
        updateScreen();
    }
}

function updateScreen()
{
    document.getElementById("score-display").innerText = linesOfCode + "lines of code";

    document.getElementById("power-display").innerText = clickPower;
    document.getElementById("cost-display").innerText = upgradeCost; 

    document.getElementById("intern-display").innerText = interns;
    document.getElementById("intern-display-cost").innerText = internCost;

    document.getElementById("coffee-display").innerText = coffeeMultiplier + "x";
    document.getElementById("coffee-cost-display").innerText = coffeeCost;

    document.getElementById("ai-display").innerText = aiAssistants;
    document.getElementById("ai-power-display").innerText = aiAssistants * aiPower;
    document.getElementById("ai-cost-display").innerText = aiCost;
}

setInterval(function() {
    if(interns > 0)
    {
        linesOfCode = linesOfCode + interns;
        updateScreen();
    }
},
1000
);