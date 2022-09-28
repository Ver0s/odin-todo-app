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
		return todos.filter((todo) => todo.id === todoID);
	};
	// const updateTodo = (todoID, updatedProp, updatedValue) => {
	// 	const todoToUpdate = getTodo(todoID);
	// 	todoToUpdate[updatedProp] = updatedValue;
	// 	return todoToUpdate;
	// };
	// const addTodo = (title, description, priority, dueDate) => {
	// 	const newTodo = Todo(title, description, priority, dueDate);
	// 	todos.push(newTodo);
	// };
	const addTodo = (todo) => {
		todos.push(todo);
	};
	const deleteTodo = (todoID) => {
		todos = todos.filter((todo) => todo.id !== todoID);
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
