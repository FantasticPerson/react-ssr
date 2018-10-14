import * as constants from './constants'

const defaultState = {
    newsList: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_LIST:
            return {
                ...state,
                newsList:action.list
            }
        default:
            return state;
    }
}