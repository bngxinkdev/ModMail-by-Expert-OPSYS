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

client.once("ready", () => {
  console.log("Bot ready");
  autoclose(client);
});

client.on("messageCreate", (msg) => modmail(client, msg));
client.on("interactionCreate", (i) => buttons(i));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo OK"));

client.login(process.env.TOKEN);