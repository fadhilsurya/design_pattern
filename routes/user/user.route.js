const router = require('express').Router()
const { User } = require('../../controller/user.controller')

const dataUser = new User()

// we put all user controller here
router.get('/health', dataUser.testUserHealth)

module.exports = router