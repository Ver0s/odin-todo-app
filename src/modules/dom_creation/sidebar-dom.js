import { showElement, hideElement, showModal, hideModal } from './dom-utils';
import { handleAddProject } from '../app_logic/project';
import { setProjectHeader, renderProjectTodos } from './project-dom';
import { projectManager } from '../app_logic/projectManager';
import { addProjectForm } from './elementTemplates';

const addProjectBtn = document.querySelector('#add-project-btn');
const toggleSidebarBtn = document.querySelector('#toggle-sidebar-btn');

toggleSidebarBtn.addEventListener('click', () => {
	const sidebar = document.querySelector('.sidebar');
	sidebar.classList.toggle('hidden');
});

document.addEventListener('submit', (e) => {
	e.preventDefault();
	handleAddProject(e.target);
	hideModal();
});

// Project navigation
document.addEventListener('click', (e) => {
	const target = e.target;
	if (target.id === 'add-project-btn') {
		showModal(addProjectForm());
	}
	if (target.className === 'project-item') {
		// MOVE ALL OF THE ABOVE INTO SEPERATE FUNCTION
		const projectID = target.closest('.project-item').dataset.projectId;
		// change current project
		projectManager.currentProject = projectManager.getProject(projectID);
		// setProjectHeader
		setProjectHeader(projectManager.currentProject.title);
		// renderProjectTodos
		renderProjectTodos(projectManager.currentProject.todos);
	}
});
