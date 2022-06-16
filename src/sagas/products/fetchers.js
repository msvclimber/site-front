import axios from 'axios';

const fetchProductsRequest = () => {
  return new Promise(async (resolve, reject) => {
    const url = 'https://mysite.ru/api/product/list';

    try {
      const response = await axios.get(url, {});

      if (response.data) {
        resolve(response);
      }
    } catch (err) {
      reject(err)
    }
  });
};

const fetchShopRequest = ({ shopId }) => {
  return new Promise(async (resolve, reject) => {
    const url = 'https://mysite.ru/api/shop';

    try {
      const response = await axios.get(url, { params: { shopId } });

      if (response.data) {
        resolve(response);
      }
    } catch (err) {
      reject(err)
    }
  });
};

export { fetchProductsRequest, fetchShopRequest };
