const getFormData = (form) => {
	const formData = new FormData(form);
	// return Object.fromEntries(formData.entries());
	return [...formData.values()];
};

export { getFormData };
