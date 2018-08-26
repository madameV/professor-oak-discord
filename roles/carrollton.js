exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "carrollton");
    
    let member = message.member;

    const team_emoji = require('./data/emoji.json');
    let team_emoji = emoji.mystic_emoji
    
    // Add the role!
    member.addRole(role).catch(console.error);
    

    // Remove a role!
    member.removeRole(role).catch(console.error);

    message.channel.send("Trainer, I've updated your access to the **" + role + " **area. " + team_emoji);
};