const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const editButton = document.querySelector('.edit-btn');
const completed = document.querySelector('.filer')

todoButton.addEventListener("click", addTodo);
todoList. addEventListener("click", deleteCheck);



function addTodo(event) {
  event.preventDefault();

  if(todoInput.value === ""){
      alert("please fill out the task");
      return;
  }
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value
  newTodo.classList.add("todo-item");

  todoDiv.appendChild(newTodo);

  

  const editButton = document.createElement('button')
  editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
  editButton.classList.add('edit-btn')
  todoDiv.appendChild(editButton)

  const checkedButton = document.createElement('button');
  checkedButton.innerHTML = '<i class="fas fa-check" ></i>';
  checkedButton.classList.add("checked-btn")
  todoDiv.appendChild(checkedButton);


  checkedButton.addEventListener('click', function(){
      const parent = this.parentNode;
      parent.remove()
      completed.appendChild(parent)
  })


  const deteleButton = document.createElement('button');
  deteleButton.innerHTML = '<i class="fas fa-trash" ></i>';
  deteleButton.classList.add("trash-btn")
  todoDiv.appendChild(deteleButton)





  todoList.appendChild(todoDiv)

  todoInput.value = ""


}


function deleteCheck (e) {
    const item = e.target;

    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }

    if(item.classList[0] === "checked-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}


function filterTodo (e) {
    const todos = todoList.childNodes;
    e.preventDefault();

  const todoDi = document.createElement("div");
  todoDi.classList.add("filter");

  const newTod = document.createElement("li");
  newTod.innerText = function completed(e) {
    const item = e.target;
    if(item.classList[0] === "checked-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}
  
  newTod.classList.add("todo-item");

  todoDi.appendChild(newTod);
}

function editItem (e) {
    let item = e.target.innerHTML;
    let itemInput = document.createElement('input')
    itemInput.type ='text'
    itemInput.value = item
    itemInput.classList.add('edit')
    e.target.parentNode.prepend(itemInput);
    e.target.remove()
    itemInput.select()
}