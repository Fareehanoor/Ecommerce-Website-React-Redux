import { ADD_CART, DEL_ITEM, REMOVE_ITEM } from '../action';

const initialState = [];

const handleCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART: {
      const exist = state.find((item) => item.id === action.payload.id);
      if (exist) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...state,
          { ...action.payload, quantity: 1 }
        ];
      }
    }
    case REMOVE_ITEM: {
      const removeItem = state.find((item) => item.id === action.payload.id);
      if (removeItem.quantity === 1) {
        return state.filter((item) => item.id !== action.payload.id);
      } else {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    }
    case DEL_ITEM:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

export default handleCart;
