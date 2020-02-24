import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios'



    export const ModalContext = createContext();

    const ModalProvider = (props) => {

        //State provider

        const [idrecipe, saveIdRecipe] = useState(null);
        const [Inforecipe, SaveRecipe] = useState({});

        // Al tener una receta llamar a la API

        useEffect(() => {

            const getRecipe = async () => {

                if(!idrecipe) return;

                const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`;
                const result = await axios.get(url);
                SaveRecipe(result.data.drinks[0]);

            }

            getRecipe();

        }, [idrecipe]);

        return ( 
            <ModalContext.Provider
                value={{
                    Inforecipe,
                    saveIdRecipe,
                    SaveRecipe
                }}>
                {props.children}
            </ModalContext.Provider>
        );
}
 
export default ModalProvider;