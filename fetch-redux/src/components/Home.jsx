import React, { useState, useEffect } from 'react';
import doFecthData from '../helpers/doFetchData';

const Home = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function getProduct() {
      setProduct(await doFecthData('products/1'));
    }

    getProduct();
  }, []);

  console.log(product);

  if (!product) return <p>No items to show</p>;

  return (
    <>
      <h1>{product.title}</h1>
      <h2>{product.price}</h2>
      <p>{product.description}</p>
    </>
  );
};

export default Home;
