import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const totalAmount = state.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const checkoutItems = (cartItem) => (
    <div className="p-4 my-5 bg-gray-100 rounded-lg shadow-md" key={cartItem.id}>
      <div className="container py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={cartItem.image}
            alt={cartItem.title}
            className="object-contain h-24 w-24"
          />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{cartItem.title}</h3>
            <p className="text-lg font-bold">${cartItem.price}</p>
            <p className="text-sm">Quantity: {cartItem.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const emptyCartMessage = () => (
    <div className="p-4 my-5 bg-gray-100 rounded-lg shadow-md">
      <div className="container py-4">
        <div className="flex justify-center">
          <h3>Your Cart is Empty</h3>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {state.length === 0 ? (
        emptyCartMessage()
      ) : (
        <div>
          {state.map(checkoutItems)}
          <div className="p-4 my-5 bg-gray-100 rounded-lg shadow-md">
            <div className="container py-4">
              <h2 className="text-xl font-bold">Total Amount: ${totalAmount.toFixed(2)}</h2>
              <div className="flex justify-center mt-4">
                <NavLink to="/products" className="btn btn-primary mb-5 mx-auto">
                  Continue Shopping
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;

