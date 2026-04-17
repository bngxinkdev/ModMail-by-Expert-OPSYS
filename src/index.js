require("dotenv").config();
const { Client, GatewayIntentBits, Partials } = require("discord.js");
const mongoose = require("mongoose");

const config = require("./config");

const modmail = require("./handlers/modmail");
const buttons = require("./handlers/buttons");
const autoclose = require("./handlers/autoclose");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Channel]
});

client.once("clientReady", () => {
  console.log("Bot ready");
  autoclose(client);
});

client.on("messageCreate", (msg) => modmail(client, msg));

client.on("interactionCreate", async (interaction) => {
  // 🔘 BUTTON
  if (interaction.isButton()) {
    return buttons(interaction);
  }

  // ⚡ SLASH COMMAND
  if (interaction.isChatInputCommand()) {
    try {
      const command = require(`./commands/${interaction.commandName}`);

      if (!command) return;

      await command.execute(interaction, config);

    } catch (err) {
      console.error(err);

      if (!interaction.replied) {
        await interaction.reply({
          content: "❌ Lỗi khi chạy command",
          ephemeral: true
        });
      }
    }
  }
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo OK"));

client.login(process.env.TOKEN);