console.log("Hello, DOM!");

console.log(document);

// Finds the first HTML element with the id="listTitle" attribute
let listTitle = document.getElementById("listTitle");
console.log(listTitle);

listTitle.textContent = "Josh's Magical To-Do List";
listTitle.style.color = "#0080ff";
listTitle.style.textAlign = "center";

let inputField = document.getElementById("listInput");
inputField.parentElement.style.textAlign = "center";

// Finds the first element with the selector "ul li"
// First li element inside the first ul element
let firstListItem = document.querySelector("ul li");
console.log(firstListItem);

// Accessing multiple elements
// querySelectorAll returns a NodeList
let selectAll = document.querySelectorAll("ul li");
console.log(selectAll);

// getElementsByClassName
let groceryItems = document.getElementsByClassName("groceryItem");

console.log(groceryItems);
console.log(groceryItems[2]);
console.log(groceryItems instanceof Array);
console.log(groceryItems.item(2));

// getElementsByTagName
let liElements = document.getElementsByTagName("li");
console.log(liElements);

// Access the childNodes of the body
console.log(document.body.childNodes);
console.log(document.body.childNodes.item(1));

let listDiv = document.getElementById("list");

console.log(listDiv.firstElementChild);
console.log(listDiv.firstElementChild.nextElementSibling);
console.log(listDiv.firstElementChild.nextElementSibling.nextElementSibling);
// console.log(listDiv.firstChild.nextSibling.nextSibling);

for (const element of liElements) {
    element.style.fontFamily = "cursive";
    element.style.color = "#8042ff";
}

let lastGrocery = document.getElementsByClassName("groceryItem")[0];
lastGrocery.innerText = "Moondew Drops";

document.getElementsByClassName("listItem")[4].innerHTML = "<s>Buy a new cauldron</s>";

let completedItem = document.getElementsByClassName("listItem").item(3);
completedItem.innerHTML = `<s>${completedItem.innerHTML}</s>`;

//                                .addEventListener("event", callbackFunction)
document.getElementById("clickMe").addEventListener("click", (event) => {
    console.log(event);
    let button = event.target;

    if (button.dataset.theme !== "blue") {
        button.style.backgroundColor = "blue";
        button.style.color = "white";
        button.dataset.theme = "blue";
    } else {
        button.style.backgroundColor = "yellow";
        button.style.color = "black";
        button.dataset.theme = "yellow";
    }

    console.log(button.dataset);
});

document.getElementById("listInput").addEventListener("keyup", (event) => {
    console.log(event.target.value);
});

document.getElementById("clickMe").addEventListener("click", (event) => {
    // Check the input field for a value
    let inputField = document.getElementById("listInput");
    if (inputField.value) {
        // If it has value, add to the list (append to the DOM)
        addToDoItem(inputField.value);

        // Clear the input field after adding the item
        inputField.value = "";
    }
});

function addToDoItem(text) {
    // Query for the unorder list element
    let toDoList = document.querySelector("#toDoDiv ul");
    // Create a new list item element
    let newItem = document.createElement("li");

    newItem.innerText = text;
    newItem.classList.add("listItem");

    newItem.style.fontFamily = "cursive";
    newItem.style.color = "#8042ff";

    // Adds newItem underneath toDoList
    toDoList.appendChild(newItem);
}

addToDoItem("test item");

let groceryDiv = document.getElementById("groceryDiv");

let groceryTitle = document.createElement("h2");
groceryTitle.textContent = "Grocery List";

groceryDiv.prepend(groceryTitle);