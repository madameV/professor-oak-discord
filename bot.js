const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix
const fs = require("fs");

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  client.user.setGame("!oak v.2.0.3");
  
  // This is the best way to define args. Trust me.
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  } 
  try {
    let commandFile = require(`./directions/${command}.js`);
    commandFile.run(client, message, args);
  } catch(err) {
    message.channel.send("Sorry Trainer... For me to provide accurate research, type `!oak` followed by a space, then the Gym or Pokestop name *with no spaces*. Type `!oak help` for help.")
  }
});

client.login(process.env.BOT_TOKEN);
