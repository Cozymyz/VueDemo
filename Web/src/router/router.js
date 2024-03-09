/*
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-05-18 15:16:50
 * @LastEditTime: 2024-03-08 16:47:40
 */
import {
	createRouter,
	createWebHistory
} from "vue-router"
// import Cookies from 'js-cookie'
import index from '../View/Index.vue'
import userView from '../View/UserView.vue'
import adminView from '../View/AdminView.vue'
import notFound from '../View/404.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
        {
            path: '/',
            component: index,
            children: [
                {
                    path: '/user',
                    component: userView
                },
                {
                    path: '/admin',
                    component: adminView
                },
            ]
        },
        {
            path: "/:pathMatch(.*)*",
            component: notFound
        },
    ]
})

// router.beforeEach((to, from, next) => {//登录验证
// 	if (to.matched.length !== 0) {
// 		if (to.path === '/login') return next();
// 		if (from.path === '/login') return next();
// 		const tokenStr = Cookies.get('token')
// 		if (!tokenStr) {
// 			return next('/login')
// 		}
// 		next()
// 	} else {
// 		return next('/404')
// 	}
// })

export default router