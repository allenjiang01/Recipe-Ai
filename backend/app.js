const express = require('express');
const app = express();
const port = 8000;

const { processIngredients } = require('./processIngredients');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend is running');
});

app.get('/a', (req, res) => {
    res.send('ALLEN');
});

app.post('/process-ingredients', async (req, res) => {
    try {
        const result = await processIngredients(); 
        res.json(result); 
    } catch (error) {
        res.status(500).json({ error: 'Error processing ingredients' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});