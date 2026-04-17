const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setadmin")
    .setDescription("Set admin role")
    .addRoleOption(o => o.setName("role").setRequired(true)),

  async execute(i, config) {
    config.adminRoles.push(i.options.getRole("role").id);
    i.reply("Added admin role");
  }
};