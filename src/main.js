import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// import 'element-ui/lib/theme-chalk/index.css'

// 新增代码：引入全部组件及样式
// import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@/assets/scss/index.scss'

const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).mount('#app')
