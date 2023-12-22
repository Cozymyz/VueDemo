/*
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2023-11-21 13:21:25
 * @LastEditTime: 2023-12-21 14:12:13
 */
import axios from '../plugins/request'

// axios.get('/api/test').then((res) =>{
//     console.log(res)
// })

export const test = () =>{
    return axios({
        url: '/test',
        method: 'get',
        data: 'testdata'
    })
}