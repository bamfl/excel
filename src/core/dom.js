class Dom {
	constructor(selector) {
		if (typeof selector === 'string') {
			this.$el = document.querySelector(selector);
		} else {
			this.$el = selector;
		}
	}

	html(newHtml) {
		if (typeof newHtml === 'string') {
			this.$el.innerHTML = newHtml;
			return this;
		}

		return this.$el.innerHTML;
	}

	clear() {
		this.html('');

		return this;
	}

	append(node) {
		this.$el.appendChild(node.$el);
		
		return this;
	}
}
export function $(selector) {
	return new Dom(selector);
}

$.create = (tagName, classes) => {
	const el = document.createElement(tagName);

	if (classes) {
		el.classList.add(classes);
	}

	return $(el);
};