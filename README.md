# simple-todo-list
Simple todo list website using html css and javascript
the demo of the website is https://fawadullah11.github.io/simple-todo-list/

![Screenshot 2025-02-11 092815](https://github.com/user-attachments/assets/999c76d4-3cf6-490e-85f4-4f92778169da)

![Screenshot 2025-02-11 092915](https://github.com/user-attachments/assets/1d7d777c-e9fc-468b-b843-68d5c17e6bab)

![Screenshot 2025-02-11 093006](https://github.com/user-attachments/assets/399f01df-2078-420d-930f-b155e53d019e)




This is a To-Do List Application with theme customization and persistent storage. It allows users to create, manage, and organize tasks in a simple and intuitive interface. The application saves tasks and user preferences (like theme selection) in the browser's localStorage, ensuring that data persists even after the page is reloaded or closed.

Key Features
Task Management:

Users can add tasks by typing them into an input field and clicking a "Save" button.

Each task is displayed in a list with options to mark it as completed or delete it.

Completed tasks are visually distinguished (e.g., with a strikethrough or different styling).

Persistent Storage:

Tasks are saved in the browser's localStorage, so they remain available even after the page is refreshed or closed.

The application automatically loads saved tasks when the page is opened.

Theme Customization:

Users can switch between multiple themes (e.g., standard, light, dark) to customize the appearance of the application.

The selected theme is saved in localStorage and applied automatically when the page is reloaded.

Interactive UI:

Tasks can be marked as completed by clicking a checkmark button.

Tasks can be deleted by clicking a trash button, which triggers a smooth deletion animation.

The input field is cleared after a task is added.

Error Handling:

The application prevents users from adding empty tasks by displaying an alert.

User Interface (UI)
Input Section:

A text input field where users type their tasks.

A "Save" button to add the task to the list.

Task List:

A container (e.g., <div> or <ul>) that displays all tasks.

Each task is represented as a list item with:

The task text.

A checkmark button to mark the task as completed.

A trash button to delete the task.

Theme Selector:

Buttons or switches to change the application's theme (e.g., standard, light, dark).

Visual Feedback:

Completed tasks are visually distinct (e.g., with a strikethrough or different background color).

Deleted tasks are removed with a smooth animation.

Technical Details
Frontend:

Built using HTML, CSS, and JavaScript.

Uses localStorage for persistent storage of tasks and theme preferences.

Dynamically creates and updates task elements using JavaScript.

Themes:

Themes are applied by adding or removing CSS classes (e.g., standard-theme, light-theme, dark-theme).

The current theme is saved in localStorage and reapplied on page load.

Event Handling:

Event listeners are added to buttons for adding, completing, and deleting tasks.

Theme buttons update the application's appearance and save the selected theme.

Animations:

Smooth transitions are used for task deletion (e.g., a "fall" animation).

User Flow
Adding a Task:

The user types a task into the input field and clicks the "Save" button.

The task is added to the list and saved in localStorage.

Completing a Task:

The user clicks the checkmark button next to a task.

The task is marked as completed, and its status is updated in localStorage.

Deleting a Task:

The user clicks the trash button next to a task.

The task is removed from the list and localStorage after a smooth animation.

Changing Themes:

The user clicks a theme button (e.g., light, dark).

The application's appearance updates, and the selected theme is saved in localStorage.

Potential Improvements
Task Editing:

Allow users to edit tasks after they are created.

Undo Functionality:

Add an "undo" option for deleted tasks.

Categories or Tags:

Allow users to categorize tasks (e.g., work, personal).

Due Dates:

Add the ability to set due dates for tasks.

Search and Filter:

Add a search bar or filters to find specific tasks.

Accessibility:

Improve accessibility by adding ARIA attributes and ensuring keyboard navigation.

Responsive Design:

Ensure the application works well on mobile devices and tablets.

User Accounts:

Add user authentication to allow multiple users to save their tasks.

Example Use Cases
Personal Task Management:

Users can keep track of daily tasks, groceries, or reminders.

Work Task Tracking:

Professionals can use the application to manage work-related tasks and deadlines.

Theme Customization:

Users can personalize the application's appearance to suit their preferences.

Conclusion
This to-do list application is a simple yet powerful tool for task management. Its combination of persistent storage, theme customization, and interactive features makes it user-friendly and versatile. With a few additional features and improvements, it could become an even more robust productivity tool.
