/*by Integral*/
module.exports = (client, guildID) => {
  client.guildConfig[guildID] = {
    permissions: {
      moderation: [],
    },
    automod: [],
    prefix: '$',
  };
  client.cooldowns[guildID] = {}; client.db.config.updateOne({ id: guildID }, {
    $set: client.guildConfig[guildID],
  },
  { upsert: true });
};
