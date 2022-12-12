import doFecthData from '../helpers/doFetchData';
import { GET_PRODUCT } from '../actionsTypes/actionsTypes';

export const fetchProduct = (id) => {
  const payload = doFecthData(`products/${id}`);

  return {
    type: GET_PRODUCT,
    payload,
  };
};
