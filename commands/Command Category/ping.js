/*By integral*/
const ping = require('ping');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'ping',
  aliases: [],
  usage: 'ping',
  admin: false,
  execute: async (client, message) => {
    const urls = await client.db.url.find().toArray();
    const embed = new MessageEmbed()
      .setTitle('URL Status')
      .setDescription(urls.map((url) => `> ${url.data.alive ? '🟢' : '🔴'} - ${url.data.host} - ${url.data.time} ms`));
    message.channel.send(embed);
  },
};
