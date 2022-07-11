const ImageStorage = require('../models/image')

class ImageRepository {
  async create(data) {
    return ImageStorage.insertMany(data)
  }
}

module.exports = new ImageRepository()
