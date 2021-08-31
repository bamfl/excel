import { Page } from '../core/routes/Page';
import { createDashboardList } from './dashboard.functions';

export class DashboardPage extends Page {
  constructor(params) {
    super(params);
  }

  getRoot() {
		const newTableKey = Date.now().toString();

    const el = document.createElement('div');

    el.classList.add('dashboard');

    el.innerHTML = `
			<div class="dashboard__header">
				<h1>Excel Dashboard</h1>
			</div>
			<div class="dashboard__new">
				<a href="#excel/${newTableKey}" class="dashboard__create">
					<span class="material-icons plus">add</span>
					<div>Новая таблица</div>
				</a>
			</div>
			${createDashboardList()}
		`;

    return el;
  }
}
