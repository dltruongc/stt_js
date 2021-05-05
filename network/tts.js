const Axios = require('axios');

const { APIKEY } = require('../config/vars');

const instance = Axios.create({
  baseURL: 'https://api.fpt.ai/hmi/tts/v5',
  headers: {
    voice: 'linhsan',
    speed: '',
    'api-key': APIKEY
  }
});

module.exports = instance;
