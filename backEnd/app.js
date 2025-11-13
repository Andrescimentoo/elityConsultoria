import express from 'express'
import { routeRequestIfoodAPI } from './src/routes/routeRequestIfoodAPI.routes.js'
import { allowedOrigins } from './cors.config.js'
import cors from 'cors'
import { routesToDatasOfLeads } from './src/routes/routesToDatasOfLeads.routes.js'
import dotenv from "dotenv"

dotenv.config()

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

app.use(routesToDatasOfLeads)
app.use(routeRequestIfoodAPI)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})