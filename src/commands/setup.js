const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setup")
    .setDescription("Setup modmail system"),

  async execute(interaction) {
    await interaction.reply("✅ Setup done");
  }
};