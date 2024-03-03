import { createContext, useContext, useEffect, useState } from "react";
import { CategoriesLst } from "../data/Categories";

type CategoryType = {
  title: string;
  img: any;
  quantity: number;
  products: any
}

export const CategoryContext = createContext<CategoryType>({
    title: '',
    img: undefined,
    quantity: 1,
    products: []
})

export const useCategory = () => {
    return useContext(CategoryContext)
}

interface CategoryProviderProps {
    children: React.ReactNode,
    category: any
}

const CategoryProvider = ({children, category}: CategoryProviderProps) => {

    const categories = CategoriesLst; 

    const title = ''
    const img = require('')
    const quantity = 1
    const products = [{}]

    const contextValue = {title, img, quantity, products}

    return (
        <CategoryContext.Provider value={contextValue}>{children}</CategoryContext.Provider>
    )
}

export default CategoryProvider
