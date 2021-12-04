import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/common.less';
import element from './plugin/element';
import axios from '@/utils/request';
const app = createApp(App);
element(app);
app.config.performance = true;

app.config.globalProperties.$http = axios;

app.use(store);
app.use(router);
app.mount('#app');
