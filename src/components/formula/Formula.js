import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {
	static className = 'excel__formula';

	constructor(root) {
		super(root, {
			name: 'Formula',
			listeners: ['input', 'click']
		});
	}
	
	toHTML() {
		return `
			<div class="icon">fx</div>
			<input class="input" />
		`;
	}

	onInput(event) {
		console.log('Formula: onInput', event.target.value);
	}

	onClick() {
		console.log('Formula: onClick');
	}
}
