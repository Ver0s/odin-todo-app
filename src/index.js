import './styles/style.css';
import './styles/reset.css';
import './modules/dom_creation/todo-dom';
import './modules/dom_creation/sidebar-dom';
import { setProjectHeader } from './modules/dom_creation/project-dom';
import { Project } from './modules/app_logic/project';
import { projectManager } from './modules/app_logic/projectManager';
import { renderProjectLi } from './modules/dom_creation/elementTemplates';

const initApp = (() => {
	// Create initial project and add it to upper navigation + set header name
	const mainFilters = document.querySelector('.main-filters');
	const homeProject = Project('Home');
	const projectLiElement = renderProjectLi(homeProject);
	mainFilters.insertBefore(projectLiElement, mainFilters.firstChild);
	projectManager.addProject(homeProject);
	projectManager.currentProject = homeProject;
	setProjectHeader(projectManager.currentProject.title);
	// add code for initial storage here
})();
