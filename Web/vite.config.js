/*
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-05-16 14:18:30
 * @LastEditTime: 2023-12-21 13:16:05
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
const { resolve } = require("path")

// https://vitejs.dev/config/
export default defineConfig({
	// plugins: [vue()], //查看 插件 API 获取 Vite 插件的更多细节 https://www.vitejs.net/guide/api-plugin.html
	plugins: [
		vue(),
		styleImport({
			libs: [{
				libraryName: 'element-plus',
				esModule: true,
				ensureStyleFile: true,
				resolveStyle: (name) => {
					name = name.slice(3)
					return `element-plus/packages/theme-chalk/src/${name}.scss`;
				},
				resolveComponent: (name) => {
					return `element-plus/lib/${name}`;
				},
			}]
		})
	],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"), // 设置为@ 则使用时为 "@/components/index.module.css"
			"@components": resolve(__dirname, "./src/components"), // 使用时为 "@components/HelloWorld.vue"
		},
	},
	server: {
		host: '0.0.0.0',
		port: 3000, // 本地服务端口
		https: false,
		strictPort: true ,// 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
		proxy: { // 代理
			'/api': {
				target: 'http://localhost:8080',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, '')
			}
		}
	}
})
