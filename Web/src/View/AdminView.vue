<!--
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-05-18 17:04:44
 * @LastEditTime: 2024-01-01 11:45:31
-->
<template>
    <div>
        this is adminView
    </div>
    <el-button type="primary" @click="testApi1()">test1</el-button>
    <el-button type="primary" @click="testApi2()">test2</el-button>
</template>
<script>
// import vuexLazyload from '../plugins/vuexLazyload'
// import adminAccountMoudle from '../store/modules/adminAccount'
 import {allUser, searchUser} from '../api/axios'
// import axios from 'axios'
export default {
  name: 'adminView',
  vuexMoudleName: 'adminAccount',
  methods: {
    testApi1(){
      console.log("apitest")
       allUser().then((res) =>{
         console.log(res)
       })
      // axios.post('/user/allUser').then((res) =>{
      //   console.log(res)
      // })
    },
    testApi2(){
      console.log("apitest")
      let fd = new FormData
      fd.append('userName', 'test')
       searchUser(fd).then((res) =>{
         console.log(res)
       })
    }
  }
  
  // mounted(){
  //   this.$store.registerModule('admin', adminAccountMoudle)
  // },
  // beforeUnmount() {
  //   this.$store.unregisterModule('admin', adminAccountMoudle)
  // },
}
</script>