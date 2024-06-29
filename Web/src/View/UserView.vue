<!--
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2024-01-01 12:27:40
 * @LastEditTime: 2024-06-28 22:50:21
-->
<template>
    <div>
        this is userView
    </div>
    <div>
      <h3>{{ this.$store.state.userAccountModule.loadmsg }}</h3>
    </div>
</template>
<script>
export default {
  name: "userView",
  methods: {},
  beforeMount() {
      console.log("userView")
      console.log("store.state", this.$store.state)
      //all
      // allUser().then((res) =>{
      //   console.log(res)
      //   this.$store.dispatch("loadData", res.data.userList)
      //   console.log(this.$store.state)
      //   })
		}
}
</script>