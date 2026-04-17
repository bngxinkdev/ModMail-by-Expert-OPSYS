const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setlog")
    .setDescription("Set log channel")
    .addChannelOption(o => o.setName("channel").setRequired(true)),

  async execute(i, config) {
    config.logChannel = i.options.getChannel("channel").id;
    i.reply("Set log channel");
  }
};