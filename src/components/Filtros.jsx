import { useId } from "react";
import { useProduct } from "../hooks/useProduct";
import { categorias } from "../mocks/categories.json";


export default function Filtros() {
  const categoriaID = useId();
  const precioID = useId();
  const {filtros , setFiltros} = useProduct()

  return (
    <form className="mt-10 max-w-2xl mx-auto ">
      <legend className="text-2xl text-center text-white my-4">
        Filtros de Busqueda
      </legend>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-10 w-5/6 mx-auto lg:w-full lg:m-0">
        <div className="flex flex-col gap-2">
          <label htmlFor={categoriaID} className="font-bold text-white ">
            Categorias
          </label>
          <select
            id={categoriaID}
            className="w-[240px] mx-auto text-center font-bold text-slate-500 py-1 rounded"
            value={filtros.categoria}
            onChange={(e) =>
              setFiltros({ ...filtros, categoria: e.target.value })
            }
          >
            <option value="all"> --- Seleccione --- </option>
            {categorias.map((cat, index) => (
              <option key={`cat-${index}`} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 w-full">
          <label htmlFor={precioID} className="font-bold text-white ">
            Precio
          </label>
          <div>
            <input
              className="w-full"
              type="range"
              max={1000}
              min={0}
              step={100}
              value={filtros.precio}
              onChange={(e) =>
                setFiltros({ ...filtros, precio: +e.target.value })
              }
            />
            <div className="flex justify-between text-white font-black">
              <span>{filtros.precio}</span>
              <span>1000</span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
