import { ExcelComponent } from '../../core/ExcelComponent';
import { mousedown } from './table.mousedown';
import { mousemove } from './table.mousemove';
import { mouseup } from './table.mouseup';
import { createTable } from './table.template';
import { TableSelection } from './TableSelection';
import * as actions from '../../redux/actions';
import { TOOLBAR_INPUT } from '../../redux/types';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor(root, options) {
    super(root, {
      name: 'Table',
      listeners: ['click', 'mousedown', 'mousemove', 'mouseup', 'keydown', 'input'],
      ...options,
    });
  }

  toHTML() {
    return createTable(20);
  }

  onClick(event) {
    const cell = event.target;

    if (event.target.matches('[data-id]')) {
      if (event.shiftKey) {
        this.selection.selectGroup(cell, this.root);
      } else {
        this.selection.select(cell);
      }
    }

    const selectedCell = this.selection.group[0];
    this.$emit('table:select', selectedCell);
  }

  onMousedown(event) {
    mousedown.call(this, event);
  }

  onMousemove(event) {
    mousemove.call(this, event);
  }

  onMouseup() {
    mouseup.call(this);
  }

  onKeydown(event) {
    if (event.shiftKey && event.key === 'Tab') {
      event.preventDefault();
      this.selection.selectOnLeft(this.root);
    } else if (event.key === 'ArrowRight' || event.key === 'Tab') {
      event.preventDefault();
      this.selection.selectOnRight(this.root);
    } else if (event.shiftKey && event.key === 'Enter') {
      return;
    } else if (event.key === 'Enter') {
      event.preventDefault();
      this.selection.selectDown(this.root);
    } else if (event.key === 'ArrowLeft') {
      this.selection.selectOnLeft(this.root);
    } else if (event.key === 'ArrowDown') {
      this.selection.selectDown(this.root);
    } else if (event.key === 'ArrowUp') {
      this.selection.selectUp(this.root);
    }

    const selectedCell = this.selection.group[0];
    this.$emit('table:select', selectedCell);
  }

  onInput(event) {
    const text = event.target.textContent;
    this.$emit('table:input', text.trim());

    const cellID = event.target.dataset.id;
    const cellValue = text;

    const dataCell = {
      id: cellID,
      value: cellValue,
    };

    this.$dispatch(actions.cellInput(dataCell));
  }

  onStoreLoad() {
    const changedCols = this.store.getState().colState;

    if (changedCols) {
      const colsKeys = Object.keys(changedCols);

      colsKeys.forEach((key) => {
        const columnItems = document.querySelectorAll(`[data-col="${key}"]`);

        columnItems.forEach((col) => {
          col.style.width = changedCols[key] + 'px';
        });
      });
    }

    const changedRows = this.store.getState().rowState;

    if (changedRows) {
      const rowsKeys = Object.keys(changedRows);

      rowsKeys.forEach((key) => {
        const row = document.querySelector(`[data-row="${key}"]`);
        row.style.height = changedRows[key] + 'px';
      });
    }

    const changedCells = this.store.getState().cellState;

    if (changedCells) {
      const cellKeys = Object.keys(changedCells);

      cellKeys.forEach((key) => {
        const cell = document.querySelector(`[data-id="${key}"]`);
        cell.textContent = changedCells[key].text;
      });
    }
  }

	onTollbarStylesChange() {
		const changedCells = this.store.getState().cellState;

    if (changedCells) {
      const cellKeys = Object.keys(changedCells);

      cellKeys.forEach((key) => {
        const cell = document.querySelector(`[data-id="${key}"]`);
				const cellStyles = changedCells[key];

				Object.keys(cellStyles).forEach(cssStyle => {
					if (cssStyle !== 'text') {
						cell.style[cssStyle] = cellStyles[cssStyle];
					}
				});
      });
    }
	}

  prepare() {
    this.selection = new TableSelection();
  }

  init() {
    super.init();

    const activeCell = this.root.el.querySelector('[data-id="A:1"]');
    this.selection.select(activeCell);

    this.$on('formula:input', (text) => {
      this.selection.group[0].textContent = text.trim();
    });

    this.$on('formula:done', () => {
      this.selection.select(this.selection.group[0]);
    });

    const selectedCell = this.selection.group[0];
    this.$emit('table:select', selectedCell);

    this.onStoreLoad();
		this.onTollbarStylesChange();


		this.$subscribe(() => {
			this.onTollbarStylesChange();
		});
  }
}
