var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodos();

function renderTodos(){
    todoList.innerHTML = "";
    todoCountSpan.innerHTML= todos.length;
    for(var i=0; i <todos.length; i++){
        var liElmt = document.createElement("li")
        liElmt.textContent= todos[i];
        todoList.appendChild(liElmt);
    }

}
