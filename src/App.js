import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import CategoriesProvider from './context/CategoriesContext';
import RecipesContext from './context/RecipesContext';
import ModalProvider from './context/ModalContext';


  function App() {

    return (
    <CategoriesProvider>
      <RecipesContext>
         <ModalProvider>
         <Header />
           <div className="container ">
             <div>
               <Form />
             </div>
             <List />
            </div>
          </ModalProvider>
      </RecipesContext>
    </CategoriesProvider>
    );
  }

export default App;
