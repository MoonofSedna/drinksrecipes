import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

    export const RecipesContext = createContext();

    const RecipesProvider = (props) => {

        const [recipes, SaveRecipes] = useState([]);
        const [Search, SearchRecipes] = useState({
            name: '',
            category: ''
        });

        const [consult, SaveConsult] = useState(false);

        const {name, category} = Search;

        useEffect(() => {

            if(consult){

                const GetRecipes = async () => {
                    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
                    const result = await axios.get(url);
                    
                    SaveRecipes(result.data.drinks);
                }
                GetRecipes();
            }
            
        }, [Search, name, consult, category]);

        return ( 
            <RecipesContext.Provider
            value={{
                recipes,
                SearchRecipes,
                SaveConsult,
            }}>
                {props.children}
            </RecipesContext.Provider>

        );
    }
 
export default RecipesProvider;