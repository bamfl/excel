const CODES = {
	A: 65,
	Z: 90
};

function getAtoZ(idx) {
	return String.fromCharCode(CODES.A + idx);
}

function createCells(cellsCount, rowsCount) {
	const cells = [];

	for (let i = 0; i < cellsCount; i++) {
		cells.push(`
			<div class="cell" 
				data-col="${getAtoZ(i)}" 
				data-id="${getAtoZ(i)}:${rowsCount}" contenteditable>
			</div>`);
	}

	return cells.join('');	
}

function createColumns(colsCount) {	
	const columns = [];

	for (let i = 0; i < colsCount; i++) {
		columns.push(`
			<div class="column" data-type="resizable">
				${getAtoZ(i)}
				<div class="column-resize">
					<div class="column-resize-line"></div>
				</div>
			</div>	
		`);
	}

	return columns.join('');
}

function createRow(num, cbFn) {
	return `
		<div class="row" data-type="resizable">
			<div class="row-info">
				${num}
				${num ? `<div class="row-resize"></div>` : ''}
			</div>
			<div class="row-data">${cbFn()}</div>
			${num ? `<div class="row-resize-line"></div>` : ''}
		</div>
	`;
}

export function createTable(rowsCount = 15) {
	const colsCount = CODES.Z - CODES.A + 1;

	let table = '';

	table += createRow('', () => createColumns(colsCount));

	for (let i = 0; i < rowsCount; i++) {
		table += createRow(i + 1, () => createCells(colsCount, i + 1));		
	}

	return table;
}
