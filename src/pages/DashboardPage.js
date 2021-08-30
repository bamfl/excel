import { Page } from '../core/routes/Page';

export class DashboardPage extends Page {
  constructor(params) {
    super(params);
  }

  getRoot() {
    const el = document.createElement('div');

    el.classList.add('dashboard');

    el.innerHTML = `
			<div class="dashboard__header">
				<h1>Excel dashboard</h1>
			</div>
			<div class="dashboard__new">
				<a href="#" class="dashboard__create">
					<span class="material-icons plus">add</span>
					<div>Новая таблица</div>
				</a>
			</div>
			<div class="dashboard__table table">
				<div class="table__header">
					<div>Название</div>
					<div>Дата открытия</div>
				</div>

				<ul class="table__list">
					<li class="record">
						<div>Таблица №1</div>
						<strong>09.08.2021</strong>
					</li>
					
					<li class="record">
						<div>Таблица №1</div>
						<strong>09.08.2021</strong>
					</li>
				</ul>
			</div>
		`;

    return el;
  }
}
