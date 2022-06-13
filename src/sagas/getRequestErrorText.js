const getRequestErrorText = ({ error: { request, message } }) => {
  if (!request.response.length) {
    return message;
  }

  let requestError;

  try {
    requestError = request ? JSON.parse(request.response) : { description: message };
  } catch {
    requestError = { description: 'Error' };
  }

  return requestError.description;
};

export default getRequestErrorText;
