/*By integral*/
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const { Collection } = require('discord.js');
const reloadCommands = require('../../utils/reloadCommands');

module.exports = {
  name: 'reload',
  description: 'rechargé toute les commandes',
  aliases: [],
  usage: '!reload',
  admin: true,
  execute: async (client, message) => {
    client.commands = new Collection();
    reloadCommands('./commands/', 'commands', client);
    message.channel.send('Commands rechargé!');
  },
};
