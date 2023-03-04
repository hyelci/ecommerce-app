import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductsReducer";

import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  HANDLE_SEARCH,
  HANDLE_FILTER,
  CATEGORY_FILTER,
  COMPANY_FILTER,
  COLOR_FILTER,
  PRICE_FILTER,
  CLEAR_FILTER,
  ADD_TO_CART,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  DELETE_ITEM,
  CART_TOTAL,
} from "../action";

const initialState = {
  products: [],
  productsLoading: false,
  productsError: false,
  singleProduct: {},
  singleProductLoading: true,
  singleProductError: false,
  featuredProducts: [],
  query: "",
  visibleProducts: [],
  amount: 0,
  price: 0,
  orderTotal: 0,
  cart: [],
  filters: {
    company: "all",
    category: "all",
    colors: "all",
  },
};

const ProductsUrl = `https://course-api.com/react-store-products`;

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(ProductsUrl);
      const products = response.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(url);
      const singleProduct = response.data;
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };

  const handleFilter = () => {
    dispatch({ type: HANDLE_FILTER });
  };

  const categoryFilter = (category) => {
    dispatch({ type: CATEGORY_FILTER, payload: category });
  };

  const companyFilter = (company) => {
    dispatch({ type: COMPANY_FILTER, payload: company });
  };

  const colorFilter = (color) => {
    dispatch({ type: COLOR_FILTER, payload: color });
  };

  const priceFilter = (price) => {
    dispatch({ type: PRICE_FILTER, payload: price });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  const addToCart = (itemsDetails) => {
    dispatch({
      type: ADD_TO_CART,
      payload: itemsDetails,
    });
    dispatch({
      type: CART_TOTAL,
    });
  };

  const increaseAmount = (id) => {
    dispatch({ type: INCREASE_AMOUNT, payload: id });
    dispatch({
      type: CART_TOTAL,
    });
  };

  const decreaseAmount = (id) => {
    dispatch({ type: DECREASE_AMOUNT, payload: id });
    dispatch({
      type: CART_TOTAL,
    });
  };

  const deleteItem = (id) => {
    dispatch({ type: DELETE_ITEM, payload: id });
    dispatch({
      type: CART_TOTAL,
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        handleSearch,
        handleFilter,
        categoryFilter,
        companyFilter,
        colorFilter,
        priceFilter,
        clearFilter,
        fetchSingleProduct,
        addToCart,
        increaseAmount,
        decreaseAmount,
        deleteItem,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
