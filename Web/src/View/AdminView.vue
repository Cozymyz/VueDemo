<!--
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-05-18 17:04:44
 * @LastEditTime: 2025-01-18 21:46:41
-->
<template>
    <div>
        this is adminView
    </div>
    <div>
      <h3>{{ this.$store.state.adminAccount?.loadmsg || 'Loading...' }}</h3>
    </div>
    <el-main class="main">
      <el-table
      :data="userList"
      v-loading="listLoading"
      element-loading-text="Loading"
      border
      fit>
        <el-table-column
        align="center"
        label="userId">
          <template #default="scope">
            {{ (!scope.row.userId) ? 'NONE' : scope.row.userId }}
          </template>
        </el-table-column>
        <el-table-column
        align="center"
        label="userName">
          <template #default="scope">
            {{ (scope.row.userName=='') ? 'NONE' : scope.row.userName }}
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <!-- <el-button type="primary" @click="AllUser()">AllUser</el-button> -->
    <!-- <el-button type="primary" @click="SearchUser()">test2</el-button> -->
    <el-footer>
      <el-pagination
      v-model:current-page="curPage"
      :page-size="pagesize"
      :total="total"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      @prev-click="handlePrev"
      @next-click="handleNext"
      prev-text="prev"
      next-text="next"
      layout="total, sizes, prev, pager, next, jumper"
      class="pagination">
      </el-pagination>
    </el-footer>
</template>
<script>
// import adminAccountMoudle from '../store/modules/adminAccount'
import {allUser, searchUser} from '../api/axios'
export default {
  name: 'adminView',
  // vuexMoudleName: 'adminAccount',
  vuexModule: {
    name :'adminAccount',
    extent: 'unkown'
  },
  data() {
    return{
      hasLoaded: false,
      listLoading: true,
      userList: [],
      Property: 0,
      total: 0,
      curPage: 1,
      pagesize: 300,
    }
  },
  methods: {
    AllUser(){
      let fd = new FormData
      fd.append('pageNumber', this.curPage)
      fd.append('pageSize', this.pagesize)
      allUser(fd).then((res) =>{
        console.log(res)
        this.$store.dispatch("loadData", res.data.userList)
        this.userList = res.data.userList
        this.total = res.data.total
        this.listLoading = false
        console.log("userList", this.userList)
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
         this.userList = res.data.userList
         this.listLoading = false
         console.log("userList", this.userList)
         console.log(this.$store.state)
       })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagesize = val
      this.AllUser()
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.curPage = val
      this.AllUser()
    },
    handlePrev:function(){
      this.curPage-=1
      console.log(this.curPage)
      this.AllUser()
    },
    handleNext:function(){
      this.curPage+=1
      console.log(this.curPage)
      this.AllUser()
    },
  },
  beforeMount() {
    console.log("adminView")
    console.log("store.state", this.$store.state)
    if (!this.hasLoaded) {
      this.hasLoaded = true;
      this.AllUser();
    }
  },
  
  // mounted(){
  //   this.$store.registerModule('adminAccount', adminAccountMoudle)
  // },
  // beforeUnmount() {
  //   this.$store.unregisterModule('adminAccount', adminAccountMoudle)
  // },
}
</script>
<style>
.main{
  margin: 10px;
  padding: 10px;
  height: 80%;
}
.pagination{
  margin-top: 2%;
  margin-left: 1%;
  width: 10%;
}
</style>