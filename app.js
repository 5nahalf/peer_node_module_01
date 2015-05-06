var express = require("express");
var app = express();

var finalCombo = require('./final_combo');

app.set("port", (process.env.PORT || 5000));

app.get("/", function(request, response){
    response.send(finalCombo.accountBalance() + finalCombo.endingUSD());
});

app.listen(app.get("port"), function(){
    console.log("node is running on port: ", app.get("port"));
});