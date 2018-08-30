const express = require('express');
const { createEngine } = require('express-react-views');

const app = express();
const port = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', createEngine());

app.get('/', (req, res, next) => {
  res.render('index.jsx', { name: 'world Express Rect View'});
});

app.get('/sobre', (req, res, next) => {
  res.render('sobre.jsx');
});

app.listen(port, () => console.log(`\uD83C\uDF0F runing at http://localhost${port}`));