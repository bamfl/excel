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
				throw new Error(`There is not ${this[method]} in ${this.name} component`);
			}

			this[method] = this[method].bind(this);
			this.root.on(listener, this[method]);
		});
	}

	removeDOMListeners() {
		this.listeners.forEach(listener => {
			const method = getMethodName(listener);

			this.root.off(listener, this[method]);
		});
	}
}

function getMethodName(eventName) {
	return 'on' + capitlize(eventName);
}