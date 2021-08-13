import { $ } from "../../core/dom";

export class Excel {
	constructor(appSelector, options) {
		this.$appEl = $(appSelector);
		this.components = options.components || [];
	}

	getRoot() {
		const $root = $.create('div', 'excel');

		this.components.forEach(Component => {
			const $rootEl = $.create('div', Component.className);
			const component = new Component($rootEl);

			$rootEl.html(component.toHTML());
			$root.append($rootEl);
		});

		return $root;
	}

	render() {		
		this.$appEl.append(this.getRoot());
	}
}