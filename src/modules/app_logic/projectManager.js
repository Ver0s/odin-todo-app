const projectManager = (() => {
	let projects = [];
	let currentProject;
	// maybe add function to set current project
	const getProject = (projectID) => {
		return projects.filter((project) => project.id === projectID);
	};

	const addProject = (project) => {
		projects.push(project);
	};

	const deleteProject = (projectID) => {
		projects = projects.filter((project) => project.id !== projectID);
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
