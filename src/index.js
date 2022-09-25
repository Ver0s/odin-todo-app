import './styles/style.css';
import './styles/reset.css';
import './modules/dom_creation/todo-dom';
import './modules/dom_creation/sidebar-dom';
import { setProjectHeader } from './modules/dom_creation/project-dom';
import { Project } from './modules/app_logic/project';
import { projectManager } from './modules/app_logic/projectManager';

const initApp = (() => {
	const homeProject = Project('Home');
	projectManager.addProject(homeProject);
	projectManager.currentProject = homeProject;
	setProjectHeader(projectManager.currentProject.title);
})();
