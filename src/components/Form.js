import React, {useContext, useState} from 'react';
import {CategoriesContext} from '../context/CategoriesContext';
import {RecipesContext} from '../context/RecipesContext';
import Error from './Error';


    const Form = () => {

        //State
        const [search, SaveSearch] = useState ({
            name: '',
            category: ''
        });
        const [error, SaveError]=useState(false);

        //Extract value
        const {name, category} = search;

        //Extract Context
        const {categories} = useContext(CategoriesContext);
        const {SearchRecipes, SaveConsult} = useContext(RecipesContext);
        
        //Read content
        const GetRecipeData = e => {
            SaveSearch({
                ...search,
                [e.target.name] : e.target.value
            })
        }
        

        // Handle Submit
        const handleSubmit = e => {
            e.preventDefault();

            //Validate
            if(name.trim() === '' || category.trim() === '' ){
                SaveError(true);
                return;
            }

            SaveError(false);
            SearchRecipes(search);
            SaveConsult(true);
        }

    
        return ( 
            <form
            className="col-md-12 pl-5 pr-5"
            onSubmit={handleSubmit} >
                <fieldset>
                    <legend>Search for your drink now!</legend>
                </fieldset>

                <div className="row">
                    <div className="col-md-4 mb-2">
                        <input
                            name="name"
                            className="form-control"
                            type="text"
                            placeholder="Search Ingredient"
                            onChange = {GetRecipeData}
                        />
                    </div>
                    <div className="col-md-4 mb-2">
                        <select 
                            className="form-control"
                            name="category"
                            onChange = {GetRecipeData}
                        >
                            <option value="">---Select Category---</option>
                            {categories.map(category => (
                                <option 
                                    key= {category.strCategory}
                                    value={category.strCategory}
                                >{category.strCategory}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <input 
                            type="submit"
                            className="btn  btn-block"
                            value="Search recipes"
                        />
                    </div>
                    {error ? <Error message="All fields are required." /> : null}
                </div>
            </form>
        );
    }
 
export default Form;