const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix
const fs = require("fs");
const responderObject = require('./data/responder.json');
const oak = require("./data/oak.json");
const version = oak.version

// LOADS & RUNS THE COMMAND FOLDER
client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  client.user.setGame("!oak " + version);
   
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
 
  //CHECK FOR COMMANDS
  
try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    message.channel.send("No command found...");
  }
});

// RESPONDER, from data
client.on("message", (message) => {
  if(responderObject[message.content]) {
    message.channel.send(responderObject[message.content]);
  }
});


/// WELCOME NEW TRAINER
const oak_welcome = oak.welcome
const oak_introduction = oak.introduction
const oak_set_team = oak.set_team
const oak_help = oak.help
const oak_trainer_joined = oak.trainer_joined

client.on('guildMemberAdd', member => {
  member.guild.channels.get('483420033473576961').send(member.user + ", " + oak_welcome + " " + oak_introduction + " " + oak_set_team + "\n" + oak_help); 
  member.guild.channels.get('483831639575887873').send('**' + member.user.username + '**, ' + oak_trainer_joined);
});

/// TRAINER HAS LEFT THE SEVER
const oak_trainer_left = oak.trainer_left

client.on('guildMemberRemove', member => {
  member.guild.channels.get('483831639575887873').send('**' + member.user.username + '**, ' + oak_trainer_left);
  //
});

client.login(process.env.BOT_TOKEN);
