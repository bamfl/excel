export function mousemove(event) {
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