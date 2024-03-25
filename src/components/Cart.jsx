import { useProduct } from "../hooks/useProduct";
import AmountsCard from "./AmountsCard";
import ItemCart from "./ItemCart";

export default function Cart({ toogle }) {
  const { state, isEmptyCart } = useProduct();

  return (
    <div
      className={`${
        toogle ? "fixed" : "hidden"
      }  top-0 w-2/3 md:w-1/3 lg:w-3/12 bg-white h-screen overflow-y-scroll`}
    >
      <div className="w-11/12 mx-auto my-8">
        <h2 className="text-center text-blue-500 py-4">
          {isEmptyCart ? "Lista Vacia" : "Lista de Productos"}
        </h2>
        {isEmptyCart ? (
          <p>Sin productos</p>
        ) : (
          <>
            <ul className="flex flex-col gap-2">
              {state.cart.map((item) => (
                <ItemCart key={item.id } item={item}/>
              ))}
            </ul>
           <AmountsCard />
          </>
        )}
      </div>
    </div>
  );
}
