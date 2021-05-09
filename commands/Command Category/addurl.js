/*By integral*/
const ping = require('ping');

module.exports = {
  name: 'addurl',
  description: 'addurl',
  aliases: [],
  usage: 'addurl',
  admin: false,
  execute: async (client, message) => {
    const msgArr = message.content.split(' ');
    const url = msgArr[1];
    const res = await ping.promise.probe(url);
    if (!res.host) {
      message.channel.send('L\'URL fournie n\'est pas valide!');
      return;
    }
    message.channel.send('URL ajoutée avec succès');
    client.db.url.updateOne({ host: res.host }, {
      $set: {
        data: res,
      },
    }, { upsert: true });
  },
};
