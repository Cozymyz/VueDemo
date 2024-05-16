<!--
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-05-18 17:04:44
 * @LastEditTime: 2024-05-16 11:19:43
-->
<template>
    <div>
        this is adminView
    </div>
    <div>
      <h3>{{ this.$store.state.adminAccount.loadmsg }}</h3>
    </div>
    <!-- <el-button type="primary" @click="AllUser()">AllUser</el-button> -->
    <!-- <el-button type="primary" @click="SearchUser()">test2</el-button> -->
</template>
<script>
// import vuexLazyload from '../plugins/vuexLazyload'
// import adminAccountMoudle from '../store/modules/adminAccount'
import {allUser, searchUser} from '../api/axios'
export default {
  name: 'adminView',
  vuexMoudleName: 'adminAccount',
  methods: {
    AllUser(){
      console.log("store.state", this.$store.state)
       allUser().then((res) =>{
         console.log(res)
         this.$store.dispatch("loadData", res.data.userList)
         console.log(this.$store.state)
       })
    },
    SearchUser(){
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
    console.log("adminView")
    console.log("store.state", this.$store.state)
    //search
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