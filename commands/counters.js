exports.run = (client, message, args) => {
    let pokemon = args.join(" ");
    let commandFile = require(`../commands/counters/${pokemon}.js`);
    commandFile.run(client, message, args);
  }