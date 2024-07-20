//import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HiOutlineX } from 'react-icons/hi';
import { delItem, addCart, removeItem } from '../redux/action';

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  const handleIncrement = (item) => {
    dispatch(addCart(item));
  };

  const handleDecrement = (item) => {
    dispatch(removeItem(item));
  };

  const cartItems = (cartItem) => (
    <div className="p-4 my-5 bg-gray-100 rounded-lg shadow-md" key={cartItem.id}>
      <div className="container py-4">
        <button
          onClick={() => handleClose(cartItem)}
          className="float-right text-gray-500 hover:text-red-500"
          aria-label="Close"
        >
          <HiOutlineX size={20} />
        </button>
        <div className="flex justify-center">
          <div className="w-1/3">
            <img
              src={cartItem.image}
              alt={cartItem.title}
              className="object-contain h-48 w-36"
            />
          </div>
          <div className="w-1/3 px-4 flex flex-col justify-center">
            <h3 className="text-xl font-semibold">{cartItem.title}</h3>
            <p className="text-lg font-bold">${cartItem.price}</p>
            <div className="flex items-center mt-2">
              <button
                onClick={() => handleDecrement(cartItem)}
                className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                -
              </button>
              <span className="mx-2">{cartItem.quantity}</span>
              <button
                onClick={() => handleIncrement(cartItem)}
                className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const emptyCart = () => (
    <div className="p-4 my-5 bg-gray-100 rounded-lg shadow-md">
      <div className="container py-4">
        <div className="flex justify-center">
          <h3>Your Cart is Empty</h3>
        </div>
      </div>
    </div>
  );

  const button = () => (
    <div className="container">
      <div className="flex justify-center">
        <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">
          Proceed To Checkout
        </NavLink>
      </div>
    </div>
  );

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
