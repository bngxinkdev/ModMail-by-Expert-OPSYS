const Ticket = require("../models/Ticket");
const config = require("../config");

module.exports = async (i) => {
  if (!i.isButton()) return;

  const data = await Ticket.findOne({ threadId: i.channel.id });
  if (!data) return;

  if (i.customId === "close") {
    await Ticket.deleteOne({ threadId: i.channel.id });
    i.channel.delete();
  }
};