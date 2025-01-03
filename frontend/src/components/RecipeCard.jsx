import React, {useState} from "react";
import './RecipeCard.css'

function RecipeCard({recipe, video, image}) {
        
    return (
        <div className="main-card">
            <p><strong>Name: </strong>{recipe["name"]}</p>

            <p><img className="recipeImage" src={image}></img></p>

            <p><strong>Description: </strong>{recipe["description"]}</p>
         
            <p><strong>Estimated Time: </strong>{recipe["time"]}</p>
         
            <p><strong>Difficulty: </strong>{recipe["difficulty"]}</p>

            <p><strong>Recipe: </strong></p>

            <p>
                <iframe className="recipeVideo" width="320" height="215" src={`https://www.youtube.com/embed/${video}`}></iframe>
            </p>
            
        </div>
    )
}

export default RecipeCard;