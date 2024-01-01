/*
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-11-21 13:21:25
 * @LastEditTime: 2024-01-01 12:32:09
 */
import axios from '../plugins/request'

export const test = () =>{
    return axios({
        url: '/favicon.ico',
        method: 'get',
        data: 'testdata'
    })
}

export const allUser = () =>{
    return axios({
        url: '/user/allUser',
        method: 'post'
    })
}

export const searchUser = (data) =>{
    return axios({
        url: '/user/searchUser',
        method: 'post',
        data
    })
}