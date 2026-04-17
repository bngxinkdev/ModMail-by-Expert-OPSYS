const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setstaff")
    .setDescription("Set staff role")
    .addRoleOption(o => o.setName("role").setRequired(true)),

  async execute(i, config) {
    config.staffRoles.push(i.options.getRole("role").id);
    i.reply("Added staff role");
  }
};