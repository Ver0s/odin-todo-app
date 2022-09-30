import { renderProjectLi } from './element-templates';
import { attachEventLitenersToProject } from './event-listeners';

const setProjectHeader = (projectName) => {
	const projectTitle = document.querySelector('#project-title');
	projectTitle.textContent = projectName;
};

// const addProjectToDOM = (project) => {
// 	const projectList = document.querySelector('.project-list');
// 	const projectLiElement = renderProjectLi(project);
// 	attachEventLitenersToProject(projectLiElement);
// 	projectList.appendChild(projectLiElement);
// };

const renderProjects = (projects) => {
	const projectList = document.querySelector('.project-list');
	// Condition is set to 1 here because of Home project
	if (projects.length === 1) {
		projectList.textContent = "You don't have any projects yet.";
	} else {
		projectList.replaceChildren();
		projects.forEach((project) => {
			// Prevent default project from appearing in unwanted place
			if (project.title === 'Home') return;
			const projectLi = renderProjectLi(project);
			attachEventLitenersToProject(projectLi);
			projectList.appendChild(projectLi);
		});
	}
};

export { setProjectHeader, renderProjects };
