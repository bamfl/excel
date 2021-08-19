export function mousedown(event) {
  this.isClicked = true;

  if (event.target.classList.contains('column-resize')) {
    this.column = event.target.closest('[data-type="resizable"]');
    this.columnWidth = parseInt(getComputedStyle(this.column).width);
    this.positionXStart = event.clientX;
    this.column.querySelector('.column-resize').style.display = 'block';
    this.getColIndex = this.column.firstChild.nodeValue.trim();
    this.cells = document.querySelectorAll(`[data-col="${this.getColIndex}"]`);
    this.cells.forEach((cell) => {
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
