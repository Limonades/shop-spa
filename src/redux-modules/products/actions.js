import * as types from './types';
import { API } from '../../utils';
import { PRODUCT_URL } from '../../utils/constants';

export const setIsFetching = bool => ({
  type: types.IS_FETCHING,
  payload: bool,
});

export const fetchSuccess = result => ({
  type: types.FETCH_SUCCESS,
  payload: result,
});

export const fetchError = err => ({
  type: types.FETCH_ERROR,
  payload: err,
});

export const fetchProducts = () => async dispatch => {
  dispatch(setIsFetching(true));

  try {
    const result = await API.get(PRODUCT_URL).then(response => response.json());
    dispatch(fetchSuccess(result));
  } catch (e) {
    const err = {
      status: 599,
      message: 'Oops! Something wend wrong!',
    };
    dispatch(fetchError(err));
  } finally {
    dispatch(setIsFetching(false));
  }
};

export const filterProducts = id => ({
  type: types.FILTER_PRODUCTS,
  payload: id,
});

export const filterReset = () => ({
  type: types.FILTER_RESET,
});

export const sortItems = name => ({
  type: types.SORT_PRODUCTS,
  payload: name,
});

export const selectProduct = id => ({
  type: types.SELECT_PRODUCT,
  payload: id,
});
