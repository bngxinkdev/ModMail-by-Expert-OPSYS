const Ticket = require("../models/Ticket");
const config = require("../config");
const { createEmbed } = require("../utils/embed");

module.exports = async (client, msg) => {
  if (msg.author.bot) return;

  // DM
  if (msg.channel.type === 1) {
    let data = await Ticket.findOne({ userId: msg.author.id });
    let thread;

    if (!data) {
      const channel = await client.guilds.cache.get(process.env.GUILD_ID)
        .channels.create({
          name: `ticket-${msg.author.username}`,
          parent: config.category
        });

      thread = await channel.threads.create({
        name: `thread-${msg.author.username}`
      });

      await Ticket.create({
        userId: msg.author.id,
        threadId: thread.id,
        lastActivity: new Date()
      });

      thread.send({
        embeds: [createEmbed(msg.author, msg.content)]
      });

    } else {
      thread = await client.channels.fetch(data.threadId);
      thread.send({ embeds: [createEmbed(msg.author, msg.content)] });
    }
  }
};