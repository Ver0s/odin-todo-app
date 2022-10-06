const createElement = (template) => {
	return document.createRange().createContextualFragment(template);
};

const focusOnFirstInput = (formElement) => {
	const firstInput = formElement.querySelector('input:first-of-type');
	firstInput.focus();
};

const showModal = (form) => {
	const modal = document.querySelector('.modal');
	modal.classList.remove('hidden');
	modal.appendChild(form);
	focusOnFirstInput(modal.querySelector('form'));
};

const hideModal = () => {
	const modalMain = document.querySelector('.modal');
	modalMain.classList.add('hidden');
	modalMain.firstElementChild.remove();
};

export { createElement, showModal, hideModal, focusOnFirstInput };
