import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Layout from '@/layout/Index.vue';
import BlankLayout from '@/layout/BlankLayout.vue';

const files = require.context('../views', true, /\.vue$/); // 根据目录结构去搜索文件
const filesKey = files.keys(); // 获取整个目录结构
console.log(filesKey);

export const routes = [
	{
		path: '/',
		component: Layout,
		redirect: '/home',
		children: [
			{
				path: 'home',
				component: () => import('@/views/Home.vue'),
				name: 'Home',
				meta: { title: '首页', icon: 'el-icon-s-home' }
			},
			{
				path: 'test',
				component: BlankLayout,
				name: 'Test',
				meta: { title: '测试', icon: 'el-icon-s-home' },
				children: [
					{
						path: 'index',
						component: () => import('@/views/Test.vue'),
						name: 'Index',
						meta: { title: '测试' }
					},
					{
						path: 'second',
						component: () => import('@/views/test/second.vue'),
						name: 'Second',
						meta: { title: 'second' }
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
