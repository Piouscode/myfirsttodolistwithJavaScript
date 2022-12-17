const input = document.getElementById("todo-input");
const button = document.getElementById("add-button");
const list = document.getElementById("todo-list");

// Get the to-do items from local storage
let todoItems = localStorage.getItem("todos");

// If there are no to-do items in local storage, create an empty array
if (!todoItems) {
    todoItems = [];
} else {
    // If there are to-do items in local storage, parse them from the string
    todoItems = JSON.parse(todoItems);
}

// Iterate over the to-do items and add them to the list
todoItems.forEach((todoItem) => {
    addTodoItem(todoItem);
});

button.addEventListener("click", () => {
    console.log("Button clicked");
    const todo = input.value;
    input.value = "";
    addTodoItem(todo);

    // Add the to-do item to the array
    todoItems.push(todo);

    // If there are more than 10 to-do items in the array, remove the oldest one
    if (todoItems.length > 10) {
        todoItems.shift();
    }

    // Save the to-do items to local storage
    localStorage.setItem("todos", JSON.stringify(todoItems));
});

function addTodoItem(todoItem) {
    const item = document.createElement("li");

    // Add a checkbox to the list item
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        // Toggle the 'completed' class on the list item
        item.classList.toggle("completed");
    });
    item.appendChild(checkbox);

    // Add the to-do text to the list item
    const text = document.createElement("span");
    text.textContent = todoItem;
    item.appendChild(text);

    // Add a remove button to the list item
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.textContent = "X";
    removeButton.addEventListener("click", () => {
        // Remove the to-do item from the array
        todoItems = todoItems.filter((item) => item !== todoItem);
        // Save the updated to-do items to local storage
        localStorage.setItem("todos", JSON.stringify(todoItems));
        // Remove the list item from the DOM
        list.removeChild(item);
    });
    item.appendChild(removeButton);

    // Add the list item to the to-do list
    list.appendChild(item);
}








/* Coded by Pious Alpha */
