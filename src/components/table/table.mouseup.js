export function mouseup() {
  this.isClicked = false;

  if (this.row) {
    this.row.querySelector('.row-resize-line').style.display = '';
    this.row.querySelector('.row-resize').style.display = '';
    this.row = null;
  } else if (this.column) {
    this.cells.forEach((cell) => {
      cell.style.borderRight = '';
    });
    this.column.querySelector('.column-resize').style.display = '';
    this.column = null;
  }
}
