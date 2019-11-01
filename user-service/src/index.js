import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/users', (req, res) => res.send("User API"))

app.listen(3001, () => console.log('Server is listening on port 3001'))
