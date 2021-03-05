import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Layout from '@/layout/Index.vue';
import BlankLayout from '@/layout/BlankLayout.vue';
// const files = require.context('../views', true, /\.vue$/); // 根据目录结构去搜索文件
// const filesKey = files.keys(); // 获取整个目录结构
// console.log(filesKey);

export const routes = [
	{
		path: '/',
		component: Layout,
		redirect: 'home',
		children: [
			{
				path: 'home',
				component: () => import('@/views/Home.vue'),
				name: 'Home',
				meta: { title: '首页', icon: 'el-icon-s-home' }
			},
			{
				path: 'data',
				component: BlankLayout,
				// component: { render (h: any) { return h('router-view'); } },
				name: 'Data',
				redirect: 'table',
				meta: { title: '数据', icon: 'el-icon-s-data' },
				children: [
					{
						path: 'table',
						component: () => import('@/views/Table.vue'),
						name: 'Table',
						meta: { title: '表格' }
					},
					{
						path: 'form',
						component: () => import('@/views/Form.vue'),
						name: 'Form',
						meta: { title: '表单' }
					}
				]
			}

		]
	},
	{
		path: '/login',
		name: 'Login',
		hidden: true,
		component: () => import('@/views/Login.vue')
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
