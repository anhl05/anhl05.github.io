const itemInput = document.getElementById("item-input");
const addButton = document.getElementById("add-button");
const checklist = document.getElementById("checklist");
const itemCount = document.getElementById("item-count");

function updateItemCount() {
  itemCount.textContent = checklist.children.length;
}

function addItem() {
  const newItem = itemInput.value.trim();

  if (newItem === "") {
    itemInput.focus();
    return;
  }

  const listItem = document.createElement("li");
  const number = document.createElement("span");

  number.className = "list-mark";
  number.textContent = String(checklist.children.length + 1).padStart(2, "0");

  listItem.append(number, document.createTextNode(newItem));
  checklist.appendChild(listItem);

  itemInput.value = "";
  itemInput.focus();

  updateItemCount();
}

addButton.addEventListener("click", addItem);

itemInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addItem();
  }
});