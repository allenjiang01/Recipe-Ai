import React, {useState} from "react";
import './Header.css';
import SearchForm from './SearchForm.jsx';


let headerIMG = 'food-cropped.jpg';

function Header({onRecipesUpdate}) {
        
    return (
        <div className="header-container" style={{ backgroundImage: `url(${headerIMG})` }}>
           <SearchForm onRecipesUpdate={onRecipesUpdate}/>
        </div>
    )
}

export default Header;