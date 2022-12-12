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

  if (!product) return <p>No items to show</p>;

  return (
    <>
      <h1>{product.title}</h1>
      <h2>{product.price}</h2>
      <p>{product.description}</p>
      <div>
        {product.images.map((item, index) => (
          <img src={item} alt={product.title} key={index} />
        ))}
      </div>
    </>
  );
};

export default Home;
