const input = document.getElementById('todo-input');
const button = document.getElementById('add-button');
const list = document.getElementById('todo-list');

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
todoItems.forEach(todoItem => {
    const item = document.createElement('li');
    item.textContent = todoItem;
    list.appendChild(item);
});

button.addEventListener('click', () => {
    console.log('Button clicked');
    const todo = input.value;
    input.value = '';
    const item = document.createElement('li');
    item.textContent = todo;
    list.appendChild(item);

    // Add the to-do item to the array
    todoItems.push(todo);

    // If there are more than 10 to-do items in the array, remove the oldest one
    if (todoItems.length > 10) {
        todoItems.shift();
    }

    // Save the to-do items to local storage
    localStorage.setItem("todos", JSON.stringify(todoItems));
});
