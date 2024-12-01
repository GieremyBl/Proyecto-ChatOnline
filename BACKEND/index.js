const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require ("./routes/userRoute");
const messageRoute = require("./routes/messageRoute");

const app = express();
require("dotenv").config()

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);  
app.use("/api/messages", messageRoute);

app.get("/", (req, res) =>{
    res.send("Welcome our chat online APIs...");
});

const port = process.env.PORT || 6000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res)=> {
    console.log(`Server running on port: ${port} `);
});

mongoose.connect(uri)
.then(()=> console.log("MongoDB connection established"))
.catch((error)=> console.log("MongoDB connection fail: ", error.message))



