import axios from 'axios'
import * as constants from './constants'

const changeList = (list)=>({
    type:constants.CHANGE_LIST,
    list
})

export const getTranslationList = () => {
    let request = null
    return (dispatch,getState,axiosInstance) => {
        return axiosInstance.get('/api/translations.json')
            .then(res => {
                if(res.data.success){
                    const list = res.data.data
                } else {
                    const list = []
                }
                dispatch(changeList(list))
            })
    }
} 