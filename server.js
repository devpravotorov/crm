const express = require('express');
const config = require('config');
const cors = require('cors');
const app = express();

app.use(cors(config.get('cors')));
app.use(express.json());


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("The server is listening on the port", port)
});
