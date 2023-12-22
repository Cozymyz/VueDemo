/*
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-05-16 15:45:41
 * @LastEditTime: 2023-12-21 11:14:30
 */
import axios from '../../plugins/request.js'

const getDataApi = () => {
	return axios({
		url: '/api/admin/user',
		method: 'post'
	})
}

const mutations = {
    getData: (state, data) => {
        state.data = data
    }
}

const actions = {
    loadData({commit}) {
        getDataApi
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