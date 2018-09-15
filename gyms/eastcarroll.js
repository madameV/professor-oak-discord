module.exports.run = (client, message, args) => {
  const gym = require("../data/gyms/eastcarroll.json");
  const name = gym.name
  const picture = gym.picture
  const map = gym.map
  const location = gym.location
  const access = gyms.access
  const ex_raid = gym.ex_raid
  const commands = gym.commands

  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
    
    .setColor(0x00AE86)
    .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")

    .setTitle(name)
    .setThumbnail(picture)
    .setDescription("[CLICK HERE FOR DIRECTIONS](" + map + ")")
    .addField("**Location**", location)
    .addField("**Access**", access)
    .addField("**Ex Raid Eligable**", ex_raid)
    .addField("**Commands**", commands)

    .setTimestamp()
  
    message.channel.send({embed});
  }