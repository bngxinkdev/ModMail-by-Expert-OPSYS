const { EmbedBuilder } = require("discord.js");

exports.createEmbed = (user, content) => {
  return new EmbedBuilder()
    .setAuthor({ name: user.tag, iconURL: user.displayAvatarURL() })
    .setDescription(content)
    .setColor("#5865F2")
    .setTimestamp();
};