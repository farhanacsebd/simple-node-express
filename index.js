const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())

app.use(express.json());

const port = 5000;

app.get('/', (rqs, res) => {
    res.send('wow,I am excited to learn node.js with nodemon.this is awesome')
});

const users = [
    { id: 0, name: "Farhana", email: "farhana123@gmail.com", phone: "0182244433" },
    { id: 1, name: "Tuba", email: "tuba123@gmail.com", phone: "01754242563" },
    { id: 2, name: "Shojol", email: "shojol123@gmail.com", phone: "0182543213" },
    { id: 3, name: "Norob", email: "norob@gmail.com", phone: "01552465433" },
    { id: 4, name: "Piku", email: "piku123@gmail.com", phone: "0173444433" },
    { id: 5, name: "Nimki", email: "nimki@gmail.com", phone: "01913444433" }
]

app.get('/users', (req, res) => {

    const search = req.query.search;
    // use query parameters
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else { res.send(users) }
})



// app.Method

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    res.json(newUser)
})



// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
    console.log('Listening top port', port);
})