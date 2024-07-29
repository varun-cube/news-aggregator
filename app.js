const express = require('express');
const app = express();
const routes = require('./routes/index');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(PORT, () => {
    console.log('Server is listening on ', PORT);
})

