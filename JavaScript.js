
var todos = ['item 1', 'item 2', 'item 3']; //Array

// It should have a function to display todos
function displayTodos(){
    console.log ('My Todos:', todos);
}
displayTodos()

// It should have a function to add todos.
function addTodo(todo){
    todos.push(todo);
    displayTodos();
}
addTodo('new item')

// It should have a function to change todos.
function changeTodo(position, newValue){
    todos[position] = newValue;
    displayTodos();
}
changeTodo(3, 'new item 4')

// It should have a function to delete todos.
function deleteTodo(position){
    todos.splice(position, 1);
    displayTodos();
}
deleteTodo(3)
