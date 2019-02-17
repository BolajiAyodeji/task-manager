// UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // Add tasks event
  form.addEventListener('submit', addTask);

  // Remove tasks event
  taskList.addEventListener('click', removeTask);

  // Clear tasks event
  clearBtn.addEventListener('click', clearTasks);

  // Filter tasks
  filter.addEventListener('keyup', filterTasks);
}

// Add task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task first!')
  }
  else {
  // Create List element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Creat text node and Append to li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create the remove link element
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  // Add icon
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append link to li
  li.appendChild(link);
  // Append link to li
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';

  e.preventDefault();
  }
}

// Remove task
function removeTask (e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear tasks
function clearTasks(e) {
  // taskList.innerHTML = '';

  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  const allList = document.querySelectorAll('.collection-item');

  allList.forEach(task => {
    const item = task.firstChild.textContent;

    if(item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    }
    else {
      task.style.display = 'none';
    }
  })
}
