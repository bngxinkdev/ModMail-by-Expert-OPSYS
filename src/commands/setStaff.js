const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setstaff")
    .setDescription("Add staff role")
    .addRoleOption(option =>
      option
        .setName("role")
        .setDescription("Role staff") // 🔥 FIX
        .setRequired(true)
    ),

  async execute(interaction, config) {
    const role = interaction.options.getRole("role");
    config.staffRoles.push(role.id);

    await interaction.reply(`✅ Added staff role: ${role.name}`);
  }
};