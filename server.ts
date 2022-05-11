import express from 'express';

const app = express();
const PORT:Number = 3000;

app.get('/', (req, res) => {
    res.send('Let\'s make this shit hot!');
})

app.listen(PORT,() => {
    console.log(`Listening on port http://localhost:${PORT}`);
})