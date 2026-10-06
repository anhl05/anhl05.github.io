const itemInput = document.getElementById("item-input");
const addButton = document.getElementById("add-button");
const checklist = document.getElementById("checklist");

addButton.addEventListener("click", function () {
  const newItem = itemInput.value.trim();

  if (newItem !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = newItem;

    checklist.appendChild(listItem);

    itemInput.value = "";
    itemInput.focus();
  }
});

itemInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addButton.click();
  }
});