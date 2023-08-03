const mongoose = require("mongoose");
const con = mongoose.createConnection(
    "mongodb+srv://rickkcir18:rickkcir18@cluster0.ksk4xyv.mongodb.net/?retryWrites=true&w=majority"
);
module.exports = con;
