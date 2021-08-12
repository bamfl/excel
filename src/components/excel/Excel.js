import { $ } from "../../core/dom";

export class Excel {
	constructor(appSelector, options) {
		this.$appEl = document.querySelector(appSelector);
		this.components = options.components || [];
	}

	static className = 'excel';

	getRoot() {
		// const $root = document.createElement('div');
		// $root.classList.add(this.className);
		const $root = $.create('div', this.className);

		this.components.forEach(Component => {
			// const $rootEl = document.createElement('div');
			// $rootEl.classList.add(Component.className);
			const $rootEl = $.create('div', Component.className);

			const component = new Component($rootEl);
			$rootEl.innerHTML = component.toHTML();

			$root.append($rootEl);
		});

		return $root;
	}

	render() {		
		this.$appEl.append(this.getRoot());
	}
}