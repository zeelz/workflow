import express, {Express, Request, Response} from 'express'

const app: Express = express()
app.use(express.static('static'))

const PORT = 3344

app.listen(PORT, () => console.log(`Running at localhost:${PORT}`))