const discord = require('discord.js')
exports.run = function(client, message, args,params) {

  if (args.length < 1) {
    return message.reply('Çalışıyorum Ab')
  }
   
message.channel.send("Çalışıyorum Ab")
};

exports.conf = {
  aliases: [ ],
  enabled: true,
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'test',
  description: 'test',
  category: 'test',
  usage: 'test',
};