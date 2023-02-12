const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({message: {
    happy: process.env.happy, 
    PORT: process.env.PORT, 
    SECRET: process.env.SECRET
  }})
})

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log('Server is running')
})
