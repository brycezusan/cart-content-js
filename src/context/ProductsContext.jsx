import { createContext, useEffect, useMemo, useState } from "react";
import { products as initial_state } from "../mocks/products.json";

const ProductContext = createContext();

const initialCart = () => {
  const storage = localStorage.getItem("carrito");
  return storage ? JSON.parse(storage) : [];
};

const ProductContextProvider = ({ children }) => {
  const [products] = useState(initial_state);
  const [filtros, setFiltros] = useState({
    categoria: "all",
    precio: 0,
  });
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);

  const productFiltered = (productos) => {
    const newProducts = productos.filter((prod) => {
      return (
        prod.price >= filtros.precio &&
        (filtros.categoria === "all" || prod.category === filtros.categoria)
      );
    });
    return newProducts;
  };

  const addItemCart = (item) => {
    const { id } = item;
    //Structure Clone
    // const productInCartIndex = cart.findIndex((state) => state.id === id);
    // if (productInCartIndex >= 0) {
    //   //actualizando con structureClone
    //   const newCart = structuredClone(cart);
    //   newCart[productInCartIndex].cantidad += 1;
    //   return setCart(newCart);
    // } else {
    //   setCart((prevState) => [...prevState, { ...item, cantidad: 1 }]);
    // }
    //Recorriendo el arreglo
    const agregado = cart.find((item) => item.id === id);
    if (agregado) {
      const newCart = cart.map((cartState) =>
        cartState.id === id
          ? { ...cartState, cantidad: cartState.cantidad + 1 }
          : cartState
      );
      setCart(newCart);
    } else {
      setCart((prevState) => [...prevState, { ...item, cantidad: 1 }]);
    }
  };

  const removeItemCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const productosFiltrados = productFiltered(products);

  const isEmpty = productosFiltrados.length === 0;
  const isEmptyCart = useMemo(() => cart.length === 0, [cart]);

  return (
    <ProductContext.Provider
      value={{
        products: productosFiltrados,
        filtros,
        setFiltros,
        isEmpty,
        isEmptyCart,
        cart,
        addItemCart,
        removeItemCart,
        clearCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext };

export default ProductContextProvider;
