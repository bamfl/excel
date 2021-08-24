import { ExcelComponent } from '../../core/ExcelComponent';
import * as actions from '../../redux/actions';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor(root, options) {
    super(root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      ...options,
    });
  }

  toHTML() {
    return `
			<div class="icon">fx</div>
			<input class="input" />
		`;
  }

  onInput(event) {
    const text = event.target.value;
    this.$emit('formula:input', text.trim());

    const cellID = this.selectedCell.dataset.id;
    const cellValue = text;

    const dataCell = {
      id: cellID,
      value: cellValue,
    };

		this.$dispatch(actions.cellInput(dataCell));
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();

      const inputEl = this.root.el.querySelector('input');
      inputEl.blur();
      this.$emit('formula:done');
    }

    if (event.key === 'Tab') {
      event.preventDefault();
    }
  }

  init() {
    super.init();

    this.$on('table:input', (text) => {
      const inputEl = this.root.el.querySelector('input');
      inputEl.value = text.trim();
    });

    this.$on('table:select', (selectedCell) => {
      this.selectedCell = selectedCell;
      const inputEl = this.root.el.querySelector('input');
			console.log(this.selectedCell.textContent.trim());
      inputEl.value = this.selectedCell.textContent.trim();

    });
  }
}
