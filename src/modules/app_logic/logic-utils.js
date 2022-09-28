const getFormData = (form) => {
	const formData = new FormData(form);
	return Object.fromEntries(formData.entries());
};

export { getFormData };
