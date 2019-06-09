
var todos = ['item 1', 'item 2', 'item 3'] //Array

function displayTodos(){
    console.log ('My Todos:', todos);
} //display todos

function addTodo(todo){
    todos.push(todo);
    displayTodos();
} // adds todos and displays results

function changeTodo(position, newValue){
    todos[position] = newValue;
    displayTodos()
}

function deleteTodo(position){
    todos.splice(position, 1);
    displayTodos()
}




