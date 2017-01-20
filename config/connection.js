
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "JW55cw04",
    database: "burgers_db"
});

connection.connect(function(error){
    if (error){
        console.log("An error occured connecting to MySQL:", error);
        return;
    }
    console.log("Connected to MySQL as connection:", connection.threadId)
});

module.exports = connection; //why are we only exporting connection and not all the code above?  how does it get run?  does node run everything before exporting?