// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
// const band = require('./controllers/band_controller')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// CONTROLLERS  // Erroring
const bandController = require('./controllers/band_controller')
app.use('/api/band', bandController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})