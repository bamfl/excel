export class TableSelection {
	constructor() {
		this.group = [];
	}

	select(el) {
		this.group.forEach(item => item.classList.remove('selected'));

		this.group = [];
		this.group.push(el);

		this.group.forEach(item => item.classList.add('selected'));

		console.log(this.group);
	}

	selectGroup(cellEnd, root) {
		const rowCurrent = (this.group[0].dataset.id).replace(/[^\d]/g, '');
		const rowEnd = (cellEnd.dataset.id).replace(/[^\d]/g, '');

		const currentId = this.group[0].dataset.id;
		const cellEndId = cellEnd.dataset.id;

		this.group = [];
		
		if (rowCurrent === rowEnd) {
			let rowFrom = +(currentId.slice(0, 1).charCodeAt());
			let rowTo = +(cellEndId.slice(0, 1).charCodeAt());

			if (rowFrom > rowTo) {
				let oldRowFrom = rowFrom;
				let oldRowTo = rowTo;

				rowFrom = oldRowTo;
				rowTo = oldRowFrom;
			}

			const row = rowCurrent;

			for (let i = rowFrom; i <= rowTo; i++) {
				const col = String.fromCharCode(i);
				const el = root.el.querySelector(`[data-id="${col}:${row}"]`);

				this.group.push(el);
			}
		} else {
			let colFrom = +(currentId.slice(2));
			let colTo = +(cellEndId.slice(2));

			if (colFrom > colTo) {
				let oldColFrom = colFrom;
				let oldColTo = colTo;

				colFrom = oldColTo;
				colTo = oldColFrom;
			}

			const col = currentId.slice(0, 1);

			for (let i = colFrom; i <= colTo; i++) {
				const row = i;

				const el = root.el.querySelector(`[data-id="${col}:${row}"]`);

				this.group.push(el);
			}
		}
		
		this.group.forEach(item => item.classList.add('selected'));
		console.log(this.group);
	}
}
