const CODES = {
	A: 65,
	Z: 90
};

function getAtoZ(idx) {
	return String.fromCharCode(CODES.A + idx);
}

function createCells(cellsCount) {
	const cells = [];

	for (let i = 0; i < cellsCount; i++) {
		cells.push(`<div class="cell" contenteditable></div>`);
	}

	return cells.join('');	
}

function createColumns(colsCount) {	
	const columns = [];

	for (let i = 0; i < colsCount; i++) {
		columns.push(`<div class="column">${getAtoZ(i)}</div>`);
	}

	return columns.join('');
}

function createRow(num, cbFn) {
	return `
		<div class="row">
			<div class="row-info">${num}</div>
			<div class="row-data">${cbFn()}</div>
		</div>
	`;
}

export function createTable(rowsCount = 15) {
	const colsCount = CODES.Z - CODES.A + 1;

	let table = '';

	table += createRow('', () => createColumns(colsCount));

	for (let i = 0; i < rowsCount; i++) {
		table += createRow(i + 1, () => createCells(colsCount));		
	}

	return table;
}
