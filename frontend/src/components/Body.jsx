import React, { useState, useEffect } from "react";
import "./Body.css";
import RecipeCard from "./RecipeCard";
import Loading from "./Loading";
import { useSelector } from "react-redux"; // To access state


function Body({ recipes }) {
    const isLoading = useSelector((state) => state.loading.isLoading); // Access loading state

    if (isLoading) {
        return (
            <div className="main-body">
                <Loading />
            </div>
        );
    }

    if (!recipes || recipes.length === 0) {
        return (
            <div className="main-body">
                Enter some ingredients to get started!
            </div>
        );
    }
    
    try {
        const recipe1 = recipes[0]["recipes"][0];
        const recipe2 = recipes[0]["recipes"][1];
        const recipe3 = recipes[0]["recipes"][2];
        const videoLink1 = recipes[1];
        const videoLink2 = recipes[3];
        const videoLink3 = recipes[5];
        const imageLink1 = recipes[2];
        const imageLink2 = recipes[4];
        const imageLink3 = recipes[6];

        return (
            <div className="main-body">
                <RecipeCard recipe={recipe1} video={videoLink1} image={imageLink1} />
                <RecipeCard recipe={recipe2} video={videoLink2} image={imageLink2} />
                <RecipeCard recipe={recipe3} video={videoLink3} image={imageLink3} />
            </div>
        );
    } catch (error) {
        return (
            <div className="main-body">
                Enter some ingredients to get started!
            </div>
        );
    }
}

export default Body;