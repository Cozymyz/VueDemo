<!--
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-05-18 17:04:44
 * @LastEditTime: 2023-12-22 16:21:51
-->
<template>
    <div>
        this is adminView
    </div>
    <el-button type="primary" @click="testApi()">test</el-button>
</template>
<script>
// import vuexLazyload from '../plugins/vuexLazyload'
// import adminAccountMoudle from '../store/modules/adminAccount'
// import {test} from '../api/axios'
export default {
  name: 'adminView',
  vuexMoudleName: 'adminAccount',
  methods: {
    testApi(){
      // test().then((res) =>{
      //   console.log(res)
      // })
      this.$store.dispatch("loadData")
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