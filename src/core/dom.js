class Dom {
	constructor(selector) {
		if (typeof selector === 'string') {
			this.el = document.querySelector(selector);
		} else {
			this.el = selector;
		}
	}

	html(newHtml) {
		if (newHtml) {
			this.el.innerHTML = newHtml;

			return this;
		}

		return this.el.innerHTML;
	}

	append(node) {
		if (node instanceof Dom) {
			node = node.el;
		}

		this.el.append(node);

		return this;
	}

	clear() {
		this.html('');

		return this;
	}

	on(eventType, cb) {

		this.el.addEventListener(eventType, cb);
	}

	off(eventType, cb) {
		this.el.removeEventListener(eventType, cb);
	}
}

export function $(selector) {
	return new Dom(selector);
}

$.create = (tagName, classes = '') => {
	const el = document.createElement(tagName);

	if (classes) {
		el.classList.add(classes);
	}

	return $(el);
};
