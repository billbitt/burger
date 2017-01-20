// import and set up express 
var express = require("express");
var router = express.Router();

//import the model 
var burger = require("../models/burger.js");

//create routes on the router 
router.get("/", function(request, response){
    burger.selectAll(function(data){
        var handlebarsObject = {
            burgers: data
        };
        //response.render("index", handlebarsObject)
        response.send(data);
    });
});

router.post("/api/new", function(request, response){
    console.log(request.body);
    var name = request.body.burgerName;
    console.log("controller passes:", name);
    burger.insertBurger(name, function(){
        response.redirect("/");
    })
});

router.put("/api/:id", function(request, response){
    burger.updateEaten(request.params.id, function(){
        response.redirect("/");
    })
})

//export the router
module.exports = router;