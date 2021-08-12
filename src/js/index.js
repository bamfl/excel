import '../scss/style.scss';
import '../scss/header.scss';
import '../scss/toolbar.scss';
import '../scss/table.scss';
import '../scss/formula.scss';
import '../scss/dashboard.scss';

import { Excel } from '../components/excel/Excel.js';
import { Header } from '../components/header/Header';
import { Toolbar } from '../components/tollbar/Toolbar';
import { Formula } from '../components/formula/Formula';
import { Table } from '../components/table/Table';

const excelApp = new Excel('#app', {
  components: [
    Header,
    Toolbar,
    Formula,
    Table,
  ],
});

excelApp.render();