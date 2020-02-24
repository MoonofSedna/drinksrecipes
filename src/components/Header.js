import React from 'react';
import imagen from '../img/img-2.png';


     const Header = () => {
     return ( 
          <header className="container">
               <img className="img-header" src={imagen}  alt='logo'/>
          </header>
          );
     }
 
export default Header;
