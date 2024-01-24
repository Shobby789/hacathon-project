const mongoose = require("mongoose");

module.exports.DbConnection = () => {
  // MongoDB Connection
  const DB_URI =
    "mongodb+srv://smshoaib2001:hacathon@cluster0.aaypqca.mongodb.net/HacathonretryWrites=true&w=majority";
  mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => console.log("Connected to MongoDB"));
};

// hacathon
