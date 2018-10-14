import { BrowserRouter } from 'react-router-dom'
// import {renderRoutes} from 'react-router-config'
import ReactDom from 'react-dom'
import React from 'react'
import { routes } from '../routes'
import { Provider } from 'react-redux'
import { getClientStore } from '../store'

const store = getClientStore()

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {routes}
            </BrowserRouter>
        </Provider>
    )
}

ReactDom.hydrate(<App />, document.getElementById('root'))