var FormData = require('form-data');

const stt = require('./stt');

class UploadFilesService {
  upload = (file) => {
    return stt({
      method: 'post',
      url: 'https://api.fpt.ai/hmi/asr/general',
      data: file,
      // onUploadProgress: this.onUploadProgress,
    });
  };

  // onUploadProgress = (event) => {
  //   console.log(Math.round((100 * event.loaded) / event.total));
  // };
}

module.exports = new UploadFilesService();
