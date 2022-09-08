import './styles/style.css';
import { v4 as uuidv4 } from 'uuid';

const Todo = (title, description, dueDate, priority, todoUUID = uuidv4()) => {
	return { title, description, dueDate, priority, todoUUID };
};

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

const addTask = document.querySelector('#add-task');

function renderTodo(title, description, dueDate, priority) {
	const todoTemplate = document.querySelector('#todo-item-template');
	const todoContent = todoTemplate.content.cloneNode(true);
	todoContent.querySelector('#title').textContent = title;
	todoContent.querySelector('#description').textContent = description;
	todoContent.querySelector('#due-date').textContent = dueDate;
	todoContent.querySelector('#priority').textContent = priority;

	const todoList = document.querySelector('.todo-list');
	todoList.insertBefore(todoContent, addTask);
}

const todo1 = Todo('todo1', 'asd', '2022-10-02', 'high');

addTask.addEventListener('click', () => {
	renderTodo(todo1.title, todo1.description, todo1.dueDate, todo1.priority);
});
