import { ExcelComponent } from "../../core/ExcelComponent";

export class Header extends ExcelComponent {
	static className = 'excel__header';

	toHTML() {
		return `
			<input type="text" name="name" class="input" placeholder="Новая таблица"/>

			<div class="btns">
				<div class="btn btn-white"><span class="material-icons">logout</span></div>
				<div class="btn btn-white"><span class="material-icons">delete</span></div>
			</div>
		`;
	}
}