import { $ } from "../../core/dom";
import { Emitter } from '../../core/Emitter';

export class Excel {
	constructor(appSelector, options) {
		this.appEl = $(appSelector);
		this.components = options.components || [];
		this.emitter = new Emitter();
	}

	getRoot() {
		const root = $.create('div', 'excel');

		const componentOptions = {
			emitter: this.emitter
		};

		this.components = this.components.map(Component => {
			const componentEl = $.create('div', Component.className);		
			const component = new Component(componentEl, componentOptions);

			componentEl.html(component.toHTML());
			root.append(componentEl);

			return component;
		});
		
		return root;
	}

	render() {
		this.appEl.append(this.getRoot());

		this.components.forEach(component => component.init());
		// this.components.forEach(component => component.destroy());
	}

	destroy() {
		this.components.forEach(component => component.destroy());
	}
}
