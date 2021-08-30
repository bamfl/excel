import { DOMListener } from "./DOMListener";

export class ExcelComponent extends DOMListener {
	constructor(root, options = {}) {
		super(root, options.listeners);
		this.name = options.name || '';
		this.prepare();
		this.emitter = options.emitter;
		this.unsubs = [];
		this.store = options.store;
		this.storeSub = null;
	}
	
	toHTML() {
		return ``;
	}

	$emit(event, ...args) {
		this.emitter.emit(event, ...args);
	}

	$on(event, fn) {
		const unsub = this.emitter.subscribe(event, fn);
		this.unsubs.push(unsub);
	}

	$dispatch(action) {
		this.store.dispatch(action);
	}

	$subscribe(fn) {
		this.storeSub = this.store.subscribe(fn);
	}

	prepare() {}

	init() {
		this.addDOMListeners();
	}

	destroy() {
		this.removeDOMListeners();
		this.unsubs.forEach(unsub => unsub());
		this.storeSub ? this.storeSub() : '';
	}
}
