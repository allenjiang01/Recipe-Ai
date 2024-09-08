import React, {useState} from "react";

function SearchBox() {
    
    const [ingredients, updateIngredients] = useState("");

    function handleNewIngredients(event) {
        const newIngredients = event.target.value;
        updateIngredients(newIngredients);
    }

    function handleSubmit(event) {
        event.preventDefault();

    }
    
    return (
        <div>
            <form>
            <input type="text" name="ingredients" onChange={handleNewIngredients} value={ingredients}/>
            <input type="button" value="Submit" onClick={handleSubmit}/>
            </form>
        </div>
    )
}

export default SearchBox;