<!--
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-05-18 17:04:44
 * @LastEditTime: 2023-12-07 20:11:45
-->
<template>
    <div>
        this is adminView
    </div>
</template>
<script>
import { adminAccountModule } from '../store/modules/adminAccount'
import vuexLazyload from '../plugins/vuexLazyload'
export default {
  name: 'adminView',
  mounted(){
    vuexLazyload()
  }
  // mounted(){
  //   this.$store.registerModule('admin', adminAccountModule)
  // },
  // beforeUnmount() {
  //   this.$store.unregisterModule('admin', adminAccountModule)
  // },
}
</script>