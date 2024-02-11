const router = require('express').Router()
const blogRoutes = require ('./blogRoutes')

router.use('/blogRoutes',blogRoutes)

module.exports =router