import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import { matchRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { routesMap, routes } from '../routes'
import getStore from '../store'

export const render = (store, routes, req) => {

    //如果这里我们能拿到异步数据，并填充到store中
    // store里面到底填充什么数据
    //根据路由路径往store里面加数据
    // const matchedRoutes = matchRoutes(routesMap, req.path)
    // console.log(matchedRoutes)
    // const store = getStore(req)
    // const promises = []
    // matchedRoutes.forEach(item => {
    //     item.route.loadData && promises.push(item.route.loadData(store))
    //     console.log(item)
    // })
    // Promise.all(promises).then(_ => {
    //     console.log(store.getState())
    const content = renderToString((
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                {routes}
            </StaticRouter>
        </Provider>
    ))
    return `<html><head>
                    <title>ssr</title>
                </head>
                <body>
                    <div id="root">${content}</div>
                    <script>window.context={
                        state:${JSON.stringify(store.getState())}
                    }</script>
                    <script src="/index.js"></script>
                </body>
            </html>
        `
    // })
    // console.log(routes)
    // routesMap.some(route=>{
    //     const match = matchPath(req.path,route) // matchPath只能匹配到一层路由
    //     if(match){
    //         matchRoutes.push(match)
    //     }
    // })
    // matchRoutes.forEach(route=>route.loadData())


}