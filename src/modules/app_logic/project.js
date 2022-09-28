import { v4 as uuidv4 } from 'uuid';
import { addProjectToDOM } from '../dom_creation/project-dom';
import { getFormData } from './logic-utils';

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
			// return [...todos];
		},
		addTodo,
		deleteTodo,
		getTodo,
		// updateTodo,
	};
};

const handleAddProject = (form) => {
	const todoFormData = getFormData(form);
	const newProject = Project(...todoFormData);
	addProjectToDOM(newProject.title);
	form.reset();
};

export { Project, handleAddProject };
