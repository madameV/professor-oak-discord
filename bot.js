const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix
const fs = require("fs");

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  client.user.setGame("!oak v.3.1.0");
   
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch(err) {
    message.channel.send("Sorry Trainer, I couldn't find that. Check your spelling and try again. For help, reply back with `!oak help`.")
  }
  
    const swearWords = ["darn", "shucks", "frak", "shite"];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("Oh no you said a bad word!!!");
  // Or just do message.delete();
}
  
});

client.login(process.env.BOT_TOKEN);
