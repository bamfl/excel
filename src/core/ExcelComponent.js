import { DOMListener } from "./DOMListener";

export class ExcelComponent extends DOMListener {	
	constructor(root, options = {}) {
		super(root, options.listeners);
		this.name = options.name || '';
		this.prepare();
	}
	
	toHTML() {
		return ``;
	}

	prepare() {
	}

	init() {
		this.addDOMListeners();
	}

	destroy() {
		this.removeDOMListeners();
	}
}
