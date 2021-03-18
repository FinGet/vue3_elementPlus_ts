import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import '@/assets/css/common.less';
import locale from 'element-plus/lib/locale/lang/zh-cn';
import axios from '@/utils/request';
const app = createApp(App);
app.config.performance = true;
app.use(ElementPlus, { size: 'small', locale });

app.config.globalProperties.$http = axios;

app.use(store);
app.use(router);
app.mount('#app');
