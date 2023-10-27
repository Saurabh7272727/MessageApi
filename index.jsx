const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(cors());
app.get('/', (req, res) => {
    res.json({ message: "hello world" })
});


app.listen(PORT, (req, res) => {
    console.log(`server listening on ${PORT}`)
});