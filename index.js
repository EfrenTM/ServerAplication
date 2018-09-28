'use strict'

var express = require('express');
var app = express();
var api = express.Router();
const port = 40000;
var  gederShonen = ["Naruto (Shippuden)","One Piece","Fairy Tail"];
var  gederIsekai = ["Re:Zero","Overlord","Log Horizon"];
var  gederHarem = ["date live","KissSix","Elfen lied"];
//controller
const giveGenderShonen = (req, res) =>{
    res.status(200).send({
        message: gederShonen
    });
};

const giveGenderIsekai = (req, res) =>{
    res.status(200).send({
        message: gederIsekai
    });
};

const giveGenderHarem = (req, res) =>{
    res.status(200).send({
        message: gederHarem
    });
};

//route
api.get("/list_gender/Shonen", giveGenderShonen);
api.get("/list_gender/Isekai", giveGenderIsekai);
api.get("/list_gender/Harem", giveGenderHarem);
// base route
app.use("/api", api);
//host server
app.listen(port, () =>{
    console.log('listening on http://localhost' + port)
});