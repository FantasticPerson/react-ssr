import axios from 'axios'
import * as constants from './constants'
import clientAxios from '../../../client/request'
import serverAxios from '../../../server/request'


const changeList = (list)=>({
    type:constants.CHANGE_LIST,
    list
})

export const getHomeList = () => {
    let request = null
    return (dispatch,getState,axiosInstance) => {
        //浏览器运行 /api/news.json = http://localhost:3000/api/news.json
        //服务器运行 /api/news.json = 服务器根目录下的 /api/news.json
        // if(isServer){
        //     request = serverAxios
        // } else {
        //     request = clientAxios
        // }

        // const request = isServer ? serverAxios : clientAxios
        // let url = isServer ? 'http://localhost:3000/jsons/news.json' : '/api/news.json'
        return axiosInstance.get('/api/news.json')
            .then(res => {
                const list = res.data.data
                dispatch(changeList(list))
            })
    }
} 