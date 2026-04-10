const addBtn = document.querySelector('.add-button');
const textInput = document.querySelector('.text-input');
const container = document.getElementById('tasks-container');

let tasks = JSON.parse(localStorage.getItem('myTodoList')) || [];

function renderTasks() {
    container.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskHTML = `<div class="task-item">
            <span>${task}</span>
            <button onclick="removeTask(${index})">Delete</button>
        </div>`;

        container.insertAdjacentHTML('beforeend', taskHTML);
    });

    localStorage.setItem('myTodoList', JSON.stringify(tasks));
};


function handleAddTask() {
    const taskName = textInput.value.trim();
    
    if (taskName === '') {
            alert('wpisz cos!')
            return;
    };

    tasks.unshift(taskName);
    textInput.value = '';
    renderTasks();
};

addBtn.addEventListener('click', handleAddTask);

textInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleAddTask();
    }
})


window.removeTask = function(index) {
    tasks.splice(index,1);
    renderTasks();
};

renderTasks();