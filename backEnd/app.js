import express from 'express'
import { routeMerchaintId } from './src/routes/merchaintId.routes.js'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

app.use(cors({origin:('https://frontendelityconsultoria.vercel.app/')}))

app.use(routeMerchaintId)

app.listen(port, () => {
  try {
    console.log(`Server is running on port ${port}`)
  }
  catch (error) {
    console.log(`Error: ${error.message}`)
  }
})