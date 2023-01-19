import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  HANDLE_SEARCH,
  HANDLE_FILTER,
} from "../action";

const ProductsReducer = (state, action) => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, productsLoading: true };
  }

  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featuredProducts = action.payload.filter(
      (product) => product.featured === true
    );

    return {
      ...state,
      productsLoading: false,
      products: action.payload,
      featuredProducts,
      visibleProducts: action.payload,
    };
  }

  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, productsLoading: false, productsError: true };
  }

  if (action.type === HANDLE_SEARCH) {
    return { ...state, query: action.payload };
  }

  if (action.type === HANDLE_FILTER) {
    const visibleProducts = state.products.filter((product) =>
      product.name.toLowercase().includes(state.query.toLowercase())
    );
    return { ...state, visibleProducts };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default ProductsReducer;
