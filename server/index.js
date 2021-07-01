const express = require('express')
const chalk = require('chalk')
const server = express()

server.get('/api', (req, res)=>{
  
})
server.listen(4000, ()=>{
  
  console.log(chalk.green.bold('server: server started on port 4000'))   
})
 