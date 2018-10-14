import { BrowserRouter } from 'react-router-dom'
import ReactDom from 'react-dom'
import React from 'react'
import Routes from '../routes'
import { Provider } from 'react-redux'
import getStore from '../store'

const App = () => {
    return (
        <Provider store={getStore()}>
            <BrowserRouter>
                {Routes}
            </BrowserRouter>
        </Provider>
    )
}

ReactDom.hydrate(<App />, document.getElementById('root'))