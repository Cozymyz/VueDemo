/*
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-05-16 14:18:30
 */
import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/router'
import ElementPlus from 'element-plus'
import 'dayjs/locale/zh-cn' //中文
import locale from 'element-plus/es/locale/lang/zh-cn' //中文
import axios from 'axios'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus, { locale })
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
// app.use(axios)
app.config.globalProperties.axios=axios

app.mount('#app')