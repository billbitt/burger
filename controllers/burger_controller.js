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
        response.render("index", handlebarsObject)
        //response.send(data);
    });
});

router.post("/api", function(request, response){
    var name = request.body.burgerName;
    var description = request.body.burgerDescription;
    //check to make sure name is not empty
    if (name === ""){
        console.log("post request contained an empty burger name");
        response.redirect("/");
    } else {
        burger.insertBurger(name, description, function(){
            response.redirect("/");
        });
    };
});

router.put("/api/eat/:id", function(request, response){
    var id = request.params.id;
    burger.updateEaten(id, function(){
        response.redirect("/");
    })
})

router.put("/api/no-eat/:id", function(request, response){
    var id = request.params.id;
    burger.updateNotEaten(id, function(){
        response.redirect("/");
    })
})

router.put("/api/update/:id", function(request, response){
    //the id will come from the request parameters from the url
    var id = request.params.id;
    //the values from the form will come through in the request body 
    var updates = {}
    if (request.body.burgerName != undefined) updates.burger_name = request.body.burgerName;
    if (request.body.burger_description != undefined) updates.burger_description = request.body.burgerDescription;
    if (request.body.burger_rating != undefined) updates.burger_rating = request.body.burgerRating;
    if (request.body.burger_notes != undefined) updates.burger_notes = request.body.burgerNotes;

    burger.updateAll(id, updates, function(){
        response.redirect("/");
    })
})

router.delete("/api/:id", function(request, response){
    var id = request.params.id;
    burger.deleteBurger(id, function(){
        response.redirect("/");
    })
})

//export the router
module.exports = router;