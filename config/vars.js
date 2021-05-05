const dotenv = require('dotenv');

dotenv.config();

const APIKEY = process.env.APIKEY;

module.exports = { APIKEY };