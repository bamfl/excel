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
			listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
		});
	}

	toHTML() {
		return createTable(20);
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

	init() {
		super.init();
		
		this.selection = new TableSelection();
	}
}
