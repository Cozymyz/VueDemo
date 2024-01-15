<!--
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-05-18 17:04:44
 * @LastEditTime: 2024-01-15 15:04:05
-->
<template>
    <div>
        this is adminView
    </div>
    <div>
      <h3>{{ this.$store.state.adminAccount.loadmsg }}</h3>
    </div>
    <el-button type="primary" @click="testApi1()">test1</el-button>
    <el-button type="primary" @click="testApi2()">test2</el-button>
</template>
<script>
// import vuexLazyload from '../plugins/vuexLazyload'
// import adminAccountMoudle from '../store/modules/adminAccount'
import {allUser, searchUser} from '../api/axios'
export default {
  name: 'adminView',
  vuexMoudleName: 'adminAccount',
  methods: {
    testApi1(){
      console.log("store.state", this.$store.state)
       allUser().then((res) =>{
         console.log(res)
         this.$store.dispatch("loadData", res.data.userList)
         console.log(this.$store.state)
       })
    },
    testApi2(){
      console.log("store.state", this.$store.state)
      let fd = new FormData
      fd.append('userName', 'test')
       searchUser(fd).then((res) =>{
         console.log(res)
         this.$store.dispatch("loadData", res.data.userList)
         console.log(this.$store.state)
       })
    }
  },
  beforeMount() {
    console.log("store.state", this.$store.state)
    // //search
    // let fd = new FormData
    // fd.append('userName', 'test')
    //   searchUser(fd).then((res) =>{
    //     console.log(res)
    //     this.$store.dispatch("loadData", res.data.userList)
    //     console.log(this.$store.state)
    //   })
    //all
    allUser().then((res) =>{
      console.log(res)
      this.$store.dispatch("loadData", res.data.userList)
      console.log(this.$store.state)
    })
  }
  
  // mounted(){
  //   this.$store.registerModule('adminAccount', adminAccountMoudle)
  // },
  // beforeUnmount() {
  //   this.$store.unregisterModule('adminAccount', adminAccountMoudle)
  // },
}
</script>