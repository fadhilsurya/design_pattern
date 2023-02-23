const express = require('express')
const app = express()
const port = 8080
const route = require('./routes/routes')

app.use('/', route)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

