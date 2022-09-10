document.querySelector("[type='submit']").onclick = _ => addTask();

function addTask() {
  let text = document.querySelector('[type="text"]');
  if (text.value) {
    let task = document.createElement("div");
    task.setAttribute("class", "task");
    let h3 = document.createElement("h3");
    h3.innerText = text.value;
    task.appendChild(h3);
    let button = document.createElement("button");
    button.innerText = "Delete";
    button.onclick = removeTask;
    task.appendChild(button);
    document.querySelector(".tasks").appendChild(task);

  }
}

function removeTask(e) {
  
  e.target.parentElement.remove();
}
