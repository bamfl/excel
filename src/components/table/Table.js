import { ExcelComponent } from '../../core/ExcelComponent';
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
		return createTable(20);
	}

	onClick(event) {
		// console.log('Table: onClick', event);
	}

	onMousedown(event) {
		this.isClicked = true;

		this.column = event.target.closest('[data-type="resizable"]');
		this.columnWidth = parseInt(getComputedStyle(this.column).width);

		this.positionXStart = event.clientX;
	}

	onMousemove(event) {
		if (this.isClicked) {
			const resizeX = this.positionXStart - event.clientX;

			this.column.style.width = this.columnWidth - resizeX + 'px';
		}
	}

	onMouseup(event) {
		this.isClicked = false;
	}
}
