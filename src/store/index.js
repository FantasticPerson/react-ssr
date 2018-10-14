import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as HomeReducer } from '../containers/Home/store'
import clientAxios from '../client/request'
import serverAxios from '../server/request'

const reducer = combineReducers({
    home: HomeReducer
})

export const getStore = () => {
    //改变服务器端的store的内容，一定要使用serverAxios
    return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)))
}

export const getClientStore = () => {
    const defaultState = window.context.state
    return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}

// export default getStore;

//47.95.113.63/ssr/api/news.json