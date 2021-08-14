import { $ } from "../../core/dom";

export class Excel {
	constructor(appSelector, options) {
		this.appEl = $(appSelector);
		this.components = options.components || [];
	}

	getRoot() {
		const root = $.create('div', 'excel');

		this.components = this.components.map(Component => {
			const componentEl = $.create('div', Component.className);		
			const component = new Component(componentEl);

			componentEl.html(component.toHTML());
			root.append(componentEl);

			return component;
		});
		
		return root;
	}

	render() {
		this.appEl.append(this.getRoot());

		this.components.forEach(component => component.init());
	}
}
