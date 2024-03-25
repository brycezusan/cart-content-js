import {useProduct} from "../hooks/useProduct"
import ItemProduct from "./ItemProduct";

export default function Products() {
  const { products  , isEmpty } = useProduct()

  return (
    <>
      <h2 className=" text-center py-6 text-white text-2xl">
        {isEmpty ? 'Sin Resultados' : 'Lista de Articulos'}
      </h2>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto w-11/12 lg:w-full max-w-7xl pb-10">
        {products.map((product) => (
          <ItemProduct key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}
