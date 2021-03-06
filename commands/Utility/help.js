/*By integral*/
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'help',
  aliases: ['h'],
  usage: '!help',
  execute: async (client, message, config) => {
    const msgArr = message.content.split(' ');
    if (msgArr[1]) {
      const command = client.commands.get(msgArr[1].toLowerCase());
      if (command) {
        const embed = new MessageEmbed()
          .setTitle('Commands Info')
          .addField('Name', command.name)
          .addField('Description', command.description)
          .addField('Usage', command.usage);

        if (command.aliases.length > 0) {
          embed.addField('Aliases', command.aliases.join(', '));
        }
        message.channel.send(embed);
      } else {
        message.channel.send('Command non trouvé!');
      }
    } else {
      const embed = new MessageEmbed()
        .setTitle('Liste des commandes');
      if (message.member.roles.cache.some((r) => config.permissions.moderation.includes(r.id) || message.member.hasPermission(['ADMINISTRATOR']))) {
        Object.keys(client.adminhelp).forEach((type) => {
          const commands = client.adminhelp[type].join(' | ');
          embed.addField(`${type}`, `> ${commands}`);
        });
      } else {
        Object.keys(client.help).forEach((type) => {
          if (client.help[type].length > 0) {
            const commands = client.help[type].join(' | ');
            embed.addField(`${type}`, `> ${commands}`);
          }
        });
      }
      message.channel.send(embed);
    }
  },
};
