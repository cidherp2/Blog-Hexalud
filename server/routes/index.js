const router = require('express').Router()
const apiRoutes = require('./api')

router.use('/blog/api',apiRoutes)
module.exports = router
