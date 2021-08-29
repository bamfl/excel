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
    let text = event.target.value;

		if (text.startsWith('=')) {
			try {
				text = eval(text.slice(1));				
			} catch (error) {}
		}

		if (typeof text === 'string') {
			text = text.trim();
		}

    this.$emit('formula:input', text);

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

			if (typeof inputEl.value === 'string') {
				inputEl.value = inputEl.value.trim();
			}

      inputEl.value = text;
    });

    this.$on('table:select', async (selectedCell) => {
      this.selectedCell = await selectedCell;
      const inputEl = this.root.el.querySelector('input');
      inputEl.value = this.selectedCell.textContent.trim();
    });
  }
}
