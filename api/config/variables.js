const dotenv = require('dotenv')
dotenv.config()

const DB_URL = `${process.env.MONGO_DB_URL}/${process.env.MONGO_DB_DBNAME}`;
const PORT = process.env.PORT;
const API_VERSION = process.env.API_VERSION;

module.exports = {
  DB_URL,
  PORT,
  API_VERSION
}