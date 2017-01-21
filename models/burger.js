var orm = require("../config/orm.js");

var burgerModel = {
    //method for selecting all from burgers table , using the orm 
    selectAll: function(controllerCallback){
        var columns = "id, burger_name, burger_description, burger_rating, burger_notes, eaten";
        orm.selectAll("burgers", columns, function(response){
            controllerCallback(response);// i don't understand this callback.  it's the callback that I want to pass to the orm.  I guess what I am saying is take the callback passed from the controller and pass it through to the orm?
        });
    },
    //method for inserting one burger into burgers table 
    insertBurger: function(burgerName, burgerDescription, controllerCallback){
        var columns = ["burger_name", "burger_description"];
        var values = [burgerName, burgerDescription];
        orm.insertOne("burgers", columns, values, function(response){
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
    //method for updating all of the burger's data
    updateAll: function(burgerId, updates, controllerCallback){
        var condition = "id = " + burgerId;
        orm.updateAll("burgers", updates, condition, function(response){
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