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

function addTodo(e){
    e.preventDefault()
    console.log("submit")
    //get todoInput value from
   var newTodo= todoInput.value

    if (newTodo ===""){
        return
   }
   else{
       //push newTodo into array 
        todos.push(newTodo);
        todoInput.value=""
        renderTodos();
   }

}

todoForm.addEventListener("submit", addTodo)