import axios from 'axios'
import config from '../store/config'

const createInstance =(req)=> axios.create({
    baseURL: 'http://localhost:3000',
    headers:{
        cookie:req.get('cookie') || ''
    },
    params:{secret:config.secret}
})

export default createInstance