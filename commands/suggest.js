const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  const dataSuggestion = args.join(' ');
  if (!dataSuggestion) return message.reply('**Please include text for the suggestion!**');

  const msg = await message.channel.send('Sending your suggestion to Development...');
  
  const embed = new Discord.RichEmbed()
    .setTitle('Moonglow Suggestion')
    .addField('Author', `${message.author.username} (${message.author.id})`)
    .addField('Suggestion', `${dataSuggestion}`)
    .setTimestamp()
    .setColor('RANDOM')
    .setFooter(client.user.username, client.user.avatarURL);
  client.channels.get('481464215962648577').send({embed});
  msg.edit('Suggestion has been successfully sent to the Moonglow Development Team!');
  msg.delete(10000);
  message.delete(10000);
  //pls
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 'Standard User'
};
  
exports.help = {
  name: 'suggest',
  category: 'system',
  description: 'Send a suggestion for Moonglow to the developers.',
  usage: 'suggest [..suggestion]'
};
