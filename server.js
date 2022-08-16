import express from 'express';
 
const app = express();
const PORT = 3024;

const users = [
    {
        username: 'ja',
        firstName: 'Jörg',
        lastName: 'Ackermann',
        email: 'ja@mail.com'
    },
    {
        username: 'ac',
        firstName: 'Angelika',
        lastName: 'Carstense',
        email: 'ac@mail.com'
    }
];

app.get('/', (req, res) => {
    res.send('session/cookie basic test');
});
 
app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`)
});