export const ADD_CART = 'ADD_CART';
export const DEL_ITEM = 'DEL_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const addCart = (item) => ({
  type: ADD_CART,
  payload: item
});

export const delItem = (id) => ({
  type: DEL_ITEM,
  payload: id
});

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: id
});
