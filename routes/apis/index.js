const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')
const restController = require('../../controllers/apis/restaurant-controller')
const userController = require('../../controllers/apis/user-controller')
const { apiErrorHandler } = require('../../middleware/error-handler')

const admin = require('./modules/admin')

router.use('/admin', admin)

// 不用 cookie-based 驗證了，所以也不需要 Passport 幫我們建立 session，需要把這個功能關掉。
router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn)
router.get('/restaurants', restController.getRestaurants)
router.use('/', apiErrorHandler)

module.exports = router