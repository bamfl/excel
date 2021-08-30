import '../scss/style.scss';
import '../scss/header.scss';
import '../scss/toolbar.scss';
import '../scss/table.scss';
import '../scss/formula.scss';
import '../scss/dashboard.scss';

import { Router } from '../core/routes/Router';
import { DashboardPage } from '../pages/DashboardPage';
import { ExcelPage } from '../pages/ExcelPage';

new Router('#app', {
	dashboard: DashboardPage,
	excel: ExcelPage
});
