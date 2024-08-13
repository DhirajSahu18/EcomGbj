// Library Imports 
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Connection } from './db.js'


// Configurations
dotenv.config()


// Server initialization
const app = express()
const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })

// Middlewares
app.use(cors())
app.use(express.json())


// Db connection
Connection()


// Basic Route
app.get('/', (req, res) => {
  res.send('Server Connected!')
})


