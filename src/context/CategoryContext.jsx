import { createContext, useContext, useEffect, useState } from "react";
import { categories } from "../db/category";


const CategoryContext = createContext();

export  const CategoryContextProvider = ({children}) => {
    const [categoriesData, setCategoriesData] = useState(); 

    useEffect(() => {
        setCategoriesData(categories)
    }, [])

    return(
        <CategoryContext.Provider value={categoriesData}>
            {children}
        </CategoryContext.Provider>
    )
}

export const useCategory = () => useContext(CategoryContext);