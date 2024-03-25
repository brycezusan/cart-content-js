import { useProduct } from "../hooks/useProduct";
import { formatCurrency } from "../utils";
import { RemoveFromCartIcon } from "./Icons";

export default function ItemCart({item}) {
  const {dispatch} =  useProduct()
  return (
    <li key={item.id} className="flex gap-4  lg:justify-around items-center">
      <img
        className="w-20 h-20 object-cover"
        src={item.imagen}
        alt={`item-${item.titulo}`}
      />
      <div className="font-bold">
        <p>{item.titulo}</p>
        <p>{formatCurrency(item.precio)}</p>
        <div className="flex justify-center gap-5">
          <p>{item.cantidad}</p>
          <button
            onClick={() =>dispatch({type:'remove-to-cart',payload:item.id})}
            className="text-red-800"
          >
            <RemoveFromCartIcon />
          </button>
        </div>
      </div>
    </li>
  );
}
