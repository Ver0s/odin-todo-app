import { v4 as uuidv4 } from 'uuid';
import { renderProjects } from '../dom_creation/project-dom';
import { getFormData } from './logic-utils';
import { projectManager } from './project-manager';
import { handleProjectsNavigation } from '../dom_creation/sidebar-dom';

const Project = (title, id = uuidv4()) => {
	let todos = [];

	const _getTodoIndex = (todoID) => {
		return todos.findIndex((todo) => {
			return todo.id === todoID;
		});
	};

	const getTodo = (todoID) => {
		return todos[_getTodoIndex(todoID)];
	};

	const updateTodo = (todoID, formData) => {
		const todoToUpdate = getTodo(todoID);
		const updatedTodoKeys = Object.keys(formData);
		const updatedTodoValues = Object.values(formData);
		updatedTodoKeys.forEach((keyToUpdate, index) => {
			todoToUpdate[keyToUpdate] = updatedTodoValues[index];
		});
	};

	const addTodo = (todo) => {
		todos.push(todo);
	};

	const addMultipleTodos = (todosArr) => {
		todosArr.forEach((todo) => {
			todos.push(todo);
		});
	};

	const deleteTodo = (todoID) => {
		todos.splice(_getTodoIndex(todoID), 1);
	};

	return {
		get title() {
			return title;
		},
		set title(value) {
			return (title = value);
		},
		get id() {
			return id;
		},
		get todos() {
			return todos;
		},
		addTodo,
		deleteTodo,
		getTodo,
		updateTodo,
		addMultipleTodos,
	};
};

const handleAddProject = (form) => {
	const todoFormData = getFormData(form);
	const newProject = Project(...Object.values(todoFormData));
	projectManager.addProject(newProject);
	renderProjects(projectManager.projects);
	handleProjectsNavigation(newProject.id);
	form.reset();
};

const handleDeleteProject = (projectID) => {
	projectManager.deleteProject(projectID);
	renderProjects(projectManager.projects);
	handleProjectsNavigation(
		document.querySelector('#default-project').dataset.projectId
	);
};

export { Project, handleAddProject, handleDeleteProject };
