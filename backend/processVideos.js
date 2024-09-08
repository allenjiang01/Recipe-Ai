const axios = require('axios');

const getYouTubeVideos = async (dishName) => {
  const API_KEY = 'YOUR_YOUTUBE_API_KEY';
  const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
    params: {
      part: 'snippet',
      q: `${dishName} recipe`,
      type: 'video',
      key: API_KEY
    }
  });
  return response.data.items;
};