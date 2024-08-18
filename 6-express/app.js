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

// app.get('/sky/:id', (req, res, nex) => {
//   console.log(req.params)
//   console.log(req.params.id)
//   console.log(req.query)

//   res.json({ id: 'test' })
//   //   res.statusCode(404)
//   res.setHeader('key', 'value')
//   res.status(201).send('created')
// })
// app.listen(8080)

// 미들웨어
app.all('/api', (req, res, next) => {
  // api만
  console.log('all')
  next()
})
app.use('/sky', (req, res, next) => {
  // sky를 포함한 모든, /sky/123 OK
  console.log('use')
  next()
})
app.get(
  '/',
  (req, res, next) => {
    console.log('first')
    // next()
    // next('route')
    next(new Error('error'))
  },
  (req, res, next) => {
    console.log('first2')
  },
),
  app.get('/', (req, res, next) => {
    console.log('second')
  })
// 404페이지 처리
app.use((req, res, next) => {
  res.status(404).send('Not availble!')
})
app.use((error, req, res, next) => {
  console.error(error)
  res.status(500).send('Sorry, try later!')
})
app.listen(8080)
