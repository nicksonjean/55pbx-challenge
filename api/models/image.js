const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
  baseUrl: {
    type: String
  },
  url: {
    type: String
  },
  fileName: {
    type: String
  }
}, {
  timestamps: true
})

const Image = mongoose.model('ImageStorage', ImageSchema)

module.exports = Image