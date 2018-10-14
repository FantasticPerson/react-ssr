import React from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'
import {renderRoutes} from 'react-router-config'
import App from './app'

const routesMap = [{
    path:'/',
    component:App,
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
            path: '/login',
            component: Login,
            exact: true,
            key: 'login'
        }
    ]
}]

export default routes

const mapRoutes = () => (<div>{renderRoutes(routesMap)}</div>)
const routes = mapRoutes()

export { routesMap, routes }
