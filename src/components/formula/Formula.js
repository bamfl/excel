import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {
	static className = 'excel__formula';
	
	toHTML() {
		return `
			<div class="icon">fx</div>
			<input class="input" />
		`;
	}
}
