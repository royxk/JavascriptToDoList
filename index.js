const todoList = document.querySelector("#to-do-list");
const inputValue = document.querySelector("#inputValue");
const inputBtn = document.querySelector("#inputBtn");

function addToDoList() {
  const newValue = inputValue.value;
  const newDiv = document.createElement("div");
  newDiv.classList.add("listBox");
  const deleteBtn = document.createElement("button");
  const newLi = document.createElement("li");
  newLi.textContent = newValue;
  deleteBtn.textContent = "delete";

  newDiv.appendChild(newLi);
  newDiv.appendChild(deleteBtn);

  todoList.appendChild(newDiv);

  deleteBtn.addEventListener("click", function () {
    newDiv.remove();
  });

  newLi.addEventListener("click", function () {
    newLi.classList.toggle("done");
  });

  inputValue.value = "";
}

inputBtn.addEventListener("click", addToDoList);
inputValue.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addToDoList();
  }
});
