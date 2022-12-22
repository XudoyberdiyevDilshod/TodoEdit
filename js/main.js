let elForm = document.querySelector(".form");
let elInput = document.querySelector("#form-input");
let elList = document.querySelector(".list");
let arr = [];

elList.addEventListener("click", function (evt) {
  if (evt.target.matches(".edit-btn")) {
    let elNewname = prompt("Enter your new todo");
    let btnId = Number(evt.target.dataset.todoId);
    const result = arr.find((item) => item.id === btnId);
    result.name = elNewname;
    createTodo(arr, elList);
  }
});

function createTodo(arrey, element) {
   element.innerHTML = "";
   for(let i of arrey){
    let elItem = document.createElement("li");
    let elBtn = document.createElement("button");
    elBtn.classList.add("edit-btn");
    elItem.textContent = i.name;
    elItem.style.margin = "5px 0"
    elBtn.textContent = "Edit"
    elBtn.dataset.todoId = i.id;
    element.appendChild(elItem)
    elItem.appendChild(elBtn)
   }
}

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let elInputVal = elInput.value;
  let newTodo = {
    id: arr.length + 1,
    name: elInputVal,
    isComplate: false,
  };
  arr.push(newTodo);
  createTodo(arr, elList);
  elInput.value = "";
});
