import Vue from 'vue'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Read from '../pages/read.vue'

const routes =  [
	{
		name: 'home',
		path: '/homes',
		component: Home
	},
	{
		name: 'about',
		path: '/about',
		component: About
	},
	{
		name: 'read',
		path: '/read/:nomor',
		component : Read,
		props : true
	}
]

const router = new VueRouter({
    linkActiveClass: 'active', 
    mode: 'history',
    routes
})

export default router