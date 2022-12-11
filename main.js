
const todoForm = document.querySelector("#todo");
const todoInput = document.querySelector("#todoField");
const todoList = document.querySelector("ul");
let todoItems = [];

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const todo = todoInput.value;
    if (todoItems.length >= 0) {
        todoItems.push(todo);
    }
    todoInput.value = '';
    renderTodoList();
})

function renderTodoList() {
    const template = todoItems.map((item, index) => (
    `
    <ul>
    <li class="${todoList.complete}">
    ${item}
    <button class="complete" data-index="${index}">Complete Todo</button>
    <button class="delete" data-index="${index}">Delete Todo</button>
    </li>
    </ul>
    `));
    todoList.innerHTML = template.join('');
}
renderTodoList()

todoList.addEventListener('click', function(event) {
    if(event.target.matches('.delete')) {
        const index = event.target.dataset.index;
        todoItems.splice(index, 1);
        renderTodoList();
    }
    if (event.target.matches('complete')) {
        const index = event.target.dataset.index;
        todoItems.complete(index, 1)
        renderTodoList()
    }
})