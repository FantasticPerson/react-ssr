import express from 'express'
import proxy from 'express-http-proxy'
import { render } from './utils'
import { getStore } from '../store'
import { routesMap, routes } from '../routes'
import { matchRoutes } from 'react-router-config'

const app = express()
app.use(express.static('public'))
app.use('/api', proxy('http://127.0.0.1:3000', {
    proxyReqPathResolver: (req) => {
        console.log(('/json' + req.path).replace('/api', ''))
        return ('/json' + req.path).replace('/api', '')
    }
}))
app.get('*', (req, res) => {
    const store = getStore(req)
    const matchedRoutes = matchRoutes(routesMap, req.path)
    // const promises = []
    // matchedRoutes.forEach(item => {
    //     item.route.loadData && promises.push(item.route.loadData(store))
    // })
    // Promise.all(promises).then(_ => {
    const context = {}
    const html = res.send(render(store, routes, req, context))
    if(context.NotFound){
        res.status(404)
        res.send(html)
    }else {
        res.send(html)
    }
    // res.send(html)
    // })
    // res.send(render())
    // render(req,res)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))