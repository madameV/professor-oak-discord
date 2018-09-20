exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "temple");
    let area_location = "**Temple**";
  
    const oak = require("../../data/oak.json")
    const oak_name = oak.name
    const oak_version = oak.version
    const oak_avi = oak.avi
    
    let member = message.member;
  
    member.removeRole(role).catch(console.error);
      message.reply("").then(sentMessage => {
      sentMessage.delete(300000)
    })
    message.delete(300000)
    
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
    
      .setTitle("**You've turned off the** " + area_location + " area")
      
      .setColor(0x00AE86)
      .setDescription("To turn on more areas, use one of the following commands below. To turn a area off, Use the area command, followed by a space, then the word `off`.")
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
      member.guild.channels.get('483831639575887873').send('**' + member.user + '**, turned off the' + area_location + " area.");
    };