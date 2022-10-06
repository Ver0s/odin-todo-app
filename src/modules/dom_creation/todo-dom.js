import { showModal } from './dom-utils';
import { todoItem, addTodoForm } from './element-templates';
import {
	attachEventLitenersToAddTodoForm,
	attachEventLitenersToTodo,
} from './event-listeners';
import { isTodoInPast } from '../app_logic/logic-utils';

// ELEMENTS FROM HTML TEMPLATE
const addTodoBtn = document.querySelector('#add-todo-btn');

// FUNCTIONS
const checkForTodoDone = (todo, todoElement) => {
	if (todo.isDone) {
		// add todo done class to todo content not todoli
		const todoContent = todoElement.querySelector('.todo-content');
		const completeTodo = todoElement.querySelector(
			'[data-todo-action="complete"]'
		);
		todoContent.classList.add('todo-done');
		completeTodo.checked = true;
	}
};

const markPastTodo = (todo, todoElement) => {
	if (isTodoInPast(todo.dueDate)) {
		const dateElement = todoElement.querySelector('.todo-due-date');
		dateElement.style.color = '#cb3c34';
	}
};

const renderTodos = (projectTodos) => {
	const todoList = document.querySelector('.todo-list');
	if (projectTodos.length === 0) {
		todoList.textContent = "You don't have any todos in this project yet.";
	} else {
		todoList.replaceChildren();
		projectTodos.forEach((todo) => {
			const todoElement = todoItem(todo);
			checkForTodoDone(todo, todoElement);
			markPastTodo(todo, todoElement);
			attachEventLitenersToTodo(todoElement);
			todoList.appendChild(todoElement);
		});
	}
};

const setPriorityColor = (priority) => {
	switch (priority) {
		case 'high':
			return 'priority-high';
		case 'medium':
			return 'priority-medium';
		case 'low':
			return 'priority-low';
		default:
			break;
	}
};

// EVENT LISTENERS
addTodoBtn.addEventListener('click', () => {
	const addTodoFormElement = addTodoForm();
	attachEventLitenersToAddTodoForm(addTodoFormElement);
	showModal(addTodoFormElement);
});

export { renderTodos, setPriorityColor };
