/*
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-11-21 13:21:25
 * @LastEditTime: 2023-11-21 13:23:17
 */
import axios from '../plugins/request'

export const test = () =>{
    return axios({
        url: 'test',
        method: 'get'
    })
}