const express = require('express');


const app = express();

const PORT = 3000;


app.use('/user',require('./routes/user'));

app.listen(PORT,() => {
    console.info("Server listning on port " +PORT);
});
