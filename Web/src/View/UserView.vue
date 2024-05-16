<!--
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2024-01-01 12:27:40
 * @LastEditTime: 2024-05-16 12:11:05
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
import {allUser, searchUser} from '../api/axios'
export default {
  name: "UserView",
  methods: {},
  beforeMount() {
      console.log("UserView")
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
}
</script>