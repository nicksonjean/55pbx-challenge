const cherio = require('cherio')
const request = require('request')
const jimp = require('jimp');

const imageRepository = require('../repositories/imageRepository')
const validationRepository = require('../repositories/validationRepository')

class ImageService {
  async create(data, io) {
    const { url } = data
    if (!url) throw `Error to load URL ${url}!`
    request(url, async (err, resp, html) => {
      if (!err && resp.statusCode == 200) {
        const $ = cherio.load(html)
        $('img').each(async (_, image) => {
          const img = $(image).attr('src')
          const urlImage = validationRepository.getUrlImage(url, img)
          const extension = validationRepository.getExtension(urlImage)
          const fileName = validationRepository.generateRandomFileName() + '.' + extension
          if(validationRepository.validWebUri(urlImage) !== undefined) {
            if(validationRepository.isValid(urlImage, extension)) {
              await jimp.read(urlImage, async (err, result) => {
                if (!err) {
                  result
                    .greyscale()
                    .scale(0.5)
                    .write('../front/public/processed_images/' + fileName)
                  imageRepository.create({ 
                    baseUrl: url, 
                    url: img, 
                    fileName: fileName
                  })
                  io.emit('images-added', urlImage)
                }
              })
            }
          }
        })
      }
    })
  }
}

module.exports = new ImageService()
