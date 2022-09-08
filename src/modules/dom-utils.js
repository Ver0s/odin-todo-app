// https://dev.to/ahmedadel/custom-javascript-createelement-function-244f
const createElement = (initObj) => {
	let element = document.createElement(initObj.tag);
	for (const prop in initObj) {
		if (prop === 'childNodes') {
			initObj.childNodes.forEach(function (node) {
				element.appendChild(node);
			});
		} else {
			element[prop] = initObj[prop];
		}
	}
	return element;
};

export { createElement };
