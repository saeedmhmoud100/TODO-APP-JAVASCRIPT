document.querySelector("[type='submit']").onclick = _ => addTask();

function createTask(text) {
  let task = document.createElement("div");
  task.setAttribute("class", "task");
  let h3 = document.createElement("h3");
  h3.innerText = text;
  task.appendChild(h3);
  let button = document.createElement("button");
  button.innerText = "Delete";
  button.onclick = removeTask;
  task.appendChild(button);
  document.querySelector(".tasks").appendChild(task);
}

function addTask() {
  let text = document.querySelector('[type="text"]');
  if (text.value) {
    createTask(text.value);
    if (localStorage.tasks) {
      let tasks = [localStorage["tasks"], text.value];
      localStorage.tasks = tasks;
    } else {
      localStorage.tasks = text.value;
    }
    text.value = "";
  }
}

function removeTask(e) {
  let text = e.target.parentElement.children[0].innerText;
  //   console.log(localStorage["tasks"].contains("," + text));
  localStorage.setItem("tasks", localStorage["tasks"].replace(`,${text}`, ""));
  localStorage.setItem("tasks", localStorage["tasks"].replace(`${text}`, ""));
  e.target.parentElement.remove();

  localStorage["tasks"] == "" ? localStorage.removeItem("tasks") : true;
}

window.onload = _ => {
  localStorage["tasks"]
    ? localStorage["tasks"]
        .split(",")
        .map(n => (n != "" ? createTask(n) : true))
    : true;
};
