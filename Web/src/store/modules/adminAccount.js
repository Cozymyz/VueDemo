/*
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-05-16 15:45:41
 * @LastEditTime: 2024-06-29 23:18:12
 */
const mutations = {
    getData: (state, data) => {
        state.data = data
        state.loadmsg = 'success'
    },
    clearData: (state) => {
        state.data = null,
        state.loadmsg = 'false'
    }
}

const actions = {
    loadData({ commit }, data) {
        commit('getData', data)
    },
    clearData({ commit }) {
        commit('clearData')
    }
}

export default{
    // namespaced: true,
    state:()=>({
        msg: 'adminAccount',
        loadmsg: 'false',
        data: null
    }),
    mutations,
    actions
}