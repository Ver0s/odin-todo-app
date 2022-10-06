import './styles/style.css';
import './styles/reset.css';
import { handleProjectsNavigation } from './modules/dom_creation/sidebar-dom';
import { renderProjects } from './modules/dom_creation/project-dom';
import { Project } from './modules/app_logic/project';
import { projectManager } from './modules/app_logic/project-manager';
import { checkForStorage } from './modules/app_logic/storage';

const setupDefaultProject = (defaultProject) => {
	const defaultProjectLi = document.querySelector('#default-project');
	defaultProjectLi.setAttribute('data-project-id', defaultProject.id);
	defaultProjectLi.textContent = defaultProject.title;
	projectManager.addProject(defaultProject);
	handleProjectsNavigation(defaultProject.id);
};

const initApp = (() => {
	checkForStorage('projects');
	renderProjects(projectManager.projects);
})();

export { setupDefaultProject };
