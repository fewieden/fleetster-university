const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);

app.all('*', (req, res) => res.send('Hello World!'));

app.listen(8080, () => console.log('fleetster university app listening on port 8080!'));
