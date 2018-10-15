import React from 'react'
import Header from './components/Header/'
import { renderRoutes } from 'react-router-config'
import {actions} from './components/Header/store'

const App = (props) => {
    return (
        <div>
            <Header></Header>
            {renderRoutes(props.route.routes)}
        </div>
    )
}

App.loadData = (store) => {
    return store.dispatch(actions.getHeaderInfo());
}

export default App
