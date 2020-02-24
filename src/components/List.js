import React, {useContext} from 'react';
import {RecipesContext} from '../context/RecipesContext';
import Recipe from './Recipe';

    const List = () => {

        const {recipes} = useContext (RecipesContext);
        
        return ( 
            <div className="row mt-5">
                {recipes.map(recipefull => (
                    <Recipe 
                        key={recipefull.idDrink}
                        recipefull={recipefull}
                    />
                ))}
            </div>
        );
    }
 
export default List;