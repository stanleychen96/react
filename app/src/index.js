import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/instagram'));
app.model(require('./models/content'));
app.model(require('./models/introduce'));
app.model(require('./models/layout'));
app.model(require('./models/imgcard'));

// 4. Router
app.router(require('./router'));


// 5. Start
app.start('#root');
