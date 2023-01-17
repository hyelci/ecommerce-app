import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducer/ProductsReducer";

import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
} from "../action";

const initialState = {
  products: [],
  productsLoading: false,
  productsError: false,
  featuredProducts: [],
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

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
