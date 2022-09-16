import { v4 as uuidv4 } from 'uuid';

const Project = (title, projectUUID = uuidv4()) => {
	const todos = [];
	// const addTodos = (...addedTodos) => {
	// 	addedTodos.forEach((addedTodo) => todos.push(addedTodo));
	// };
	const addTodo = (todo) => {
		todos.push(todo);
	};
	const removeTodo = (todoIndex) => {
		// get todo by its unique id and delete from todos
		todos.splice(todoIndex, 1);
	};

	return { title, todos, addTodo, removeTodo, projectUUID };
};

export default Project;
