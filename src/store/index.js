import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {reducer as HomeReducer} from '../containers/Home/store'

const reducer = combineReducers({
    home:HomeReducer
})

const getStore = () => {
    return createStore(reducer, applyMiddleware(thunk))
}

export default getStore;

//47.95.113.63/ssr/api/news.json