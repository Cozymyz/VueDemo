<!--
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-05-16 14:18:30
 * @LastEditTime: 2023-11-22 13:49:52
-->
<template>
  <router-view />
</template>

<script>
  export default {
    name: 'App',
    components: {},
    setup(){ // 系统创建完成
      console.log("=setup");
      return {};
    },
    mounted() { // 组件初始化完成
      console.log("=mounted");
    },
    updated() { // 视图更新
      console.log("=updated");
    },
    unmounted() {
      console.log("=unmounted");
    },
    methods: {

    }
}
</script>

<style>
  html, body{
    width: 100%;
    height: 100%;
    margin: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    margin-top: 10px;
  }
</style>