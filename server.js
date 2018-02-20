const express = require('express');
const app = express();

app.all('*', (req, res) => res.send('Hello World!'));

app.listen(8080, () => console.log('fleetster university app listening on port 8080!'));
