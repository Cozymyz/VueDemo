<!--
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-05-16 14:18:30
 * @LastEditTime: 2024-05-16 11:08:33
-->
<template>
	<div class="app-container">
		<el-container>
			<!-- 侧边栏 -->
			<el-aside style="width: 150px;">
				<!-- <div class="toggle-button" @click="toggleCollapse">|||</div> -->
				<!-- 侧边栏菜单区域 -->
				<el-menu background-color="#2d3a4b" text-color="#fff" active-text-color="#409EFF" unique-opened
 router>
					<el-menu-item index="/user">UserManage</el-menu-item>
					<el-menu-item index="/admin">AdminManage</el-menu-item>
				</el-menu>
			</el-aside>
			<!-- 右侧内容主体 -->
			<el-main>
				<!-- 路由占位符 -->
				<router-view></router-view>
			</el-main>
		</el-container>
	</div>
</template>

<script>
// import {allUser, searchUser} from '../api/axios'
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'index',
	methods: {
	// 	beforeMount() {
	// 	console.log("store.state", this.$store.state)
	// 	//search
	// 	// let fd = new FormData
	// 	// fd.append('userName', 'test')
	// 	//   searchUser(fd).then((res) =>{
	// 	//     console.log(res)
	// 	//     this.$store.dispatch("loadData", res.data.userList)
	// 	//     console.log(this.$store.state)
	// 	//   })
	// 	//all
	// 	allUser().then((res) =>{
	// 		console.log(res)
	// 		this.$store.dispatch("loadData", res.data.userList)
	// 		console.log(this.$store.state)
	// 		})
	// 	}
	},
}
</script>

<style>
	.el-main{
		padding: 0 20px 0 20px;
		height: 100%;
	}
	ul.el-menu {
		height: 100%;
	}
	.app-container{
		height: 100%;
		overflow: hidden;
	}
	.el-container{
		height: 100%;
	}
</style>
