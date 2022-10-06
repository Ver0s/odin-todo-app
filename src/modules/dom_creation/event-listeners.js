import { showModal, hideModal } from './dom-utils';
import { projectManager } from '../app_logic/project-manager';
import {
	handleAddTodo,
	handleDeleteTodo,
	handleEditTodo,
} from '../app_logic/todo';
import { handleAddProject, handleDeleteProject } from '../app_logic/project';
import { editTodoForm } from './element-templates';
import { handleProjectsNavigation } from './sidebar-dom';
import { populateStorage } from '../app_logic/storage';

// These event listeners are for dynamically generated items
// Event listeners for items statically placed in HTML are in appropriate -dom.js files

const attachEventLitenersToTodo = (todoElement) => {
	const todoLi = todoElement.querySelector('li');
	const todoContent = todoElement.querySelector('.todo-content');
	const todoID = todoLi.dataset.todoId;

	const currentTodo = projectManager.currentProject.getTodo(todoID);
	const editTodoBtn = todoElement.querySelector('[data-todo-action="edit"]');
	const deleteTodoBtn = todoElement.querySelector(
		'[data-todo-action="delete"]'
	);
	const completeTodo = todoElement.querySelector(
		'[data-todo-action="complete"]'
	);

	// click for edit todo
	editTodoBtn.addEventListener('click', () => {
		const editTodoFormElement = editTodoForm(currentTodo);
		attachEventLitenersToEditTodoForm(editTodoFormElement, todoID);
		showModal(editTodoFormElement);
	});

	// click for delete todo
	deleteTodoBtn.addEventListener('click', () => {
		handleDeleteTodo(todoID, projectManager.currentProject);
		populateStorage('projects', projectManager.projects);
	});

	// click for setting todo as complete
	completeTodo.addEventListener('change', () => {
		currentTodo.toggleDone();
		todoContent.classList.toggle('todo-done');
		populateStorage('projects', projectManager.projects);
		// deleteTodoBtn.disabled = !deleteTodoBtn.disabled;
		// editTodoBtn.disabled = !editTodoBtn.disabled;
	});
};

const attachEventLitenersToProject = (projectElement) => {
	const projectName = projectElement.querySelector('.project-name');
	const projectID = projectName.dataset.projectId;
	const deleteProjectBtn = projectElement.querySelector(
		'[data-project-action="delete"]'
	);
	// click for switch to project
	projectName.addEventListener('click', () => {
		handleProjectsNavigation(projectID);
	});
	// click for delete project
	deleteProjectBtn.addEventListener('click', () => {
		handleDeleteProject(projectID);
		populateStorage('projects', projectManager.projects);
	});
};

const attachEventLitenersToAddTodoForm = (addTodoFormElement) => {
	const addTodoForm = addTodoFormElement.querySelector('#add-todo-form');
	const cancelAddTodoForm =
		addTodoFormElement.querySelector('#cancel-form-btn');

	// click for cancel add todo form
	cancelAddTodoForm.addEventListener('click', () => {
		hideModal();
	});

	// submit for submit and add todo form
	addTodoForm.addEventListener('submit', (e) => {
		e.preventDefault();
		handleAddTodo(addTodoForm, projectManager.currentProject);
		populateStorage('projects', projectManager.projects);
		hideModal();
	});
};

const attachEventLitenersToAddProjectForm = (addProjectFormElement) => {
	const addProjectForm =
		addProjectFormElement.querySelector('#add-project-form');
	const cancelAddProjectForm =
		addProjectFormElement.querySelector('#cancel-form-btn');

	// click for cancel form
	cancelAddProjectForm.addEventListener('click', () => {
		hideModal();
	});
	// submit for submit form and add project
	addProjectForm.addEventListener('submit', (e) => {
		e.preventDefault();
		handleAddProject(addProjectForm);
		populateStorage('projects', projectManager.projects);
		hideModal();
	});
};

const attachEventLitenersToEditTodoForm = (editTodoFormElement, todoID) => {
	const editTodoForm = editTodoFormElement.querySelector('#edit-todo-form');
	const cancelAddTodoForm =
		editTodoFormElement.querySelector('#cancel-form-btn');

	// click for cancel edit todo form
	cancelAddTodoForm.addEventListener('click', () => {
		hideModal();
	});

	// submit for submit and edit todo form
	editTodoForm.addEventListener('submit', (e) => {
		e.preventDefault();
		handleEditTodo(editTodoForm, todoID, projectManager.currentProject);
		populateStorage('projects', projectManager.projects);
		hideModal();
	});
};

// const attachEventLitenersToProjectList = (sidebarElement) => {};
export {
	attachEventLitenersToAddTodoForm,
	attachEventLitenersToTodo,
	attachEventLitenersToAddProjectForm,
	attachEventLitenersToProject,
};
