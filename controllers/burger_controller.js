var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(request, response){
    burger.selectAll(function(data){
        var handlebarsObject = {
            burgers: data
        };
        response.render("index", handlebarsObject)
    });
});

router.post("/", function(request, response){
    burger.insertOne(request.body.burger_name, function(){
        res.redirect("/");
    })
});

router.put("/", function(request, response){
    burger.updateOne(request.body.burger_name, function(){
        res.redirect("/");
    })
})

module.exports = router;