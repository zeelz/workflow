import express, {Express, Request, Response} from 'express'

const app: Express = express()
// app.use(express.static('frontend'))
app.use(express.json())

const PORT = 3366

app.get("/", (req: Request, res: Response) => {
    return res.status(200).send({"msg": "canada 2024"})
})

app.listen(PORT, () => console.log(`Running at http://localhost:${PORT}`))