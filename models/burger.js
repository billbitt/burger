var orm = require("../config/orm.js");

var burgerModel = {
    //method for selecting all from burgers table , using the orm 
    selectAll: function(controllerCallback){
        orm.selectAll("burgers", function(response){
            controllerCallback(response);// i don't understand this callback.  it's the callback that I want to pass to the orm.  I guess what I am saying is take the callback passed from the controller and pass it through to the orm?
        });
    },
    //method for inserting one burger into burgers table 
    insertBurger: function(burgerName, controllerCallback){
        orm.insertOne("burgers", "burger_name", burgerName, function(response){
            controllerCallback(response);
        });
    },
    //method for updating one burger in the burgers table 
    updateEaten: function(burgerId, controllerCallback){
        var update = "eaten = true";
        var condition = "id = " + burgerId;
        orm.updateOne("burgers", update, condition, function(response){
            controllerCallback(response);
        });
    },
    //method for updating one burger in the burgers table 
    updateNotEaten: function(burgerId, controllerCallback){
        var update = "eaten = false";
        var condition = "id = " + burgerId;
        orm.updateOne("burgers", update, condition, function(response){
            controllerCallback(response);
        });
    },
    //method for deleting one burger in the burgers table 
    deleteBurger: function(burgerId, controllerCallback){
        var condition = "id = " + burgerId;
        orm.deleteOne("burgers", condition, function(response){
            controllerCallback(response);
        });
    },
}

module.exports = burgerModel;