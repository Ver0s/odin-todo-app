import { v4 as uuidv4 } from 'uuid';

const Project = (title, id = uuidv4()) => {
	let todos = [];

	// create function to getTodo with a specific id so like getTodo(todoUUID)
	// TODO: make this function work
	// create function to update specific todo
	const getTodo = (todoID) => {
		return todos.filter((todo) => todo.id === todoID);
	};
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
	};
};

export { Project };
