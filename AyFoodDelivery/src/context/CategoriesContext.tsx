import { createContext, useContext, useEffect, useState } from "react";
import { CategoriesLst } from "../data/Categories";

type CategoryType = {
  title: string;
  img: any;
  quantity: number;
  products: any
}

type CategoriesContextType = {
    categories: CategoryType[]; 
}

export const CategoriesContext = createContext<CategoriesContextType>({
    categories: []
})

export const useCategories = () => {
    return useContext(CategoriesContext)
}

interface CategoriesProviderProps {
    children: React.ReactNode
}

const CategoriesProvider = ({children}: CategoriesProviderProps) => {

    const categories = CategoriesLst; 

    const contextValue = {categories}

    return (
        <CategoriesContext.Provider value={contextValue}>{children}</CategoriesContext.Provider>
    )
}

export default CategoriesProvider
