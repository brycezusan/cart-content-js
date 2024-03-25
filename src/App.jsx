import Products from "./components/Products";
import Cart from "./components/Cart";
import Filtros from "./components/Filtros";
import useToogle from "./hooks/useToogle";
import { useProduct } from "./hooks/useProduct";

function App() {
  const { cart } = useProduct();
  const { toogle, handleClickToogle } = useToogle();
  return (
    <>
      <header className="py-12 text-center sticky top-0 bg-slate-900/90">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold text-white">
            Carrito de Compras{" "}
            <span className="cursor-pointer" onClick={handleClickToogle}>
              🛒
            </span>
          </h1>
          <small className="text-red-500 font-bold">{cart.length}</small>
        </div>
        <Filtros />
      </header>
      <Products />
      <Cart toogle={toogle} />
    </>
  );
}

export default App;
