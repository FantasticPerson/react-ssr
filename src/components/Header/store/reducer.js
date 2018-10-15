import * as constants from './constants' 

const defaultState = {
    login: false
}

export default (state = defaultState, action) => {
    switch(action.type){
        case constants.CHANGE_LOGININ:
            return {
                ...state,
                login:action.value
            }
        default:
            return state
    }
}