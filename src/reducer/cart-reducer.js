const initialCart = () => {
  const cart = localStorage.getItem("carrito");
  return cart ? JSON.parse(cart) : [];
};

export const initialState = {
  cart: initialCart(),
};

const cartActions =
  { type: "add-to-cart" } | { type: "remove-to-cart" } | { type: "clear-cart" };

export const cartReducer = (state = initialState, action = cartActions) => {
  
  if (action.type === "add-to-cart") {
    let updateCart = [];
    const { id } = action.payload;
    // Structure Clone
    const productInCartIndex = state.cart.findIndex((state) => state.id === id);
    if (productInCartIndex >= 0) {
      //actualizando con structureClone
      const newCart = structuredClone(state.cart);
      newCart[productInCartIndex].cantidad += 1;
      updateCart = newCart;
    } else {
      const newItem = { ...action.payload, cantidad: 1 };
      updateCart = [...state.cart, newItem];
    }

    return {
      ...state,
      cart: updateCart,
    };
  }

  if (action.type === "remove-to-cart") {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: newCart,
    };
  }

  if (action.type === "clear-cart") {
    return {
      ...state,
      cart: [],
    };
  }

  return state;
};
