import express from 'express'
import { routeMerchaintId } from './src/routes/merchaintId.routes.js'
import { allowedOrigins } from './cors.config.js'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

app.use(cors({
  origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}))
app.use(express.json()) 

app.use(routeMerchaintId)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})