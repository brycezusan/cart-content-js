import { useMemo } from "react";
import { useProduct } from "../hooks/useProduct";
import { formatCurrency } from "../utils";
import { ClearCartIcon } from "./Icons";

export default function AmountsCard() {
  const { state, dispatch } = useProduct();

  const subtotal = useMemo(
    () =>
      state.cart.reduce(
        (acum, valor) => acum + valor.precio * valor.cantidad,
        0
      ),
    [state.cart]
  );
  const igv = subtotal * 0.15;
  const total = subtotal + igv;

  return (
    <div className="py-5 border-t mt-5">
      <div className="space-y-1 font-bold text-center">
        <p>
          Subtotal: <span>{formatCurrency(subtotal)}</span>
        </p>
        <p>
          ivg: <span>{formatCurrency(igv)}</span>
        </p>
        <p>
          total: <span>{formatCurrency(total)}</span>
        </p>

        <div className="flex justify-center pt-2">
          <button
            onClick={() => dispatch({ type: "clear-cart" })}
            className="text-white w-10 h-10 flex justify-center items-center bg-red-500 rounded-full"
          >
            <ClearCartIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
