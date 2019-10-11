import * as types from './types';

const initialState = {
  items: [],
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT:
      const isExist = state.items.reduce((acc, val) => {
        if (val.id === action.payload.id) {
          return true;
        }

        return acc;
      }, false);
      if (isExist) {
        const computedItems = state.items.reduce((acc, val) => {
          if (val.id === action.payload.id) {
            val.qty++;
          }

          acc.push(val);

          return acc;
        }, []);

        return { ...state, items: computedItems };
      }

      return { ...state, items: [...state.items, action.payload] };

    case types.INCREASE_QUANTITY:
      const increasedItems = state.items.reduce((acc, val) => {
        if (val.id === action.payload) {
          val.qty++;
        }

        acc.push(val);

        return acc;
      }, []);

      return {
        ...state,
        items: increasedItems,
      };

    case types.DECREASE_QUANTITY:
      const decreasedItems = state.items.reduce((acc, val) => {
        if (val.id === action.payload) {
          if (val.qty === 1) {
            return acc;
          }

          val.qty--;
        }

        acc.push(val);

        return acc;
      }, []);

      return {
        ...state,
        items: decreasedItems,
      };

    default:
      return state;
  }
};
