import * as types from './types';

const initialState = {
  isFetching: false,
  error: null,
  items: [],
  filteredItems: null,
};

export const products = (state = initialState, action) => {
  switch (action.type) {
    case types.IS_FETCHING:
      return { ...state, isFetching: action.payload };

    case types.FETCH_SUCCESS:
      return { ...state, items: action.payload };

    case types.FILTER_PRODUCTS:
      return {
        ...state,
        filteredItems: state.items.filter(item => item.category.id === action.payload),
      };

    case types.FILTER_RESET:
      return { ...state, filteredItems: null };

    case types.SORT_PRODUCTS:
      if (action.payload === 'priceDown') {
        if (state.filteredItems) {
          return {
            ...state,
            filteredItems: [...state.filteredItems].sort((a, b) => b.price - a.price),
            items: [...state.items].sort((a, b) => b.price - a.price),
          };
        }

        return { ...state, items: [...state.items].sort((a, b) => b.price - a.price) };
      }

      if (action.payload === 'priceUp') {
        if (state.filteredItems) {
          return {
            ...state,
            filteredItems: [...state.filteredItems].sort((a, b) => a.price - b.price),
            items: [...state.items].sort((a, b) => a.price - b.price),
          };
        }

        return { ...state, items: [...state.items].sort((a, b) => a.price - b.price) };
      }

      if (action.payload === 'popular') {
        if (state.filteredItems) {
          return {
            ...state,
            filteredItems: [...state.filteredItems].sort((a, b) => a.count - b.count),
            items: [...state.items].sort((a, b) => a.count - b.count),
          };
        }

        return { ...state, items: [...state.items].sort((a, b) => a.count - b.count) };
      }

      if (action.payload === 'new') {
        if (state.filteredItems) {
          return {
            ...state,
            filteredItems: [...state.filteredItems].sort(
              (a, b) => b.createdTimestamp - a.createdTimestamp
            ),
            items: [...state.items].sort((a, b) => b.createdTimestamp - a.createdTimestamp),
          };
        }

        return {
          ...state,
          items: [...state.items].sort((a, b) => b.createdTimestamp - a.createdTimestamp),
        };
      }
      return { ...state };

    case types.SELECT_PRODUCT:
      return { ...state, selectedId: action.payload };

    default:
      return state;
  }
};
