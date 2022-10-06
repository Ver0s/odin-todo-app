import { projectManager } from './project-manager';
import { Project } from './project';
import { Todo } from './todo';
import { setupDefaultProject } from './init-functions';

const populateStorage = (key, obj) => {
	localStorage.setItem(key, JSON.stringify(obj));
};

// manage home project here
const checkForStorage = (storageItem) => {
	if (!localStorage.getItem(storageItem)) {
		const defaultProject = Project('Home');
		setupDefaultProject(defaultProject);
	} else {
		const parsedItem = JSON.parse(localStorage.getItem(storageItem));
		parsedItem.forEach((item) => {
			const restoredProjectTodos = [];
			item.todos.forEach((todo) => {
				const restoredTodo = Todo(
					todo.title,
					todo.description,
					todo.priority,
					todo.dueDate,
					todo.id
				);
				restoredTodo.isDone = todo.isDone;
				restoredProjectTodos.push(restoredTodo);
			});
			const restoredProject = Project(item.title, item.id);
			restoredProject.addMultipleTodos(restoredProjectTodos);
			if (restoredProject.title === 'Home') {
				setupDefaultProject(restoredProject);
			} else {
				projectManager.addProject(restoredProject);
			}
		});
	}
};

export { populateStorage, checkForStorage };
