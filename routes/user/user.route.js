const router = require('express').Router()
const { pingUserHealth } = require('../../controller/user.controller')

// we put all user controller here
router.get('/health', pingUserHealth)

module.exports = router