const route = require('express').Router()
const userRoute = require('./user/user.route')

route.use('/user', userRoute)

module.exports = route
