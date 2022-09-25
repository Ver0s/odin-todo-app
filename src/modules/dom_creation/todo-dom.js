import { showElement, hideElement } from './dom-utils';
import { handleAddTodo, handleDeleteTodo } from '../app_logic/todo';
import { renderTodo } from './elementTemplates';
import { projectManager } from '../app_logic/projectManager';

// SELECTORS
const addTodoBtn = document.querySelector('#add-todo-btn');
const addTodoModal = document.querySelector('.todo-modal');
const cancelTodoForm = document.querySelector('#cancel-todo-form-btn');
const addTodoForm = document.querySelector('#add-todo-form');

// FUNCTIONS
const addTodoToDOM = (todo) => {
	const todoList = document.querySelector('.todo-list');
	const todoElement = renderTodo(todo);
	todoList.appendChild(todoElement);
};

// EVENT LISTENERS
addTodoBtn.addEventListener('click', () => {
	showElement(addTodoModal);
});

cancelTodoForm.addEventListener('click', () => {
	hideElement(addTodoModal);
});

addTodoForm.addEventListener('submit', (e) => {
	e.preventDefault();
	handleAddTodo(e.target, projectManager.currentProject);
	hideElement(addTodoModal);
});

document.addEventListener('click', (e) => {
	const target = e.target;
	if (target.dataset.todoAction === 'delete') {
		const todoID = target.closest('.todo-item').dataset.todoId;
		handleDeleteTodo(todoID, projectManager.currentProject);
	}
});

export { addTodoToDOM };
