const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("prioritySelect");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const showAll = document.getElementById("showAll");
const showDone = document.getElementById("showDone");
const showNotDone = document.getElementById("showNotDone");

addBtn.addEventListener("click", function() {
    const newTask = document.createElement("li");
    
    const priority = prioritySelect.value;
    newTask.dataset.priority = priority; // 우선순위를 데이터 속성으로 저장

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            newTask.style.textDecoration = 'line-through';
            newTask.classList.add('done');
        } else {
            newTask.style.textDecoration = 'none';
            newTask.classList.remove('done');
        }
    });
    newTask.appendChild(checkbox);

    const taskText = document.createTextNode(taskInput.value);
    newTask.appendChild(taskText);

    const priorityText = document.createTextNode(" (" + priority + ")");
    newTask.appendChild(priorityText);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
        const newValue = prompt('새로운 할 일을 입력하세요', taskInput.value);
        if (newValue) {
            newTask.childNodes[1].nodeValue = newValue;
        }
    });
    newTask.appendChild(editButton);

    taskList.appendChild(newTask);
    taskInput.value = ""; // 입력 필드 초기화
});

showAll.addEventListener('click', function() {
    const tasks = taskList.getElementsByTagName('li');
    for(let task of tasks) {
        task.style.display = '';
    }
});

showDone.addEventListener('click', function() {
    const tasks = taskList.getElementsByTagName('li');
    for(let task of tasks) {
        if(task.classList.contains('done')) {
            task.style.display = '';
        } else {
            task.style.display = 'none';
        }
    }
});

showNotDone.addEventListener('click', function() {
    const tasks = taskList.getElementsByTagName('li');
    for(let task of tasks) {
        if(!task.classList.contains('done')) {
            task.style.display = '';
        } else {
            task.style.display = 'none';
        }
    }
});

// 우선순위에 따라 색상 변경 (예시)
taskList.addEventListener("DOMNodeInserted", function(e) {
    const priority = e.target.dataset.priority;
    switch (priority) {
        case "low":
            e.target.style.color = "green";
            break;
        case "medium":
            e.target.style.color = "orange";
            break;
        case "high":
            e.target.style.color = "red";
            break;
        case "veryHigh":
            e.target.style.color = "purple";
            break;
    }
});
