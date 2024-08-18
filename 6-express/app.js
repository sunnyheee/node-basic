import express from 'express'
const app = express()

// app.get('/', (req, res, nex) => {
//   console.log(req.params)
//   console.log(req.query)

//   res.send('hi')
// })
// app.listen(8080)

// app.get('/sky/:id', (req, res, nex) => {
//   console.log(req.params)
//   console.log(req.params.id)
//   console.log(req.query)

//   res.send('hi')
// })
// app.listen(8080)

app.get('/sky/:id', (req, res, nex) => {
  console.log(req.params)
  console.log(req.params.id)
  console.log(req.query)

  res.json({ id: 'test' })
  //   res.statusCode(404)
  res.setHeader('key', 'value')
  res.status(201).send('created')
})
app.listen(8080)
