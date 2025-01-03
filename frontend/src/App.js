import './App.css';
import React, { useState } from "react";
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  const [recipes, setRecipes] = useState([]);


  // Function to update recipes (will be called from SearchForm)
  const handleRecipesUpdate = (newRecipes) => {
    setRecipes(newRecipes); // Update the state with the response
  };


  return (
    <div className="App">
      <Header onRecipesUpdate={handleRecipesUpdate}/>
      <Body recipes={recipes}/>
      <Footer />
    </div>
  );
}

export default App;
