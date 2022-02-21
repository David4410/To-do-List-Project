const form = document.querySelector('#task-form');
const taskList = document.querySelector('.list-group');
const clearBtn = document.querySelector('.clear-task');
const taskInput = document.querySelector('#task');


loadEventListeners();

// load the event listeners
function loadEventListeners(){
    // add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // clear task event
    clearBtn.addEventListener('click', clearTask);
}

taskInput.value = '';
// add task
function addTask(e) {
    if(taskInput.value === ''){
        alert('add a task');
    }

    // Create an element
    const li = document.createElement('li');
    // add class
    li.className = 'list-group-item';
    // create a text node and append it to li
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link element
    const link = document.createElement('a');
    // add class
    link.className = 'delete-item float-right';
    // add icon html
    link.innerHTML = '<i class="fas fa-trash-alt"></i>';
    // append link to li
    li.appendChild(link);
    // append li to ul
    taskList.appendChild(li);

    taskInput.value = '';

    e.preventDefault(); 
}

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')){
        if (confirm('Are you Sure you want to Delete?')) {
            e.target.parentElement.parentElement.remove();
        }
       
    }
}

function clearTask(e) {
    // taskList.innerHTML = '';

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}