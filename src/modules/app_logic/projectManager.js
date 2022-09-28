const projectManager = (() => {
	let projects = [];
	let currentProject;

	const _getProjectIndex = (projectID) => {
		return projects.findIndex((project) => {
			return project.id === projectID;
		});
	};

	const getProject = (projectID) => {
		// const filtered = projects.filter((project) => project.id === projectID);
		// return Object.assign({}, ...filtered);
		return projects[_getProjectIndex(projectID)];
	};

	const addProject = (project) => {
		projects.push(project);
	};

	const deleteProject = (projectID) => {
		projects.splice(_getProjectIndex(projectID), 1);
	};

	return {
		get projects() {
			return projects;
		},
		get currentProject() {
			return currentProject;
		},
		set currentProject(value) {
			return (currentProject = value);
		},
		getProject,
		addProject,
		deleteProject,
	};
})();

export { projectManager };
