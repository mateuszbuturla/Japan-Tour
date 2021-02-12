import axios from 'axios';

const apiKey = '0aba8ab71c45acf5b0ba4476d1fe1f02';

const UploadImage = async (img: any) => {
  let res;
  var form = new FormData();
  form.append('image', img);
  await axios({
    url: `https://api.imgbb.com/1/upload?key=${apiKey}`,
    method: 'POST',
    data: form,
  })
    .then(function (response) {
      res = response;
    })
    .catch(function (error) {
      res = error;
    });
  return res;
};

export default UploadImage;
