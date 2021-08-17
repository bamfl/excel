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

	onClick() {
		// console.log('Table: onClick', event);
	}

	onMousedown(event) {
		this.isClicked = true;

		if (event.target.classList.contains('column-resize')) {
			this.column = event.target.closest('[data-type="resizable"]');
			this.columnWidth = parseInt(getComputedStyle(this.column).width);
			this.positionXStart = event.clientX;
			this.column.querySelector('.column-resize').style.display = 'block';

			this.getColIndex = (this.column.firstChild.nodeValue.trim().charCodeAt() - 64);
			this.cells = document.querySelectorAll(`[data-col="${this.getColIndex}"]`);
			this.cells.forEach(cell => {
				cell.style.borderRight = '1px solid #88b8ff';
			});

		} else if (event.target.classList.contains('row-resize')) {
			this.row = event.target.closest('[data-type="resizable"]');
			this.rowHeight = parseInt(getComputedStyle(this.row).height);
			this.positionYStart = event.clientY;
			this.row.querySelector('.row-resize-line').style.display = 'block';
			this.row.querySelector('.row-resize').style.display = 'block';
		}
	}

	onMousemove(event) {
		if (this.isClicked) {
			if (this.column) {
				const resizeX = this.positionXStart - event.clientX;
				this.column.style.width = this.columnWidth - resizeX + 'px';

				this.cells.forEach(cell => {
					cell.style.width = this.columnWidth - resizeX + 'px';
				});

			} else if (this.row) {
				const resizeY = this.positionYStart - event.clientY;	
				this.row.style.height = this.rowHeight - resizeY + 'px';
			}
		}
	}

	onMouseup() {
		this.isClicked = false;

		if (this.row) {
			this.row.querySelector('.row-resize-line').style.display = '';
			this.row.querySelector('.row-resize').style.display = '';
			this.row = null;
		} else if (this.column) {
			this.cells.forEach(cell => {
				cell.style.borderRight = '';
			});
			this.column.querySelector('.column-resize').style.display = '';
			this.column = null;
		}
	}
}
