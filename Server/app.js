const express = require('express')
const app = express();
const port = 3000;

app.use(express.json());


app.get('/', (req, res) =>{
    res.send('Hello, Express!');
});

app.get('/hello/:name', (req, res) =>{
const name = req.params.name;
res.send(`hello, ${name}!`);
})

app.post('/data', (req, res) => {
    const jsonData = req.body;
    console.log(jsonData);
    res.json({ message: 'Data received successfully', receivedData: jsonData });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost: ${port}/`)
});
