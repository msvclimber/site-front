import getRequestErrorText from './getRequestErrorText';

const apiCall = (fetcher, fetcherOptions) => {
  return fetcher(fetcherOptions)
    .then(response => {
      return {
        data: Array.isArray(response) ? response : response?.data,
      };
    })
    .catch(error => {
      const errorText = getRequestErrorText({ error });

      return { error: errorText };
    });
};

export default apiCall;
