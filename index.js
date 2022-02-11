require('dotenv').config();

const express = require('express');

const bodyParser = require('body-parser');

const { router } = require('./routes');

const { PORT } = process.env;

const app = express();

app.use(bodyParser.json());

app.use(router);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
