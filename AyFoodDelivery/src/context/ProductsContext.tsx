import { createContext, useContext, useEffect, useState } from "react";
import { CategoriesLst } from "../data/Categories";

type CategoryType = {
  title: string;
  img: any; 
  quantity: number;
  products: any
}

type ProductsContextType = {
    categories: CategoryType[]; 
}

export const ProductsContext = createContext<ProductsContextType>({
    categories: CategoriesLst 
})

export const useProducts = () => {
    return useContext(ProductsContext)
}

interface ProductsProviderProps {
    children: React.ReactNode
}

const ProductsProvider = ({children}: ProductsProviderProps) => {

    const categories = CategoriesLst; 

    const contextValue = {categories}

    return (
        <ProductsContext.Provider value={contextValue}>{children}</ProductsContext.Provider>
    )
}

export default ProductsProvider
