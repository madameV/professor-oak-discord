exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "group1");
    
    let member = message.member;

    member.addRole(role).catch(console.error);
    
    message.channel.send(message.author.toString() + ", I've added you to the **Moltres Day Group 1**. You can now chat with other Trainers with-in your raid group. Have fun Trainer and good luck!");
    msg.delete(10000)
};