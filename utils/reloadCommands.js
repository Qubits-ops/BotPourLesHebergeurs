/*by Integral*/
const fs = require('fs');

const reloadCommands = (dir, dirName, client) => {
  client.help = {};
  client.adminhelp = {};
  fs.readdir(dir, (err, files) => {
    if (err) { console.log(err); return; }
    files.forEach((file) => {
      if (file.endsWith('.js')) {
        delete require.cache[require.resolve(`../${dir}${file}`)];
        const props = require(`../${dir}${file}`);
        console.log(`Chargé avec succès ${props.name}`);
        if (!props.admin) {
          if (!client.help[dirName]) client.help[dirName] = [];
          client.help[dirName].push(props.name);
        }

        if (!client.adminhelp[dirName]) client.adminhelp[dirName] = [];
        client.adminhelp[dirName].push(props.name);

        client.commands.set(props.name, props);
        props.aliases.forEach((alias) => {
          client.commands.set(alias, props);
        });
      } else if (fs.lstatSync(`${dir}${file}/`).isDirectory()) {
        reloadCommands(`${dir}${file}/`, file, client);
      }
    });
  });
};

module.exports = reloadCommands;
