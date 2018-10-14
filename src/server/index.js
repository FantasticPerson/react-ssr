import express from 'express'
import {render} from './utils'

const app = express()

app.get('/', (req, res) => {
    res.send(render(req))
})

app.use(express.static('public'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))