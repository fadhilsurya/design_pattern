const express = require('express')
const app = express()

require('dotenv').config()

const port = process.env.PORT || 8080

const route = require('./routes/routes')

app.use('/', route)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

