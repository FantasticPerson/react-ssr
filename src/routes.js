import React from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
import Translation from './containers/Translation'
import {renderRoutes} from 'react-router-config'
import App from './app'

const routesMap = [{
    path:'/',
    component:App,
    loadData: App.loadData,
    key:'app',
    routes:[
        {
            path: '/',
            component: Home,
            exact: true,
            loadData: Home.loadData,
            key: 'home'
        },
        {
            path: '/translation',
            component: Translation,
            exact: true,
            key: 'translation',
            loadData: Translation.loadData,
        }
    ]
}]

export default routes

const mapRoutes = () => (<div>{renderRoutes(routesMap)}</div>)
const routes = mapRoutes()

export { routesMap, routes }
