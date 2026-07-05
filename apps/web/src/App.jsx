// Shape router.
// To switch shapes: change `shape` in brand.js → hot reload switches instantly.
// To customise a shape: edit files in src/templates/<shape>/ (done by /3-build).
// /3-build may also restructure this file if the app outgrows the three shapes.
import { brand } from './brand.js';
import SearchApp from './templates/search/App.jsx';
import ToolApp from './templates/tool/App.jsx';
import DashboardApp from './templates/dashboard/App.jsx';

const shapes = {
  search: SearchApp,
  tool: ToolApp,
  dashboard: DashboardApp,
};

export default function App() {
  const ActiveShape = shapes[brand.shape] ?? SearchApp;
  return <ActiveShape />;
}
