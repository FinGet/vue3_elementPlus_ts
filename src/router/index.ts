import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Layout from '@/layout/Index.vue'

const routes: Array<RouteRecordRaw> = [
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
			}
		]
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/Login.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
