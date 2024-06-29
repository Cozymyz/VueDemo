/*
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2024-01-01 12:24:07
 * @LastEditTime: 2024-06-28 23:01:43
 */
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'dayjs/locale/zh-cn' //中文
import locale from 'element-plus/lib/locale/lang/zh-cn' //中文
import vuexLazyLoad from './plugins/vuexLazyLoad.js'
import router from "./router/router.js"
import store from "./store/index.js"

const app = createApp(App)
app.config.globalProperties.$host = "http://localhost:8080"
app.use(router)
app.use(store)
app.use(vuexLazyLoad)
app.use(ElementPlus, { locale })
app.use(ElementPlus, { size: 'small', zIndex: 3000 })

app.mount('#app')