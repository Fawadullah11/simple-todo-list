let saveitem = document.querySelector(".standard-button");
let inputtext = document.querySelector(".text");
let toDoList = document.querySelector(".todo-list");
let counter = localStorage.length;
let currentTheme = localStorage.getItem("theme") || "standard"; // Store the current theme

// Save to localStorage
function savelocal(task, isCompleted = false) {
  localStorage.setItem(`task${counter}`, JSON.stringify({ text: task, completed: isCompleted }));
  counter++;
}

// Load tasks from localStorage
function loadTasks() {
  for (let i = 0; i < localStorage.length; i++) {
    const taskData = JSON.parse(localStorage.getItem(`task${i}`));
    if (taskData) {
      createTaskElement(taskData.text, taskData.completed);
    }
  }
}

// Create a task element
function createTaskElement(task, isCompleted = false) {
  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("todo"); // Use a class instead of an ID

  if (isCompleted) {
    toDoDiv.classList.add("completed");
  }

  // Apply the current theme's classes to the new .todo element
  applyThemeToTodo(toDoDiv, currentTheme);

  // Create new li
  const newToDo = document.createElement("li");
  newToDo.innerText = task;
  newToDo.classList.add("todo-item");
  toDoDiv.appendChild(newToDo);

  // Check button
  const checked = document.createElement("button");
  checked.innerHTML = '<i class="fas fa-check"></i>';
  checked.classList.add("check-btn");
  toDoDiv.appendChild(checked);

  // Delete button
  const deleted = document.createElement("button");
  deleted.innerHTML = '<i class="fas fa-trash"></i>';
  deleted.classList.add("delete-btn");
  toDoDiv.appendChild(deleted);

  // Add event listeners for check-btn and delete-btn
  checked.addEventListener("click", () => {
    toDoDiv.classList.toggle("completed");
    updateTaskCompletion(task, toDoDiv.classList.contains("completed"));
  });

  deleted.addEventListener("click", () => {
    toDoDiv.classList.add("fall");
    toDoDiv.addEventListener("transitionend", () => {
      toDoDiv.remove();
      removeTaskFromStorage(task);
    });
  });

  // Append to the list
  toDoList.appendChild(toDoDiv);
}

// Apply theme-specific classes to a .todo element
function applyThemeToTodo(todoElement, theme) {
  if (theme === "standard") {
    todoElement.classList.add("standard-todo");
  } else if (theme === "light") {
    todoElement.classList.add("light-todo");
  } else if (theme === "dark") {
    todoElement.classList.add("darker-todo");
  }
}

// Update task completion status in localStorage
function updateTaskCompletion(task, isCompleted) {
  for (let i = 0; i < localStorage.length; i++) {
    const taskData = JSON.parse(localStorage.getItem(`task${i}`));
    if (taskData && taskData.text === task) {
      localStorage.setItem(`task${i}`, JSON.stringify({ text: task, completed: isCompleted }));
      break;
    }
  }
}

// Remove task from localStorage
function removeTaskFromStorage(task) {
  for (let i = 0; i < localStorage.length; i++) {
    const taskData = JSON.parse(localStorage.getItem(`task${i}`));
    if (taskData && taskData.text === task) {
      localStorage.removeItem(`task${i}`);
      break;
    }
  }

  // Reorganize localStorage keys
  reorganizeStorage();
}

// Reorganize keys in localStorage to remove gaps
function reorganizeStorage() {
  const tasks = [];
  for (let i = 0; i < localStorage.length; i++) {
    const taskData = JSON.parse(localStorage.getItem(`task${i}`));
    if (taskData) tasks.push(taskData);
  }

  // Clear localStorage and re-save tasks with new keys
  localStorage.clear();
  counter = 0;
  tasks.forEach((taskData) => {
    savelocal(taskData.text, taskData.completed);
  });
}

// Add event listener for save button
saveitem.addEventListener("click", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  if (inputtext.value === "") {
    alert("You must write something");
  } else {
    const task = inputtext.value;
    createTaskElement(task);
    savelocal(task);
    inputtext.value = ""; // Clear the input field
  }
});

// Load tasks on page load
document.addEventListener("DOMContentLoaded", loadTasks);

// Theme changer logic
document.addEventListener("DOMContentLoaded", () => {
  const saveItem1 = document.querySelector(".standard-button");
  const inputText = document.getElementById("input-text");
  const body = document.body;
  const standard = document.getElementById("standard-theme");
  const light = document.getElementById("light-theme");
  const dark = document.getElementById("dark-theme");
  const title = document.getElementById("title");

  // Check if elements exist
  if (!saveItem1 || !inputText || !standard || !light || !dark || !title) {
    console.error("One or more elements are missing in the DOM.");
    return;
  }

  // Load the saved theme when the page loads
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    applyTheme(savedTheme);
  }

  // Add event listeners for theme buttons
  standard.addEventListener("click", () => {
    applyTheme("standard");
    localStorage.setItem("theme", "standard"); // Save theme to localStorage
  });

  light.addEventListener("click", () => {
    applyTheme("light");
    localStorage.setItem("theme", "light"); // Save theme to localStorage
  });

  dark.addEventListener("click", () => {
    applyTheme("dark");
    localStorage.setItem("theme", "dark"); // Save theme to localStorage
  });

  // Function to apply a specific theme
  function applyTheme(theme) {
    currentTheme = theme; // Update the current theme
    clearThemes();
    body.id = `${theme}-theme`;

    if (theme === "standard") {
      inputText.classList.add("text");
      saveItem1.classList.add("standard-button");
      document.querySelectorAll(".todo").forEach((todo) => {
        applyThemeToTodo(todo, theme);
      });
    } else if (theme === "light") {
      inputText.classList.add("light-input", "text");
      saveItem1.classList.add("light-button", "standard-button");
      document.querySelectorAll(".todo").forEach((todo) => {
        applyThemeToTodo(todo, theme);
      });
    } else if (theme === "dark") {
      inputText.classList.add("darker-input", "text");
      saveItem1.classList.add("darker-button", "standard-button");
      document.querySelectorAll(".todo").forEach((todo) => {
        applyThemeToTodo(todo, theme);
      });
      title.classList.add("darker-title");
    }
  }

  // Function to clear all theme-related classes
  function clearThemes() {
    body.id = ""; // Clear body ID
    title.className = ""; // Clear title classes
    inputText.className = ""; // Clear input classes
    saveItem1.className = ""; // Clear button classes
    document.querySelectorAll(".todo").forEach((todo) => {
      todo.className = "todo"; // Reset todo classes
    });
  }
});