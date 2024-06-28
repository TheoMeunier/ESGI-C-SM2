import { routes } from './src/router.js';
import JODom from './core/JoDOM.js';
import './assets/css/app.scss';

JODom.render(document.getElementById('root'), routes);
