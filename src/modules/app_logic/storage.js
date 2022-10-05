import { projectManager } from './project-manager';
import { Project } from './project';
import { Todo } from './todo';
import { setupDefaultProject } from '../..';
import { handleProjectsNavigation } from '../dom_creation/sidebar-dom';

const setupDefaultProjectFromStorage = (project) => {
	const defaultProjectLi = document.querySelector('#default-project');
	defaultProjectLi.setAttribute('data-project-id', project.id);
	defaultProjectLi.textContent = project.title;
	projectManager.addProject(project);
	handleProjectsNavigation(project.id);
};

const populateStorage = (key, obj) => {
	localStorage.setItem(key, JSON.stringify(obj));
};

// manage home project here
const checkForStorage = (storageItem) => {
	if (!localStorage.getItem(storageItem)) {
		setupDefaultProject('Home');
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
				setupDefaultProjectFromStorage(restoredProject);
			} else {
				projectManager.addProject(restoredProject);
			}
		});
	}
};

export { populateStorage, checkForStorage };
