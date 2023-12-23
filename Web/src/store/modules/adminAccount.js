/*
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-05-16 15:45:41
 * @LastEditTime: 2023-12-22 16:12:39
 */
import { test } from '../../api/axios'

const mutations = {
    getData: (state, data) => {
        state.data = data
    }
}

const actions = {
    loadData({commit}) {
        test().then((res) =>{
            console.log(res)
            commit('getData', res)
        })
    }
}

export default{
    namespaced: true,
    state:()=>({
        msg: 'adminAccount',
        data: null
    }),
    mutations,
    actions
}