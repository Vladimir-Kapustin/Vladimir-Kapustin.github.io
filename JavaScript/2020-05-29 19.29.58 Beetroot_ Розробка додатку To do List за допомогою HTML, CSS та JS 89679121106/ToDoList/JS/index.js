const newTodo = document.querySelector('#new-todo');
const addTodoBtn = document.querySelector('#add-todo');
const todoList = document.querySelector('#todo-list');

addTodoBtn.addEventListener ('click', addNewTodo);

funcition addNewTodo() {
    if (newTodo.value) {
        const todoItem = document.createElement('li');
        todoItem.classList.add('')
    }
}




// <li class = "todo-item">
//      <input type = "checkbox" id = "todo-item-checkbox-0" class = "todo-item-checkbox"
//      <label for = "todo-item-checkbox-0" class = "todo-item-label">
//       <span></span> new todo item
//      </label>
//      <button class = "todo-item-remove-btn"></button>
//      </li>