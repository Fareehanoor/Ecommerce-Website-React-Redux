import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { ClipLoader } from 'react-spinners';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#000" size={50} />
      </div>
    );
  };

  const ShowProduct = () => {
    return (
      <div className="flex flex-col md:flex-row justify-center mt-10 md:mt-20 px-4 md:px-0">
        <div className="flex-1 flex items-center justify-center mb-6 md:mb-0">
          <img 
            src={product.image} 
            alt={product.title} 
            className="object-contain w-full h-auto max-w-md md:max-w-lg" 
          />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-4 px-4">
          <h2 className="text-xl md:text-2xl font-bold">{product.title}</h2>
          <p className="text-gray-600 text-sm md:text-base">{product.category}</p>
          <p className="text-xl md:text-2xl font-bold">
            Rating {product.rating && product.rating.rate}{' '}
            <FontAwesomeIcon icon={faStar} />
          </p>
          <p className="text-gray-700 font-bold text-lg">${product.price}</p>
          <p className="text-gray-700">{product.description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </button>
            <NavLink
              type="button"
              to="/cart"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Go to Cart
            </NavLink>
          </div>
        </div>
      </div>
    );
  };

  return <div>{loading ? <Loading /> : product && <ShowProduct />}</div>;
};

export default Product;
