import express from 'express'
const app = express()

// app.get('/', (req, res, nex) => {
//   console.log(req.params)
//   console.log(req.query)

//   res.send('hi')
// })
// app.listen(8080)

app.get('/sky/:id', (req, res, nex) => {
  console.log(req.params)
  console.log(req.params.id)
  console.log(req.query)

  res.send('hi')
})
app.listen(8080)
