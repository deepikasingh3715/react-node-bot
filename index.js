const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('./routes/dialogFlowRoutes')(app)



app.use(bodyParser.json());
console.log("fghjkl");

const PORT = process.env.PORT || 5000;
console.log("hiiiiii");
app.listen(PORT);