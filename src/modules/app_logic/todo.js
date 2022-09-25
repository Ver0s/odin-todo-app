import { v4 as uuidv4 } from 'uuid';
import { getFormData } from './logic-utils';
import { addTodoToDOM } from '../dom_creation/todo-dom';
import { renderProjectTodos } from '../dom_creation/project-dom';

const Todo = (title, description, priority, dueDate, id = uuidv4()) => {
	let isDone = false;
	const toggleDone = () => {
		isDone = !isDone;
	};
	return {
		get title() {
			return title;
		},
		set title(value) {
			return (title = value);
		},
		get description() {
			return description;
		},
		set description(value) {
			return (description = value);
		},
		get priority() {
			return priority;
		},
		set priority(value) {
			return (priority = value);
		},
		get dueDate() {
			return dueDate;
		},
		set dueDate(value) {
			return (dueDate = value);
		},
		get id() {
			return id;
		},
		get isDone() {
			return isDone;
		},
		toggleDone,
	};
};

const handleAddTodo = (form, project) => {
	const todoFormData = getFormData(form);
	const newTodo = Todo(...todoFormData);
	project.addTodo(newTodo);
	addTodoToDOM(newTodo);
	form.reset();
};

const handleDeleteTodo = (todoID, project) => {
	project.deleteTodo(todoID);
	renderProjectTodos(project.todos);
};

export { Todo, handleAddTodo, handleDeleteTodo };
