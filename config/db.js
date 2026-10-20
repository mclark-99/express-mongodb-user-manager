"use strict";

const mongoose = require("mongoose");

async function connectDB() {
    const mongoURL = process.env.MONGO_URL || "mongodb://webdb:27017/CLARK_project2";
    await mongoose.connect(mongoURL);
    console.log("Connected to MongoDB successfully");
}

module.exports = { connectDB };