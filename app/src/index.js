// 版权;eslint; 取名字;留白;state位置;style替换className;版本升级;title;
import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// 整理
app.model(require('./models/instagram'));
app.model(require('./models/content'));
app.model(require('./models/introduce'));
app.model(require('./models/layout'));
app.model(require('./models/imgcard'));
app.model(require('./models/headerbar'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
