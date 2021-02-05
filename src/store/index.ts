import { createStore } from 'vuex';
import app from './modules/app';
import permission from './modules/permission';
import getters from './getters';
export default createStore({
	getters,
	modules: {
		app,
		permission
	}
});
