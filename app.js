const express = require('express')
const app = express();
const port = process.env | 9090;

app.get('/', (req, res) => {

    res.send("Welcome Express Hellow World application:)")
});

app.listen(port, () => {
    console.log(`Server running om ${port}`);
})