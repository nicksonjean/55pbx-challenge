const express = require('express')
const Image = require('../models/image')
const imageService = require('../services/imageService')
const router = express.Router()

module.exports = (io) => {
  router.get('/', async (req, res) => {
    try {
      const images = await Image.find()
      res.send(images)
    } catch (error) {
      res.send(error)
    }
  })
  
  router.post('/', async (req, res) => {
    try {
      await imageService.create(req.body, io)
      return res.json({
        url: req.body,
        ok: true,
        message: 'Images processed successfully!',
      })
    } catch (error) {
      return res.status(400).json({ok: false, message: error.message})
    }
  })
  return router
}
