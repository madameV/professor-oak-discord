const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix
const fs = require("fs");
const responderObject = require('./data/responder.json');

// LOADS & RUNS THE COMMAND FOLDER
client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  client.user.setGame('!oak v.3.2.3 beta');
   
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
 
  //CHECK FOR COMMANDS
  
try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error("No command found...");
  }    
  try {
    let commandFile = require(`./gyms/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error("No Gym found...");
  } 
  try {
    let commandFile = require(`./pokestops/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error("No Pokestop found...");
  }
  try {
    let commandFile = require(`./roles/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error("No role found...");
  }  
});

// RESPONDER, from data
client.on("message", (message) => {
  if(responderObject[message.content]) {
    message.channel.send(responderObject[message.content]);
  }
});


/// WELCOME NEW TRAINER
bot.on('guildMemberAdd', member => {
  member.guild.channels.get('483792183346987009').send('**' + member.user.username + '**, Welcome Trainer! My name is *Professor Oak*, A Discord Bot. To interact with me, you must start each __new__ message with **!Oak** and then a space, followed by a command. \n\n So first, lets set your team! Reply with your team command only.\n*example* **!Oak mystic** or **!oak valor** or **!oak instinct**\n*For help refer to the <#483420019854934016> channel.*'); 
});

/// TRAINER HAS LEFT THE SEVER
bot.on('guildMemberRemove', member => {
  member.guild.channels.get('483792183346987009').send('**' + member.user.username + '**, has left the server.');
  //
});

client.login(process.env.BOT_TOKEN);
