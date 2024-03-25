import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import { products as initial_state } from "../mocks/products.json";
import {cartReducer,initialState} from "../reducer/cart-reducer"

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products] = useState(initial_state);
  const [filtros, setFiltros] = useState({
    categoria: "all",
    precio: 0,
  });

  const [state, dispatch] = useReducer(cartReducer,initialState)

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(state.cart));
  }, [state.cart]);

  const productFiltered = (productos) => {
    const newProducts = productos.filter((prod) => {
      return (
        prod.price >= filtros.precio &&
        (filtros.categoria === "all" || prod.category === filtros.categoria)
      );
    });
    return newProducts;
  };

  const productosFiltrados = productFiltered(products);

  const isEmpty = productosFiltrados.length === 0;
  const isEmptyCart = useMemo(() => state.cart.length === 0, [state.cart]);

  return (
    <ProductContext.Provider
      value={{
        products: productosFiltrados,
        filtros,
        setFiltros,
        isEmpty,
        isEmptyCart,
        state,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext };

export default ProductContextProvider;
