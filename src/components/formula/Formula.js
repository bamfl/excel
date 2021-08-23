import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {
	static className = 'excel__formula';

	constructor(root, options) {
		super(root, {
			name: 'Formula',
			listeners: ['input', 'keydown'],
			...options
		});
	}
	
	toHTML() {
		return `
			<div class="icon">fx</div>
			<input class="input" />
		`;
	}

	onInput(event) {
		const text = event.target.value;
		this.$emit('formula:input', text.trim());
	}

	onKeydown(event) {
		if(event.key === 'Enter') {
			event.preventDefault();

			const inputEl = this.root.el.querySelector('input');
			inputEl.blur();
			this.$emit('formula:done');
		}

		if (event.key === 'Tab') {
			event.preventDefault();
		}
	}

	init() {
		super.init();

		this.$on('table:input', (text) => {
			const inputEl = this.root.el.querySelector('input');
			inputEl.value = text.trim();
		});

		this.$on('table:select', (selectedCell) => {
			const inputEl = this.root.el.querySelector('input');
			inputEl.value = selectedCell.textContent.trim();
		});
	}
}
