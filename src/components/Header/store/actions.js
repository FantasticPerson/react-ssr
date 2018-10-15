import axios from 'axios'
import * as constants from './constants'
// import clientAxios from '../../../client/request'
// import serverAxios from '../../../server/request'


const changeLogin = (value)=>({
    type:constants.CHANGE_LOGININ,
    value
})

export const getHeaderInfo = () => {
    // let request = null
    return (dispatch,getState,axiosInstance) => {
        return axiosInstance.get('/api/isLogin.json')
            .then(res => {
                const list = res.data.data
                dispatch(changeLogin(res.data.data.login))
            })
    }
} 

export const login = () => {
    // let request = null
    return (dispatch,getState,axiosInstance) => {
        return axiosInstance.get('/api/login.json')
            .then(res => {
                const list = res.data.data
                dispatch(changeLogin(true))
            })
    }
} 

export const logout = () => {
    // let request = null
    return (dispatch,getState,axiosInstance) => {
        return axiosInstance.get('/api/logout.json')
            .then(res => {
                const list = res.data.data
                dispatch(changeLogin(false))
            })
    }
} 