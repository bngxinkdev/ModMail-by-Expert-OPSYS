const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("settime")
    .setDescription("Set auto close time")
    .addIntegerOption(option =>
      option
        .setName("minutes")
        .setDescription("Time in minutes") // 🔥 FIX
        .setRequired(true)
    ),

  async execute(interaction, config) {
    const time = interaction.options.getInteger("minutes");
    config.autoClose = time;

    await interaction.reply(`⏱️ Set auto close: ${time} phút`);
  }
};