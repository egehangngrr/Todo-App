//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//funtions
function addTodo(event){
    event.preventDefault();

    //todo DIV 
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //li
    const newTodo = document.createElement("li");
    if(todoInput.value.length === 0) return ;
       
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //check mark button
    const compeletedButton = document.createElement("button");
    compeletedButton.innerHTML = '<i class = "fas fa-check"></i>';
    compeletedButton.classList.add("complete-btn");
    todoDiv.appendChild(compeletedButton);

    //trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(todoDiv);

    //clear 
    todoInput.value = "";

}

function deleteCheck (e) {
    const item = e.target;
    //delete
    if (item.classList[0] === "trash-btn"){
        
        const todo = item.parentElement;
        todo.remove();
    }

    //check mark
    if (item.classList[0] === "complete-btn"){

        const todo = item.parentElement;
        todo.classList.toggle("completed");

    }
};