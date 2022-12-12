const BASE_URL = 'https://dummyjson.com/';

const doFecthData = async (endpoint) => {
  const data = await fetch(BASE_URL + endpoint);
  const res = await data.json();
  return res;
};
