const axios = require('axios');


async function processIngredients() {
  try {
    const res = await axios({
      method: 'post',
      url: 'https://api.openai.com/v1/chat/completions',
      headers: {
        'Authorization': 'Bearer ', // ADD API KEY
        'Content-Type': 'application/json'
      },
      data: {
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": "Say this is a test!"}],
        temperature: 0.7
      }
    });

    return res.data;

  } catch (error) {
    console.error(error);
    return { error: 'Failed to process ingredients' };
  }
}

module.exports = { processIngredients };
