import { handleProjectsNavigation } from '../dom_creation/sidebar-dom';
import { projectManager } from './project-manager';
import { checkForStorage } from './storage';
import { renderProjects } from '../dom_creation/project-dom';

const setupDefaultProject = (defaultProject) => {
	const defaultProjectLi = document.querySelector('#default-project');
	defaultProjectLi.setAttribute('data-project-id', defaultProject.id);
	defaultProjectLi.textContent = defaultProject.title;
	projectManager.addProject(defaultProject);
	handleProjectsNavigation(defaultProject.id);
};

const setupSidebar = () => {
	if (window.matchMedia('(max-width: 960px)').matches) {
		const sidebar = document.querySelector('.sidebar');
		sidebar.classList.add('hidden');
	}
};

const initApp = () => {
	setupSidebar();
	checkForStorage('projects');
	renderProjects(projectManager.projects);
};

export { initApp, setupDefaultProject };
