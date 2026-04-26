let tasks = [];

// declaring the funtion to add the newTask

const addTask = (taskTitle) => {
  newTask = {
    title: taskTitle,
    completed: false,
  };
  // using spread operator to add the newTasks

  tasks = [...tasks, newTask];

  renderTask(tasks);
};

const renderTask = (taskArray) => {
  const ul = document.getElementById("taskList");
  ul.innerHTML = "";

  // creating an li element
  taskArray.map((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.title + (task.completed ? "✅" : "❌");

    // add toggle button
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle";
    toggleBtn.onclick = () => toggleTask(index);

    // add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteTask(index);

    li.appendChild(toggleBtn);
    li.appendChild(deleteBtn);

    ul.appendChild(li);
  });

  const count = document.getElementById("count");
  count.textContent = taskArray.length;
};

// getting the task for the toggle task and delete task

const toggleTask = (index) => {
  tasks[index].completed = !tasks[index].completed;
  renderTask(tasks);
};

const deleteTask = (index) => {
  tasks = tasks.filter((_, i) => i !== index);
  renderTask(tasks);
};

document
  .getElementById("showAll")
  .addEventListener("click", () => renderTask(tasks));

document.getElementById("showCompleted").addEventListener("click", () => {
  const completedTasks = tasks.filter((task) => task.completed);

  renderTask(completedTasks);
});

document.getElementById("showPending").addEventListener("click", () => {
  const pendingTasks = tasks.filter((task) => !task.completed);
  renderTask(pendingTasks);
});

const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput").value;

  addTask(taskInput);
});
