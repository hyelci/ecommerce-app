import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
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

  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return { ...state, singleProductLoading: true, singleProductError: false };
  }

  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      singleProductLoading: false,
      singleProduct: action.payload,
    };
  }

  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return { ...state, singleProductLoading: false, singleProductError: true };
  }

  if (action.type === HANDLE_SEARCH) {
    return { ...state, query: action.payload };
  }

  if (action.type === HANDLE_FILTER) {
    const visibleProducts = state.products.filter((product) =>
      product.name.toLowerCase().includes(state.query.toLowerCase())
    );
    return { ...state, visibleProducts };
  }

  if (action.type === CATEGORY_FILTER) {
    const visibleProducts = state.products.filter(
      (product) =>
        product.category === action.payload || action.payload === "all"
    );
    return { ...state, visibleProducts };
  }

  if (action.type === COMPANY_FILTER) {
    const visibleProducts = state.products.filter(
      (product) =>
        product.company === action.payload || action.payload === "all"
    );
    return { ...state, visibleProducts };
  }

  if (action.type === COLOR_FILTER) {
    const visibleProducts = state.products.filter(
      (product) =>
        product.colors.find((c) => c === action.payload) ||
        action.payload === "all"
    );
    return { ...state, visibleProducts };
  }

  if (action.type === PRICE_FILTER) {
    const visibleProducts = state.products.filter(
      (product) => product.price / 100 <= action.payload / 100
    );
    return { ...state, visibleProducts, price: action.payload };
  }

  if (action === CLEAR_FILTER) {
    return {
      ...state,
      filters: {
        ...state.filters,
        filters: { category: "all", company: "all", colors: "all" },
      },
    };
  }

  if (action.type === DECREASE_AMOUNT) {
    const cart = state.cart.map((item) => {
      if (item.id === action.payload && item.amount > 1) {
        return { ...item, amount: item.amount - 1 };
      } else {
        return item;
      }
    });

    return {
      ...state,
      cart,
    };
  }

  if (action.type === INCREASE_AMOUNT) {
    const cart = state.cart.map((item) => {
      if (item.id === action.payload && item.amount < item.product.stock) {
        return { ...item, amount: item.amount + 1 };
      } else {
        return item;
      }
    });

    return {
      ...state,
      cart,
    };
  }

  if (action.type === CART_TOTAL) {
    let orderTotal = 0;
    for (const item of state.cart) {
      orderTotal = orderTotal + item.product.price * item.amount;
    }
    return { ...state, orderTotal };
  }

  if (action.type === DELETE_ITEM) {
    const notDeletedItem = state.cart.filter(
      (item) => item.id !== action.payload
    );
    return { ...state, cart: notDeletedItem };
  }

  if (action.type === ADD_TO_CART) {
    const existingItem = state.cart.find(
      (item) => item.id === action.payload.id
    );
    if (existingItem) {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (existingItem.id === action.payload.id) {
            return { ...item, amount: item.amount + 1 };
          } else {
            return item;
          }
        }),
      };
    } else {
      return {
        ...state,
        cart: [...state.cart, { ...action.payload }],
      };
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default ProductsReducer;
