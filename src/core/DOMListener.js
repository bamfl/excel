import { capitlize } from "./utils";

export class DOMListener {
	constructor(root, listeners = []) {
		if (!root) {
			throw new Error('No root provided for DOMListener');
		}

		this.root = root;
		this.listeners = listeners;
	}

	addDOMListeners() {
		this.listeners.forEach(listener => {
			const method = getMethodName(listener);

			if (!this[method]) {
				throw new Error(`There is not ${[method]} method in ${this.name} Component`);
			}

			this.root.on(listener, this[method].bind(this));
		});
	}

	removeDOMListeners() {

	}
}

function getMethodName(eventName) {
	return 'on' + capitlize(eventName);
}