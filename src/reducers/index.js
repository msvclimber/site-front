const HANDLE_FETCH_PH4_CATEGORY_NAMES_FAIL = 'HANDLE_FETCH_PH4_CATEGORY_NAMES_FAIL';
const FETCH_FIN_CODES = 'FETCH_FIN_CODES';
const FETCH_FIN_CODES_SUCCESS = 'FETCH_FIN_CODES_SUCCESS';
const FETCH_FIN_CODES_FAIL = 'FETCH_FIN_CODES_FAIL';
const CLEAR_FIN_CODES = 'CLEAR_FIN_CODES';

const initialState = {
  isDataLoading: false,
  data: [],
};

const handlers = {
  [HANDLE_FETCH_PH4_CATEGORY_NAMES_FAIL]: state => ({
    ...state,
    isDataLoading: false,
  }),
  [FETCH_FIN_CODES]: state => ({
    ...state,
    isDataLoading: true,
  }),
  [FETCH_FIN_CODES_SUCCESS]: (state, { finCodes }) => ({
    ...state,
    isDataLoading: false,
    finCodes,
  }),
  [FETCH_FIN_CODES_FAIL]: state => ({
    ...state,
    isDataLoading: false,
  }),
  [CLEAR_FIN_CODES]: state => ({
    ...state,
    data: [],
  }),
};

const voc = (state = initialState, action) => {
  const handler = handlers[action.type];

  if (!handler) {
    return state;
  }

  return handler(state, action);
};

export default voc;
