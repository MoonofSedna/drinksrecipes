import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';


    //Create Context
    export const CategoriesContext = createContext();

    //Provider: this is where the functions and state are stored
    const CategoriesProvider = (props) => {

        // Create State Context
        const[categories, SaveCategories] =useState([]);

        // Call API
        useEffect(() => {

            const getCategories = async () =>{

                const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
                const categories = await axios.get(url);

                SaveCategories(categories.data.drinks);

            }

                getCategories();

        }, []);

        return(

            <CategoriesContext.Provider
                value={{
                    categories
                }}>
                {props.children}
            </CategoriesContext.Provider>

        )
    }

export default CategoriesProvider;
