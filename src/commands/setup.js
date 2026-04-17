const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setup")
    .setDescription("setup modmail")
    .addChannelOption(o => o.setName("category").setRequired(true)),

  async execute(i, config) {
    config.category = i.options.getChannel("category").id;
    i.reply("Setup xong ✅");
  }
};