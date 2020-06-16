import express from 'express'
import cors from 'cors'
import path from 'path'
import routes from './routes'

const port = 3000

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/assets/images', express.static(path.resolve(__dirname, '..', 'assets/images')))
app.listen(port, () => console.info(`Up and running in ${port} port`))

