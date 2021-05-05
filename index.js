const fs = require('fs');
const uploadSTT = require('./network/upload');

const tts = require('./network/tts');
const { default: upload } = require('./network/upload');

const text = 'Xin chào';

const ttsOutput = `./output/tts_${Date.now()}.txt`;
const sttOutput = `./output/stt_${Date.now()}.txt`;

// tts({
//   method: 'post',
//   data: text,
//   url: 'https://api.fpt.ai/hmi/tts/v5',
// })
//   .then((response) => {
//     console.log(response);
//     fs.writeFileSync(ttsOutput, JSON.stringify(response.data), {
//       encoding: 'utf8',
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });

const audio = fs.readFileSync('./assets/XinChao.mp3', 'binary');

console.log(audio);

uploadSTT.upload(audio).then(response => {
  console.log(response);
  fs.writeFileSync(sttOutput, JSON.stringify(response.data), {
    encoding: 'utf8',
  });
}).catch(error => {
  console.error(error);
});