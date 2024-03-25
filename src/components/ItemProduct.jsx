import { useProduct } from "../hooks/useProduct";
import { formatCurrency } from "../utils";
import { AddToCartIcon } from "./Icons";

export default function ItemProduct({product}) {
  const {addItemCart} =  useProduct()

  return (
    <div className="bg-gray-50 rounded-md shadow">
      <img
        className="w-full h-64 object-cover p-4"
        src={product.thumbnail}
        alt={`producto-${product.title}`}
      />

      <div className="text-center py-4 space-y-3 text-blue-500 font-bold">
        <p className="truncate">
          {product.title} - {formatCurrency(product.price)}
        </p>
        <button
          onClick={() =>
            addItemCart({
              id: product.id,
              titulo: product.title,
              precio: product.price,
              imagen: product.thumbnail,
            })
          }
          className="bg-red-500"
        >
          <AddToCartIcon />
        </button>
      </div>
    </div>
  );
}
