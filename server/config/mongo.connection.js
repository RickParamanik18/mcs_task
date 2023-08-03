const mongoose = require("mongoose");
const con = mongoose.createConnection("mongodb://localhost:27017/testDb");
module.exports = con;
