import { showElement, hideElement, showModal, hideModal } from './dom-utils';
import {
	handleAddTodo,
	handleDeleteTodo,
	handleEditTodo,
} from '../app_logic/todo';
import { renderTodo, addTodoForm, editTodoForm } from './elementTemplates';
import { projectManager } from '../app_logic/projectManager';

// SELECTORS
const addTodoBtn = document.querySelector('#add-todo-btn');
// const cancelTodoForm = document.querySelector('#cancel-todo-form-btn');
// const addTodoForm = document.querySelector('#add-todo-form');

// FUNCTIONS
const addTodoToDOM = (todo) => {
	const todoList = document.querySelector('.todo-list');
	todoList.appendChild(renderTodo(todo));
};

// EVENT LISTENERS
addTodoBtn.addEventListener('click', () => {
	showModal(addTodoForm());
});

document.addEventListener('submit', (e) => {
	e.preventDefault();
	const target = e.target;
	if (target.id === 'add-todo-form') {
		handleAddTodo(target, projectManager.currentProject);
		hideModal();
	}
	if (target.id === 'edit-todo-form') {
		hideModal();
	}
});

document.addEventListener('click', (e) => {
	const target = e.target;
	if (target.id === 'cancel-todo-form-btn') {
		hideModal();
	}
});

// cancelTodoForm.addEventListener('click', () => {
// 	hideElement(addTodoModal);
// });

// addTodoForm.addEventListener('submit', (e) => {
// 	e.preventDefault();
// 	handleAddTodo(e.target, projectManager.currentProject);
// 	hideElement(addTodoModal);
// });

document.addEventListener('click', (e) => {
	const target = e.target;
	if (target.dataset.todoAction === 'delete') {
		const todoID = target.closest('.todo-item').dataset.todoId;
		handleDeleteTodo(todoID, projectManager.currentProject);
	}
	if (target.dataset.todoAction === 'edit') {
		const todoID = target.closest('.todo-item').dataset.todoId;
		showModal(editTodoForm(projectManager.currentProject.getTodo(todoID)));
	}
});

export { addTodoToDOM };
