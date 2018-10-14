import axios from 'axios'
import * as constants from './constants'

const changeList = (list)=>({
    type:constants.CHANGE_LIST,
    list
})

export const getHomeList = () => {
    return (dispatch) => {
        axios.get('http://localhost:3000/jsons/news.json')
            .then(res => {
                const list = res.data.data
                dispatch(changeList(list))
            })
    }
} 