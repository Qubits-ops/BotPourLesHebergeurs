/*by Integral*/
module.exports = {
  add: async (member, roleName) => {
    let role = member.guild.roles.cache.find((f) => f.name === roleName);
    if (!role) {
      role = await member.guild.roles.create({
        data: {
          name: roleName,
        },
        reason: 'Nouveau role',
      });
    }
    member.roles.add(role);
  },
  remove: async (member, roleName) => {
    let role = member.guild.roles.cache.find((f) => f.name === roleName);
    if (!role) {
      role = await member.guild.roles.create({
        data: {
          name: roleName,
        },
        reason: 'Nouveau role',
      });
    }
    member.roles.remove(role);
  },
};
