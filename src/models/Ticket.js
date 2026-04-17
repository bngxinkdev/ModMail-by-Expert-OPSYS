const mongoose = require("mongoose");

module.exports = mongoose.model("Ticket", new mongoose.Schema({
  userId: String,
  threadId: String,
  claimedBy: String,
  lastActivity: Date
}));