const validUrl = require('valid-url')
const isImageURL  = require('valid-image-url');

class ValidationRepository {
  async validUrlImage(url) {
    return await isImageURL(url)
  }
  validUrl(url) {
    return validUrl.isUri(url)
  }
  validWebUri(url) {
    return validUrl.isWebUri(url)
  }
  generateRandomFileName() {
    const timestamp = new Date().toISOString().replace(/[-:.]/g,"");  
    const random = ("" + Math.random()).substring(2, 8); 
    const random_number = timestamp+random;  
    return random_number;
  }
  getUrlImage(url, img) {
    return (validUrl.isUri(img) ? img : (url + img))
  }
  getExtension(url) {
    return url.split('/').reverse()[0].split('.').reverse()[0]
  }
  isValid(urlImage, extension) {
    return extension !== undefined && (this.validUrlImage(urlImage) && (extension === 'png' || extension === 'jpg'))
  }
}

module.exports = new ValidationRepository()
