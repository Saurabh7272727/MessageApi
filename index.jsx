const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://asuslap4545:Ymdw4d7jyihxeD4k@saurabhdatabase.ffjmaxz.mongodb.net/Message_wala').then(() => {
    console.log('Database connection established');
}).catch((err) => {
    console.log(err.message);
})


const md = mongoose.Schema({
    name: {
        type: 'string',
    },
    number: {
        type: 'number',
    }
});
const FirstMongoose = mongoose.model('Sigin_users', md);


app.use(cors());
app.get('/', (req, res) => {
    res.json({ message: "hello world" })
});

app.post('/post', async (req, res) => {
    const { name, number } = req.body;

    try {
        await FirstMongoose.insertMany({
            name: name,
            number: number
        }).then(() => {
            res.json({ form: "Your from is submitted" });
        })
    } catch (err) {
        res.send(err.message);
    }
})

app.listen(PORT, (req, res) => {
    console.log(`server listening on ${PORT}`)
});