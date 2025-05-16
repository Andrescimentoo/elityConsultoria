import express from 'express'
import { routeMerchaintId } from './src/routes/merchaintId.routes.js'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(cors({origin:('https://frontendelityconsultoria.vercel.app/')}))

app.use(routeMerchaintId)

app.listen(PORT, () => {
  try {
    console.log(`Server is running on port ${PORT}`)
  }
  catch (error) {
    console.log(`Error: ${error.message}`)
  }
})