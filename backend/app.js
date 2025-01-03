require('dotenv').config();
console.log("YOUTUBEAPIKEY:", process.env.YOUTUBEAPIKEY);

const express = require('express');
const app = express();
const port = 8000;

const cors = require("cors");
app.use(cors());

const { processIngredients } = require('./processIngredients');
const { processVideos } = require('./processVideos');
const { processImages } = require('./processImages');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend is running');
});

app.post('/process-ingredients', async (req, res) => {
    try {
        //console.log(typeof req.body["ingredients"]);
        const userInput = req.body["ingredients"];
        const result = await processIngredients(userInput); 
        const resultJSONMessage = JSON.parse(result.choices[0].message.content);        
        res.send(resultJSONMessage);
    } catch (error) {
        res.status(500).json({ error: 'Error processing ingredients' });
    }
});

app.post('/process-videos', async (req, res) => {
    try {
        console.log(req.body["recipeName"]);
        const result = await processVideos(req.body["recipeName"]); 
        const videoLink = result[0].id.videoId;
        console.log(videoLink);
        res.send(videoLink);
    } catch (error) {
        res.status(500).json({ error: 'Error processing ingredients' });
    }
});

app.post('/process-images', async (req, res) => {
    try {
        console.log(req.body["recipeName"]);
        const result = await processImages(req.body["recipeName"]); 
        console.log(result);
        res.send(result);
    } catch (error) {
        res.status(500).json({ error: 'Error processing ingredients' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});