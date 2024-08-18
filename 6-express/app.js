//동기 비동기처리

import express from 'express'
import fs from 'fs'
import fsASync from 'fs/promises'

const app = express()
app.use(express.json())

app.get('/file', (res, req, next) => {
  fs.readFile('/file1.txt', (err, data) => {
    if (err) {
      res.sendStatus(404)
    }
  })
})

app.get('/file1', (res, req, next) => {
  try {
    const data = fs.readFileSync('/file1.txt')
    res.send(data)
  } catch (error) {
    res.sendStatus(404)
  }
})

app.listen(8080)
