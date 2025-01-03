require('dotenv').config();

const axios = require('axios');

async function processIngredients(userInput) {
  console.log(userInput);
  try {
    const res = await axios({
      method: 'post',
      url: 'https://api.openai.com/v1/chat/completions',
      headers: {
        'Authorization': process.env.OPENAIAPIKEY,
        'Content-Type': 'application/json'
      },
      data: {
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "developer",
            "content": [
              {
                "type": "text",
                "text": `You are a recipe book AI. When the user gives you a list of ingredients, generate 3 dishes that can be made with those ingredients.
                 For each dish, give the dish name, a one to two sentence description, the time it takes to make, and rate the difficulty out of 5. 
                 Respond with a valid JSON object. Do not include any extra text, comments, or explanations. Use the layout:

                {
                  "recipes": [
                      {
                          "name": "Spaghetti Carbonara",
                          "description": "Classic Italian pasta with eggs, pancetta, and cheese.",
                          "time": "30 minutes",
                          "difficulty": "Medium",
                      },
                      {
                          "name": "Chicken Stir-Fry",
                          "description": "Quick and easy stir-fry with vegetables and soy sauce.",
                          "time": "20 minutes",
                          "difficulty": "Easy",
                      },
                      {
                          "name": "Chocolate Cake",
                          "description": "Rich and moist chocolate cake for dessert lovers.",
                          "time": "50 minutes",
                          "difficulty": "Medium",
                      }
                  ]
                }

                 Make sure to include the necessary ingredients in the name. For example,
                 if the dish is made with chicken breast, say chicken breast in the dish name. You don't need to use all ingredients. Focus on
                 popular dishes`
              }
            ]
          },
          {"role": "user", "content": userInput},
        ],
        temperature: 0.7
      }
    });

    //console.log(res.data.choices[0].message.content)
    return res.data;

  } catch (error) {
    console.error(error);
    return { error: 'Failed to process ingredients' };
  }
}




module.exports = { processIngredients };
