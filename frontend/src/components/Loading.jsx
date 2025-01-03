import React from "react";
import "./Loading.css";

function Loading() {
    return (
        <div className="container">
            <div className="spinner"></div>
            <p>Consulting the Chefs...</p>
        </div>
    );
}

export default Loading;