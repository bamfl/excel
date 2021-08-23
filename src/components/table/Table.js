import { ExcelComponent } from '../../core/ExcelComponent';
import { mousedown } from './table.mousedown';
import { mousemove } from './table.mousemove';
import { mouseup } from './table.mouseup';
import { createTable } from './table.template';
import { TableSelection } from './TableSelection';

export class Table extends ExcelComponent {
	static className = 'excel__table';

	constructor(root, options) {
		super(root, {
			name: 'Table',
			listeners: ['click', 'mousedown', 'mousemove', 'mouseup', 'keydown', 'input'],
			...options
		});
	}

	toHTML() {
		return createTable(20);
	}

	onClick(event) {
		const cell = event.target;

		if (event.target.matches('[data-id]')) {
			if (event.shiftKey) {
				this.selection.selectGroup(cell, this.root);
			} else {
				this.selection.select(cell);
			}
		}

		const selectedCell = this.selection.group[0];
		this.$emit('table:select', selectedCell);
		this.$dispatch({type: 'TEST'});
	}

	onMousedown(event) {
		mousedown.call(this, event);		
	}

	onMousemove(event) {
		mousemove.call(this, event);
	}

	onMouseup() {
		mouseup.call(this);
	}

	onKeydown(event) {
		if (event.shiftKey && event.key === 'Tab') {
			event.preventDefault();
			this.selection.selectOnLeft(this.root);

		} else if (event.key === 'ArrowRight' || event.key === 'Tab') {
			event.preventDefault();
			this.selection.selectOnRight(this.root);
			

		} else if (event.shiftKey && event.key === 'Enter') {
			return;
			
		}	else if (event.key === 'Enter') {
			event.preventDefault();
			this.selection.selectDown(this.root);
			
		} else if (event.key === 'ArrowLeft') {
			this.selection.selectOnLeft(this.root);
		} else if (event.key === 'ArrowDown') {
			this.selection.selectDown(this.root);
		} else if (event.key === 'ArrowUp') {
			this.selection.selectUp(this.root);
		}

		const selectedCell = this.selection.group[0];
		this.$emit('table:select', selectedCell);
	}

	onInput(event) {
		const text = event.target.textContent;
		this.$emit('table:input', text.trim());
	}

	prepare() {
		this.selection = new TableSelection();
	}

	init() {
		super.init();
		
		const activeCell = this.root.el.querySelector('[data-id="A:1"]');
		this.selection.select(activeCell);

		this.$on('formula:input', text => {
			this.selection.group[0].textContent = text.trim();
		});

		this.$on('formula:done', () => {
			this.selection.select(this.selection.group[0]);
		});

		const selectedCell = this.selection.group[0];
		this.$emit('table:select', selectedCell);

		this.$subscribe(state => {
			console.log('TableState', state);
		});
	}
}
