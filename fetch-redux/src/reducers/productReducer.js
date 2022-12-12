import { GET_PRODUCT } from '../actionsTypes/actionsTypes';

const initState = {};

const productReducer = (state = initState, action) => {
  const { type, payload } = action;
  console.log('***productReducer ', payload);

  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        payload,
      };

    default:
      return state;
  }
};

export default productReducer;
