const { REST, Routes } = require("discord.js");
require("dotenv").config();

const commands = [
  require("./src/commands/setup").data.toJSON(),
  require("./src/commands/setCategory").data.toJSON(),
  require("./src/commands/setStaff").data.toJSON(),
  require("./src/commands/setAdmin").data.toJSON(),
  require("./src/commands/setLog").data.toJSON(),
  require("./src/commands/setTime").data.toJSON(),
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  await rest.put(
    Routes.applicationCommands(process.env.CLIENT_ID),
    { body: commands }
  );
  console.log("Slash commands deployed");
})();