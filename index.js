const express = require('express');
const app = express();
app.set("port", 3000);

app.get("/", function (req, res) {
    res.json({result:"Ola mundo"});
});

app.listen(app.get('port'), function () {
    console.log("rodando");
});
