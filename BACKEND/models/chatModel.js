const mongoose = require("mongoose")

const chatSchema = new mongoose.Schema({
    members: Array,
},
{
    timestamps: true,
}
);
const chatModel = mongoose.nodel("Chat",chatSchema);
module.exports = chatModel;