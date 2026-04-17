const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("settime")
    .addIntegerOption(o => o.setName("minutes").setRequired(true)),

  async execute(i, config) {
    config.autoClose = i.options.getInteger("minutes");
    i.reply("Set auto close time");
  }
};