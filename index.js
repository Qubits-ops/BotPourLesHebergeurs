/*by Integral*/
const { Client, Collection } = require('discord.js');
const fs = require('fs');
const { token } = require('./config');

const client = new Client({ partials: ['GUILD_MEMBER', 'CHANNEL', 'MESSAGE', 'REACTION', 'USER'] });
client.commands = new Collection();

const reloadCommands = require('./utils/reloadCommands');

reloadCommands('./commands/', 'commands', client);

fs.readdir('./events/', (err, files) => {
  if (err) { console.error(); return; }
  files.forEach((file) => {
    if (!file.endsWith('.js')) return;
    const evt = require(`./events/${file}`);
    const evtName = file.split('.')[0];
    console.log(`Event: ${evtName} loaded!`);
    client.on(evtName, (...args) => evt(client, ...args));
  });
});

client.login(token);
