import { useContext } from "react";
import { ProductContext } from "../context/ProductsContext";

export const useProduct = ()=>{
  const context = useContext(ProductContext)
  if(!context) throw new Error('Utilizalo con el ContextProvider')
  return context
} 