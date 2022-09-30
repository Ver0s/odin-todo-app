import { showModal } from './dom-utils';
import { setProjectHeader } from './project-dom';
import { renderTodos } from './todo-dom';
import { projectManager } from '../app_logic/project-manager';
import { addProjectForm } from './element-templates';
import { attachEventLitenersToAddProjectForm } from './event-listeners';

// ELEMENTS FROM HTML TEMPLATE
const toggleSidebarBtn = document.querySelector('#toggle-sidebar-btn');
const addProjectBtn = document.querySelector('#add-project-btn');
const defaultProjectLi = document.querySelector('#default-project');
const todayTodosBtn = document.querySelector('#today-todos');
const thisWeekTodosBtn = document.querySelector('#this-week-todos');

// FUNCTIONS
const handleProjectsNavigation = (projectID) => {
	projectManager.currentProject = projectManager.getProject(projectID);
	setProjectHeader(projectManager.currentProject.title);
	renderTodos(projectManager.currentProject.todos);
};

// EVENT LISTENERS
defaultProjectLi.addEventListener('click', () => {
	const projectID = defaultProjectLi.dataset.projectId;
	handleProjectsNavigation(projectID);
});

toggleSidebarBtn.addEventListener('click', () => {
	const sidebar = document.querySelector('.sidebar');
	sidebar.classList.toggle('hidden');
});

addProjectBtn.addEventListener('click', () => {
	const addProjectFormElement = addProjectForm();
	attachEventLitenersToAddProjectForm(addProjectFormElement);
	showModal(addProjectFormElement);
});

export { handleProjectsNavigation };
