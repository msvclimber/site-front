import axios from 'axios';

const fetchLoginRequest = ({ payload }) => {
  return new Promise(async (resolve, reject) => {
    const url = 'https://mysite.ru/api/auth/login';

    try {
      const response = await axios.post(url, payload);

      if (response.data) {
        resolve(response);
      }
    } catch (err) {
      reject(err)
    }
  });
};

export default fetchLoginRequest;
