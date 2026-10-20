let currentLevel = 1;

function levelUp()
{
    currentLevel++;
    //currentLevel = currentLevel + 1;
    document.getElementById("level").innerHTML = currentLevel;
}

function saveLevel()
{
    localStorage.setItem("savedLevel", currentLevel);
    alert("Level data saved!");
}

function loadLevel()
{
    let retrieveData = localStorage.getItem("savedLevel");

    if(retrieveData !== null)
    {
        currentLevel = retrieveData;
        document.getElementById("level").innerText = currentLevel;
    }
    else 
    {
        alert("No save data found...");
    }
}

function saveData()
{
    let typedText = document.getElementById("data-input").value;
    sessionStorage.setItem("tempData", typedText);

    document.getElementById("data-input").value = "";
}

function loadData()
{
    let savedText = sessionStorage.getItem("tempData");

    if(savedText !== null)
    {
        document.getElementById("data").innerText = savedText;
    }
    else
    {
        alrt("No session data found");
    }
}