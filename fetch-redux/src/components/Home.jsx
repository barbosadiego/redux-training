import React from 'react';
import { useSelector } from 'react-redux';
import doFecthData from '../helpers/doFetchData';
import { fetchProduct } from '../actions/fetchAction';
import { useEffect } from 'react';

const Home = () => {
  const store = useSelector((store) => store);
  console.log('***home page ', store);

  useEffect(() => {
    fetchProduct(1);
  }, []);

  // if (!product) return <p>No items to show {store.name}</p>;

  return (
    <>
      {/* <h1>{product.title}</h1>
      <h2>{product.price}</h2>
      <p>{product.description}</p>
      <div>
        {product.images.map((item, index) => (
          <img src={item} alt={product.title} key={index} />
        ))}
      </div> */}
    </>
  );
};

export default Home;
