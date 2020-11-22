var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

// var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
var todos = JSON.parse(localStorage.getItem("todos")) || []
renderTodos();

function renderTodos(){
    todoList.innerHTML = "";

    todoCountSpan.innerHTML= todos.length;
    for(var i=0; i <todos.length; i++){
        var liElmt = document.createElement("li")
        liElmt.textContent= todos[i];
        //add data-index attribute
        liElmt.setAttribute("data-index", i)
        todoList.appendChild(liElmt);

        var button =document.createElement("button")
        button.innerHTML="complete"
        liElmt.appendChild(button);
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
        todoInput.value=""//todoInput.value=null
        localStorage.setItem("todo",JSON.stringify(todos))
        renderTodos();
   }

}
//EVENT DELEGATION >>>Parent element and childern element
function removeTodo(e){
    console.log(e.target)
    //event delegation ....
    var target =e.target
    if(target.matches("button")){
      //find index from li which is data-index
    var dataIndex = target.parentElement.getAttribute("data-index")
    var index = parseInt(dataIndex)
    console.log(dataIndex)
      //remove the todo from todos array (the splice )

    todos.splice(index,1)
     //re-rederTodo 
    renderTodos();
    localStorage.setItem("todos",JSON.stringify(todos))
    }


}

todoForm.addEventListener("submit", addTodo)
todoList.addEventListener("click", removeTodo)