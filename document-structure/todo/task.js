document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task__input");
    const taskList = document.getElementById("tasks__list");
    const taskForm = document.getElementById("tasks__form");

    function saveTasks() {
        const tasks = [];
        document.querySelectorAll(".task__title").forEach((task) => {
            tasks.push(task.textContent);
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach((taskText) => addTask(taskText));
    }

    function addTask(taskText) {
        taskText = taskText || taskInput.value.trim();
        if (taskText === "") return;

        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        const taskTitle = document.createElement("div");
        taskTitle.classList.add("task__title");
        taskTitle.textContent = taskText;

        const removeButton = document.createElement("a");
        removeButton.href = "#";
        removeButton.classList.add("task__remove");
        removeButton.innerHTML = "&times;";
        taskElement.appendChild(taskTitle);
        taskElement.appendChild(removeButton);
        taskList.appendChild(taskElement);
        taskInput.value = "";
        saveTasks();

        removeButton.addEventListener("click", (event) => {
            event.preventDefault();
            taskElement.remove();
            saveTasks();
        });
    }

    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();
        addTask();
    });

    loadTasks();
});
