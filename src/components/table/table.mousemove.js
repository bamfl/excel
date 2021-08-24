import * as actions from "../../redux/actions";

export function mousemove(event) {
	if (this.isClicked) {
    if (this.column) {
      const resizeX = this.positionXStart - event.clientX;
      this.column.style.width = this.columnWidth - resizeX + 'px';

      this.cells.forEach((cell) => {
        cell.style.width = this.columnWidth - resizeX + 'px';
      });

      const dataColID = this.column.dataset.col;
      const colWidth = this.columnWidth - resizeX;

      const dataCol = {
        id: dataColID,
        value: colWidth,
      };

      document.onmouseup = () => {
        this.$dispatch(actions.colResize(dataCol));
      };

    } else if (this.row) {
      const resizeY = this.positionYStart - event.clientY;
      this.row.style.height = this.rowHeight - resizeY + 'px';

      const dataRowID = this.row.dataset.row;
			const rowHeight = this.rowHeight - resizeY;

			const dataRow = {
        id: dataRowID,
        value: rowHeight,
      };

			document.onmouseup = () => {
        this.$dispatch(actions.rowResize(dataRow));
      };
    }
  }
}
