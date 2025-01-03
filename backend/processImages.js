require('dotenv').config();

const axios = require("axios");

async function processImages(query) {
    const API_KEY = process.env.YOUTUBEAPIKEY;
    const CSE_ID = process.env.CSE_ID;

    const url = `https://www.googleapis.com/customsearch/v1`;

    try {
        const response = await axios.get(url, {
            params: {
                q: query, 
                searchType: "image", 
                imgSize: "large",
                key: API_KEY,
                cx: CSE_ID,
                num: 1,
            },
        });

    return response.data.items[0]["link"];

    } catch (error) {
        console.error("Error fetching images:", error.message);
        return [];
    }
}

module.exports = { processImages };