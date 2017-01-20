var orm = require("../config/orm.js");

var methods = {
    selectAll: selectAll(callback),
    insertOne: insertOne(burgerName, callback),
    updateOne: updateOne(burgerName, callback)
}

module.exports = methods;