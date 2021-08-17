import { ExcelComponent } from '../../core/ExcelComponent';
import { mousedown } from './table.mousedown';
import { mousemove } from './table.mousemove';
import { mouseup } from './table.mouseup';
import { createTable } from './table.template';

export class Table extends ExcelComponent {
	static className = 'excel__table';

	constructor(root) {
		super(root, {
			name: 'Table',
			listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
		});

		this.isClicked = false;
	}

	toHTML() {
		return createTable(1000);
	}

	onClick() {
		// console.log('Table: onClick', event);
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
}
