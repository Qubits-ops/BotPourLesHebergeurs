/*by Integral*/
const mongoUtil = require('../mongoUtil.js');
const fetchGuildConfigs = require('../utils/fetchGuildConfigs');

module.exports = async (client) => {
  await mongoUtil.connectDB(client);

  client.guildConfig = {};

  await fetchGuildConfigs(client);

  client.games = {};

  client.ready = true;
  console.log('Le bot est près');
  console.log('bot coder par integral pour five-dev ou hebergetonserv.fr');
};
