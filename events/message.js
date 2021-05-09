/*By integral*/
const initializeGuild = require('../utils/initializeGuild');
const msToString = require('../utils/msToString');

module.exports = async (client, message) => {
  if (!client.ready) return;

  if (message.author.bot) return;

  const msg = message.content.toLowerCase();
  const commandName = msg.split(' ')[0].substring(1);

  if (!message.member) {
    return;
  }

  if (!client.guildConfig[message.guild.id]) {
    await initializeGuild(client, message.guild.id);
  }

  if (message.content.startsWith(client.guildConfig[message.guild.id].prefix)) {
    const command = client.commands.get(commandName);
    if (!command) {
      return;
    }
    try {
      if (command.cooldown) {
        if (!client.cooldowns[message.guild.id][commandName]) {
          client.cooldowns[message.guild.id][commandName] = {};
        }
        if (client.cooldowns[message.guild.id][commandName][message.author.id]) {
          message.channel.send(`Vous êtes en temps de cooldown! Vous pouvez réutiliser cette commande après${msToString(command.cooldown - (Date.now() - client.cooldowns[message.guild.id][commandName][message.author.id]))}`);
          return;
        }
      }
      command.execute(client, message, client.guildConfig[message.guild.id]);
    } catch (error) {
      console.error(error);
    }
  }
};
