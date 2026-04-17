const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setadmin")
    .setDescription("Add admin role")
    .addRoleOption(option =>
      option
        .setName("role")
        .setDescription("Role admin") // 🔥 FIX
        .setRequired(true)
    ),

  async execute(interaction, config) {
    const role = interaction.options.getRole("role");
    config.adminRoles.push(role.id);

    await interaction.reply(`✅ Added admin role: ${role.name}`);
  }
};