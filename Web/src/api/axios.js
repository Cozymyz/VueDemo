/*
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-11-21 13:21:25
 * @LastEditTime: 2024-06-30 00:05:26
 */
import axios from '../plugins/request'

export const test = () =>{
    return axios({
        url: '/favicon.ico',
        method: 'get',
        data: 'testdata'
    })
}

export const allUser = (data) =>{
    return axios({
        url: '/user/allUser',
        method: 'post',
        data
    })
}

export const searchUser = (data) =>{
    return axios({
        url: '/user/searchUser',
        method: 'post',
        data
    })
}