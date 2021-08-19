export class TableSelection {
	constructor() {
		this.group = [];
	}

	select(el) {
		this.group.forEach(item => item.classList.remove('selected'));

		this.group = [];
		this.group.push(el);
		el.focus();

		this.group.forEach(item => item.classList.add('selected'));
	}

	selectGroup(cellEnd, root) {
		const startCellId = this.group[0].dataset.id;
		const endCellId = cellEnd.dataset.id;

		let rowStart = +(startCellId.slice(0, 1).charCodeAt());
		let rowEnd = +(endCellId.slice(0, 1).charCodeAt());

		if (rowStart > rowEnd) {
			let oldRowStart = rowStart;
			let oldRowEnd = rowEnd;

			rowStart = oldRowEnd;
			rowEnd = oldRowStart;
		}

		let colStart = +(startCellId.slice(2));
		let colEnd = +(endCellId.slice(2));

		if (colStart > colEnd) {
			let oldColStart = colStart;
			let oldColEnd = colEnd;

			colStart = oldColEnd;
			colEnd = oldColStart;
		}

		this.group = [];

		for (let i = rowStart; i <= rowEnd; i++) {			
			for (let j = colStart; j <= colEnd; j++) {
				const col = String.fromCharCode(i);
				const row = j;

				const el = root.el.querySelector(`[data-id="${col}:${row}"]`);				

				this.group.push(el);
				this.group.forEach(item => item.classList.add('selected'));
			}
		}
	}

	selectOnRight(root) {
		const currentCellId = this.group[0].dataset.id;
		const currentColNum = currentCellId.slice(0, 1).charCodeAt();

		const nextRow = currentCellId.slice(2);
		const nextRol = String.fromCharCode(currentColNum + 1);

		const el = root.el.querySelector(`[data-id="${nextRol}:${nextRow}"]`);

		if (el) {
			this.select(el);
		}
	}

	selectOnLeft(root) {
		const currentCellId = this.group[0].dataset.id;
		const currentColNum = currentCellId.slice(0, 1).charCodeAt();

		const nextRow = currentCellId.slice(2);		
		const nextCol = String.fromCharCode(currentColNum - 1);

		const el = root.el.querySelector(`[data-id="${nextCol}:${nextRow}"]`);
		
		if (el) {
			this.select(el);
		}
	}

	selectDown(root) {
		const currentCellId = this.group[0].dataset.id;
		const currentRowNum = currentCellId.slice(2);

		const nextRow = +currentRowNum + 1;
		const nextCol = currentCellId.slice(0, 1);

		const el = root.el.querySelector(`[data-id="${nextCol}:${nextRow}"]`);
		
		if (el) {
			this.select(el);
		}
	}

	selectUp(root) {
		const currentCellId = this.group[0].dataset.id;
		const currentRowNum = currentCellId.slice(2);

		const nextRow = +currentRowNum - 1;
		const nextCol = currentCellId.slice(0, 1);

		const el = root.el.querySelector(`[data-id="${nextCol}:${nextRow}"]`);
		
		if (el) {
			this.select(el);
		}
	}
}
