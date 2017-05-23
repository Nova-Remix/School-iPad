Folder: commands

servers.js



exports.run = (client, message) => {
client.guilds.map(g=>g.name).join('\n\n')

}

exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ['se', 'servers'],
 permLevel: 4
};

exports.help = {
 name: 'servers',
 description: 'Displays all the servers the bot is on.',
 usage: 'servers'
};
