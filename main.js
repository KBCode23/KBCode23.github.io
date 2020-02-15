//Javascript Document
let addButton = document.getElementById("addButton");
var itemTextInput = document.getElementById("itemInput");
var ol = document.querySelector("ol");
var elId = 0;

function addItem(){
  //create item
  let li = document.createElement("li");
  li.setAttribute("id", elId + "item");
  li.textContent = itemTextInput.value;
  ol.appendChild(li);

  //create delete button
  let delButton = document.createElement("button");
  delButton.innerHTML = "Delete";
  delButton.setAttribute("id", elId + "button");
  ol.appendChild(delButton);
  delButton.addEventListener("click", deleteIt);

  //create checkbox
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", elId);
  ol.appendChild(checkbox);
  checkbox.addEventListener("click", check);

  //increment this so that each group of li's, buttons, and checkboxes has a special id
  elId++;
}

//delete the item function
function deleteIt(e){
  e.target.previousSibling.remove();
  e.target.nextSibling.remove();
  e.target.remove();
}

//check item and move it to the bottom function
function check(e){
  //check
  let itemToCheckId = e.target.id;
  let itemToCheck = document.getElementById(itemToCheckId + "item");
  itemToCheck.style.textDecoration = "line-through";
  //re-append at the bottom
  let middleItem = document.getElementById(e.target.id + "button");
  ol.appendChild(middleItem.previousSibling);
  ol.appendChild(middleItem);
  ol.appendChild(e.target);
}

//listener for the add button
addButton.addEventListener("click", addItem);
