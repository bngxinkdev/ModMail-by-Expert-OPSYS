const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setlog")
    .setDescription("Set log channel")
    .addChannelOption(option =>
      option
        .setName("channel")
        .setDescription("Log channel") // 🔥 FIX
        .setRequired(true)
    ),

  async execute(interaction, config) {
    const ch = interaction.options.getChannel("channel");
    config.logChannel = ch.id;

    await interaction.reply(`✅ Log channel: ${ch.name}`);
  }
};