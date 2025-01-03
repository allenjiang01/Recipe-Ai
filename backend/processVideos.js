require('dotenv').config();

const axios = require('axios');

let youTubeAPIKey = process.env.YOUTUBEAPIKEY;

async function processVideos(dishName) {

  const API_KEY = youTubeAPIKey;
  console.log("APIKEY: " + API_KEY);
  const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
    params: {
      part: 'snippet',
      q: dishName,
      //q: `${dishName} recipe`,
      type: 'video',
      maxResults: 1,
      key: API_KEY
    }
  });
  return response.data.items;
};

module.exports = { processVideos };
