const wrapperId = "list";

initialize();

function styleBody() {
    document.body.style.backgroundColor = getTheme() === "light" ? "#ccc" : "#1d1c20";
    document.body.style.fontFamily = "sans-serif";
    document.body.style.margin = 0;
    document.body.style.paddingTop = "1rem";
}

function styleListDiv() {
    let listDiv = document.getElementById(wrapperId);
    listDiv.style.backgroundColor = getTheme() === "light" ? "#fff" : "#222026";
    listDiv.style.borderRadius = "1rem";
    listDiv.style.width = "min(500px, 100vw)";
    listDiv.style.boxSizing = "border-box";
}

function styleListItem(li) {
    li.style.fontFamily = "cursive";
    li.style.color = getTheme() === "light" ? "#8042ff" : "#f2edca";
    li.style.userSelect = "none";

    li.addEventListener("click", toggleStrikethrough);
}

function styleListItems() {
    let listItems = document.getElementsByTagName("li");
    for (const li of listItems) {
        styleListItem(li);
    }
}

function styleHeader(h) {
    h.style.color = getTheme() === "light" ? "#000" : "#ccc";
    h.style.textAlign = "center";
    h.style.fontFamily = "sans-serif"
}

function styleHeaders() {
    let headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    for (const h of headers) {
        styleHeader(h);
    }
}

function styleInputField() {
    let inputDiv = document.getElementById("inputfield");
    inputDiv.style.textAlign = "center";
    inputDiv.style.display = "flex";
    inputDiv.style.flexWrap = "wrap";
    inputDiv.style.justifyContent = "space-evenly";
    inputDiv.style.alignItems = "center";
    inputDiv.style.rowGap = ".75rem";

    let input = inputDiv.firstElementChild;
    input.style.textAlign = "center"
    input.placeholder = "Enter new item...";

    for (const el of inputDiv.children) {
        el.style.margin = 0;
        el.style.padding = "0 .5rem";
        el.style.borderRadius = "1rem";
    }
}

function styleButtons() {
    let ids = ["addToDo", "addGrocery"];
    for (const id of ids) {
        let button = document.getElementById(id);
        button.style.backgroundColor = getTheme() === "light" ? "#fff" : "#1d1c20";
        button.style.color = getTheme() === "light" ? "#000" : "#fff";
        button.style.borderColor = "#88888880";
    }
}

function applyStyles() {
    styleBody();
    styleHeaders();
    styleListDiv();
    styleListItems();
    styleInputField();
    styleButtons();
}

function toggleStrikethrough(event) {
    let el = event.target;
    if (el.nodeName === "S") {
        // If clicking on the text it'll target the <s></s>
        let parent = el.parentNode;
        parent.insertBefore(el.firstChild, el);
        parent.removeChild(el);
    } else if (el.innerHTML.includes("<s>")) {
        // If clicking on the li rather than the <s> element
        el.innerText = el.innerText.replaceAll("<[^>]*>", "");
    } else {
        el.innerHTML = `<s>${el.innerHTML}</s>`;
    }
}

function toggleTheme() {
    let theme = document.body.dataset.theme;
    document.body.dataset.theme = theme === "dark" ? "light" : "dark";

    const toggler = document.getElementById("toggler");
    toggler.innerText = getTheme() === "dark" ? "☀️" : "🌙";

    applyStyles();
}

function getTheme() {
    return document.body.dataset.theme;
}

function createThemeToggler() {
    let toggler = document.createElement("button");
    toggler.id = "toggler";

    toggler.onclick = toggleTheme;
    toggler.innerText = getTheme() === "dark" ? "🔆" : "🌙";

    toggler.style.backgroundColor = "transparent";
    toggler.style.borderColor = "#88888880";
    toggler.style.position = "absolute";
    toggler.style.top = "1rem";
    toggler.style.right = "1rem";
    toggler.style.borderRadius = "1rem";

    let listWrapper = document.getElementById(wrapperId);
    listWrapper.appendChild(toggler);
}

function addGroceryHeader() {
    let groceryDiv = document.getElementById("groceryDiv");
    let groceryTitle = document.createElement("h2");
    groceryTitle.textContent = "Grocery List";
    groceryDiv.prepend(groceryTitle);
}

function addHorizontalRule() {
    let listDiv = document.getElementById(wrapperId);
    let inputField = document.getElementById("inputfield");

    let hr = document.createElement("hr");

    listDiv.insertBefore(hr, inputField);
}

function addButtons() {
    let todoButton = document.querySelector("#inputfield button");
    todoButton.style.width = "unset";

    let groceryButton = todoButton.cloneNode(true);
    todoButton.parentNode.appendChild(groceryButton);

    todoButton.id = "addToDo";
    groceryButton.id = "addGrocery";

    todoButton.innerText = "Add To-Do";
    groceryButton.innerText = "Add Grocery";

    todoButton.onclick = () => addListItem("#toDoDiv ul");
    groceryButton.onclick = () => addListItem("#groceryList")
}

function addListItem(listQuerySelector) {
    let inputField = document.getElementById("listInput");
    if (inputField.value) {
        appendListItem(inputField.value, listQuerySelector);
        inputField.value = "";
    }
}

function appendListItem(text, listQuerySelector) {
    let list = document.querySelector(listQuerySelector);
    let newItem = document.createElement("li");

    newItem.innerText = text;
    styleListItem(newItem);

    list.appendChild(newItem);
}

function initialize() {
    document.body.dataset.theme = "dark";

    addGroceryHeader();
    addHorizontalRule();
    addButtons()

    createThemeToggler();
    applyStyles();
}