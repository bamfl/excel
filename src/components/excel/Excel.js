import { $ } from "../../core/dom";
import { Emitter } from '../../core/Emitter';

export class Excel {
	constructor(options) {
		this.components = options.components || [];
		this.store = options.store;
		this.emitter = new Emitter();
	}

	getRoot() {
		const root = $.create('div', 'excel');

		const componentOptions = {
			emitter: this.emitter,
			store: this.store
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

	init() {
		this.components.forEach(component => component.init());
	}

	destroy() {
		this.components.forEach(component => component.destroy());
	}
}
