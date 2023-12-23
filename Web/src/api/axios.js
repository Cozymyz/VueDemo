/*
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-11-21 13:21:25
 * @LastEditTime: 2023-12-22 16:22:54
 */
import axios from '../plugins/request'

// axios.get('/api/test').then((res) =>{
//     console.log(res)
// })

export const test = () =>{
    return axios({
        url: '/favicon.ico',
        method: 'get',
        data: 'testdata'
    })
}