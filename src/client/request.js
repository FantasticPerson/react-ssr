import axios from 'axios'
import config from '../store/config'

const instance = axios.create({
    baseURL: '/',
    params:{
        secret:config.secrrt
    }
})

export default instance