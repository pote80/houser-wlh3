require('dotenv').config();
const express = require('express');
const massive = require('massive');

const ctrl = require('./controllers/controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express();
app.use(express.json());

app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.newHouse)
app.delete('/api/houses/:id', ctrl.delete)

massive(CONNECTION_STRING)
    .then((dbInstance) => {
        app.set('db', dbInstance);
        console.log(`"I'm in."`)
    })
    .catch((err) => {
        console.log(err)
    })

app.listen(SERVER_PORT, () => {
    console.log(`Ship docked at port: ${SERVER_PORT}`)
})