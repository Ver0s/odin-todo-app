const createElement = (template) => {
	return document.createRange().createContextualFragment(template);
};

const showElement = (el) => {
	el.classList.remove('hidden');
};

const hideElement = (el) => {
	el.classList.add('hidden');
};

const showModal = (form) => {
	const modal = document.querySelector('.modal');
	modal.classList.remove('hidden');
	modal.appendChild(form);
};

const hideModal = () => {
	const modalMain = document.querySelector('.modal');
	modalMain.classList.add('hidden');
	modalMain.firstElementChild.remove();
};

export { createElement, showElement, hideElement, showModal, hideModal };
