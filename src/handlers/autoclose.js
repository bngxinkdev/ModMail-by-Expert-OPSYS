const Ticket = require("../models/Ticket");
const config = require("../config");

module.exports = (client) => {
  setInterval(async () => {
    const tickets = await Ticket.find();

    for (const t of tickets) {
      const diff = (Date.now() - t.lastActivity) / 60000;

      if (diff > config.autoClose) {
        const ch = await client.channels.fetch(t.threadId).catch(() => null);
        if (!ch) continue;

        await Ticket.deleteOne({ threadId: t.threadId });
        ch.delete();
      }
    }
  }, 60000);
};