exports.run = (client, message, args) => {

let giverole = args[2];

client.guilds.get(message.guild.id).roles.find(`name`, `${giverole}`);
let user = message.mentions.users.first();
if (!giverole) return message.reply('I cannot find that role. Please make sure you\'re spelling it correctly and using capitalization!').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to give a role to.').catch(console.error);


  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);

  if (!message.guild.member(user).roles.has(giverole.id)) {
          
message.guild.member(user).addRole(giverole).then(() => {
message.channel.sendMessage(`I have given ${user} the role ` + message.content.slice(5));
   });
  }
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['r', 'role'],
 permLevel: 2
};

exports.help = {
 name: 'give',
 description: 'Gives the mentioned user a role. Do NOT mention the role and make sure to capitalize anything needed.',
 usage: 'give [@USER] [ROLE]'
};
