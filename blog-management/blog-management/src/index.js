/**
 * 2018-01-08 StanleyChen
 */

import dva from 'dva';
import './index.css';
import router from './router';
import login from './models/login';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(login);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
