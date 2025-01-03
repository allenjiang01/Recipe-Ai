import React, {useState} from "react";
import axios from "axios";
import "./SearchForm.css";
import { useDispatch } from "react-redux"; // To dispatch actions
import { setLoading } from "../store"; // Import the action

function SearchForm({ onRecipesUpdate }) {
    const dispatch = useDispatch(); // Initialize dispatch


    const [userInput, setUserInput] = useState("");


    function handleUserInput(event) {
        const newInput = event.target.value;
        setUserInput(newInput);
    }


    // Handle form submission
    async function handleSubmit(event) {
        event.preventDefault();
        dispatch(setLoading(true)); // Set loading to true

        // Send data to the backend
        try {
            let fullResponse = [];

            const response = await axios.post("http://localhost:8000/process-ingredients", {
                ingredients: userInput,
            });

            fullResponse.push(response.data);

            for (const recipe of response.data["recipes"]) {
                const videoResponse = await axios.post("http://localhost:8000/process-videos", {
                    recipeName: recipe["name"],
                });

                const imageResponse = await axios.post("http://localhost:8000/process-images", {
                    recipeName: recipe["name"],
                });
                
                fullResponse.push(videoResponse.data);
                fullResponse.push(imageResponse.data);
            }
            dispatch(setLoading(false)); // Set loading to false
            onRecipesUpdate(fullResponse);
           
        } catch (error) {
            console.error("Error sending data to backend:", error);
        }
    }


    return (
        <div className="form-container">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="search-box">
                    <textarea
                        id="userInput"
                        placeholder="Enter ingredients (separate by ,)"
                        className="search-input-1"
                        rows="5" cols="33"
                        value={userInput} 
                        onChange={handleUserInput} 
                    />
                </div>
               
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
        </div>
    );
}

export default SearchForm;