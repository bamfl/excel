import * as actions from "../../redux/actions";

export function mousemove(event) {
  if (this.isClicked) {
    if (this.column) {
      const resizeX = this.positionXStart - event.clientX;
      this.column.style.width = this.columnWidth - resizeX + 'px';

      this.cells.forEach((cell) => {
        cell.style.width = this.columnWidth - resizeX + 'px';
      });

      const dataID = this.column.dataset.col;
      const colWidth = this.columnWidth - resizeX;

      const dataCol = {
        id: dataID,
        value: colWidth,
      };

      document.onmouseup = () => {
        this.$dispatch(actions.tableResize(dataCol));
      };
    } else if (this.row) {
      const resizeY = this.positionYStart - event.clientY;
      this.row.style.height = this.rowHeight - resizeY + 'px';
    }
  }
}
