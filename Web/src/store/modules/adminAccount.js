/*
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-05-16 15:45:41
 * @LastEditTime: 2024-01-06 14:53:30
 */
// import { allUser, searchUser } from '../../api/axios'

const mutations = {
    getData: (state, data) => {
        state.data = data
        state.loadmsg = 'success'
    }
}

const actions = {
    loadData({ commit }, data) {
        commit('getData', data)
    }
}

export default{
    // namespaced: true,
    state:()=>({
        msg: 'adminAccount',
        loadmsg: 'not load',
        data: null
    }),
    mutations,
    actions
}