/*by Integral*/
const ping = require('ping');

module.exports = {
  name: 'removeurl',
  description: 'removeurl',
  aliases: [],
  usage: 'removeurl',
  admin: false,
  execute: async (client, message) => {
    const msgArr = message.content.split(' ');
    const url = msgArr[1];
    const urlData = await client.db.url.findOne({ host: url });
    if (!urlData) {
      message.channel.send('L\'URL n\'existe pas dans la base de données!');
      return;
    }
    message.channel.send('URL supprimée avec succès');
    client.db.url.deleteOne({ host: urlData.host });
  },
};
