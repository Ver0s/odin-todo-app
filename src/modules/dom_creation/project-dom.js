import { renderProjectLi } from './elementTemplates';
import { renderTodo } from './elementTemplates';

const renderProjectTodos = (projectTodos) => {
	const todoList = document.querySelector('.todo-list');
	// move replaceChildren this to another function later
	// show empty state
	todoList.replaceChildren();
	projectTodos.forEach((todo) => {
		const todoElement = renderTodo(todo);
		todoList.appendChild(todoElement);
	});
};

const setProjectHeader = (projectName) => {
	const projectTitle = document.querySelector('#project-title');
	projectTitle.textContent = projectName;
};

const addProjectToDOM = (projectTitle) => {
	const projectList = document.querySelector('.project-list');
	const projectLiElement = renderProjectLi(projectTitle);
	projectList.appendChild(projectLiElement);
};

export { renderProjectTodos, setProjectHeader, addProjectToDOM };
