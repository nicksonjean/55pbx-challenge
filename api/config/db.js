const mongoose = require('mongoose')
const {DB_URL} = require('../config/variables')

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(err => console.error('Could not connect', err))