const express = require('express')
const server = express()

server.get('/api', (req, res)=>{
  res.send('root API path reached')
})
server.listen(3002, ()=>{
  console.log('server started on port 3002')
})