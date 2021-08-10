class Dom {
	constructor(selector) {
		if (typeof selector === 'string') {
			this.$el = document.querySelector(selector);
		} else {
			this.$el = selector;
		}
	}

	html(html) {
		if (typeof html === 'string') {
			this.$el.innerHTML = html;
			return this;
		}

		return this.el.innerHTML;
	}

	clear() {
		this.html('');
		return this;
	}

	append() {
		
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