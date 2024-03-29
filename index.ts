import express, {Express, Request, Response} from 'express'

const app: Express = express()
// app.use(express.static('frontend'))
app.use(express.json())

const PORT = process.env.PORT || 3366

app.get("/test", (req: Request, res: Response) => {
    return res.status(200).send({"goal": "Canada 2024!"})
})

app.listen(PORT, () => console.log(`Running at http://localhost:${PORT}`))

export default app