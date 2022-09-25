const createElement = (template) => {
	return document.createRange().createContextualFragment(template);
};

const showElement = (el) => {
	el.classList.remove('hidden');
};

const hideElement = (el) => {
	el.classList.add('hidden');
};

export { createElement, showElement, hideElement };
