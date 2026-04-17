const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setcategory")
    .setDescription("Set category for modmail") // 🔥 FIX QUAN TRỌNG
    .addChannelOption(option =>
      option
        .setName("category")
        .setDescription("Category channel")
        .setRequired(true)
    ),

  async execute(interaction, config) {
    const channel = interaction.options.getChannel("category");

    config.category = channel.id;

    await interaction.reply({
      content: `✅ Set category: ${channel.name}`,
      ephemeral: true
    });
  }
};