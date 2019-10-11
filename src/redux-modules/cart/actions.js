import * as types from './types';

export const addToCart = item => ({
  type: types.ADD_PRODUCT,
  payload: item,
});

export const increaseQuantity = id => ({
  type: types.INCREASE_QUANTITY,
  payload: id,
});

export const decreaseQuantity = id => ({
  type: types.DECREASE_QUANTITY,
  payload: id,
});
