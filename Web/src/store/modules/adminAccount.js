/*
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-05-16 15:45:41
 * @LastEditTime: 2024-01-04 14:37:01
 */
// import { allUser, searchUser } from '../../api/axios'

const mutations = {
    getData: (state, data) => {
        state.data = data
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
        data: null
    }),
    mutations,
    actions
}