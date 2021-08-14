import { $ } from "../../core/dom";

export class Excel {
	constructor(appSelector, options) {
		this.appEl = $(appSelector);
		this.components = options.components || [];
	}

	getRoot() {
		const root = $.create('div', 'excel');

		this.components.forEach(Component => {
			const componentEl = $.create('div', Component.className);		
			const component = new Component(componentEl);

			componentEl.html(component.toHTML());
			root.append(componentEl);
		});
		
		return root;
	}

	render() {
		this.appEl.append(this.getRoot());
	}
}
