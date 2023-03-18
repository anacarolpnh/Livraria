import mongoose from "mongoose";

mongoose.connect('mongodb+srv://AnaPinheiro:ana23040@anapinheiro.gjm77dz.mongodb.net/books');


let db = mongoose.connection;

export default db;  