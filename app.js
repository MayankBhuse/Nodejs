const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  console.log("data::",req.body)
  res.send('Kya haal hai bhai,yoo')
})

app.use('/post',require('./src/base/base.routes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
