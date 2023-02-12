const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log(process.env.happy)
  console.log(process.env.PORT)
  console.log(process.env.SECRET);
  res.json({message: 'all is good'})
})

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log('Server is running')
})
