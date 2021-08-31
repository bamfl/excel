export class Page {
	constructor(params) {
		this.params = params;
	}

	getRoot() {
		throw new Error('There is not getRoot method in component');
	}

	afterRender() {

	}

	destroy() {

	}
}