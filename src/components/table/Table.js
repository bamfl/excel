import { ExcelComponent } from '../../core/ExcelComponent';
import { mousedown } from './table.mousedown';
import { mousemove } from './table.mousemove';
import { mouseup } from './table.mouseup';
import { createTable } from './table.template';
import { TableSelection } from './TableSelection';

export class Table extends ExcelComponent {
	static className = 'excel__table';

	constructor(root) {
		super(root, {
			name: 'Table',
			listeners: ['click', 'mousedown', 'mousemove', 'mouseup', 'keydown']
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
		} else if (event.key === 'ArrowLeft') {
			this.selection.selectOnLeft(this.root);
		} else if (event.key === 'ArrowDown') {
			this.selection.selectDown(this.root);
		} else if (event.key === 'ArrowUp') {
			this.selection.selectUp(this.root);
		} 
	}

	prepare() {
		this.selection = new TableSelection();
	}

	init() {
		super.init();
		
		const activeCell = this.root.el.querySelector('[data-id="A:1"]');
		this.selection.select(activeCell);
	}
}
