const Axios = require('axios');

const { APIKEY } = require('../config/vars');

const instance = Axios.create({
  baseURL: 'https://api.fpt.ai/hmi/asr/general',
  headers: {
    'api-key': APIKEY,
  }
});

module.exports = instance;
