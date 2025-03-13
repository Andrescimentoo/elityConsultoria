import express from 'express'

const app = express()
const PORT = 3000

app.listen(PORT, () => {
  try {
    console.log(`Server is running on port ${PORT}`)
  }
  catch (error) {
    console.log(`Error: ${error.message}`)
  }
})