var connection = require("./connection.js");

function selectAll(callback){
    connection.query("SELECT id, burger_name, eaten, date FROM burgers", function(error, data){
        if (error) {
            console.log("an error occured:", error);
            return;
        }
        callback(data);
    });
}

function insertOne(burgerName, callback){
    connection.query("INSERT INTO burgers(burger_name) VALUES (?)", burgerName, function(error, data){
        if (error) {
            console.log("an error occured:", error);
            return;
        }
        callback(data);
    })
}

function updateOne(burgerName, callback){
    connection.query("UPDATE burgers WHERE burger_name = ? VALUES eaten = false", burgerName, function(error, data){
        if (error) {
            console.log("an error occured:", error);
            return;
        }
        callback(data);
    })
}

var methods = {
    selectAll: selectAll(callback),
    insertOne: insertOne(burgerName, callback),
    updateOne: updateOne(burgerName, callback)
};

module.exports = methods;


