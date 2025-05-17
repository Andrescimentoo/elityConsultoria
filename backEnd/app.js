import express from 'express'
import { routeMerchaintId } from './src/routes/merchaintId.routes.js'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

app.use(cors('https://frontendelityconsultoria.vercel.app'))
app.use(express.json()) 

app.use(routeMerchaintId)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})