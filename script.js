const daysContainer = document.querySelector(".days-container");
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

daysOfWeek.forEach(day => {
    const dayContainer = document.createElement("div");
    dayContainer.classList.add("day-container");

    const dayHeader = document.createElement("h2");
    dayHeader.textContent = day;

    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.placeholder = "Enter a task";
    taskInput.classList.add("task-input");

    const addButton = document.createElement("button");
    addButton.textContent = "Add Task";
    addButton.classList.add("add-button");

    const taskList = document.createElement("ul");
    taskList.classList.add("task-list");

    dayContainer.appendChild(dayHeader);
    dayContainer.appendChild(taskInput);
    dayContainer.appendChild(addButton);
    dayContainer.appendChild(taskList);

    daysContainer.appendChild(dayContainer);

    addButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-button">Delete</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = "";
            addDeleteButtonListener(taskItem);
        }
    });
});

function addDeleteButtonListener(taskItem) {
    const deleteButton = taskItem.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
        taskItem.remove();
    });
}

