class Dom {

}

export function $() {
	return Dom();
}

$.create = (tagName, classes = '') => {
	const el = document.createElement(tagName);

	if (classes) {
		el.classList.add(classes);
	}

	return el;
};
