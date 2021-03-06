exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "bremen");
    let area_location = "**Bremen**";
    const location = require("../../data/roles.json")
    const area_location_description = location.area_location_description
  
    const oak = require("../../data/oak.json")
    const oak_name = oak.name
    const oak_version = oak.version
    const oak_avi = oak.avi
    
    let member = message.member;
  
    member.addRole(role).catch(console.error);
      message.reply("").then(sentMessage => {
      sentMessage.delete(300000)
    })
    message.delete(300000)
    
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
    
      .setTitle("**You've turned off the** " + area_location + " **area.**")
      
      .setColor(0x00AE86)
      .setDescription(area_location_description)
      .setFooter(oak_name + " " + oak_version, oak_avi)
      .setThumbnail("https://github.com/MrRecordHolder/professor-oak-discord/blob/master/images/assets/map.png?raw=true")
      
      .addField("Bremen", "`!oak area bremen`")
      .addField("Carrollton", "`!oak area carrollton`")
      .addField("Franklin", "`!oak area franklin`")
      .addField("Temple", "`!oak area temple`")
      .addField("Villa Rica", "`!oak area villa rica`")
    
      .setTimestamp()
    
      message.channel.send({embed}).then(sentMessage => {
        sentMessage.delete(300000)
      })
      member.guild.channels.get('483831639575887873').send(member.user + ', turned on the ' + area_location + " area.");
    };
