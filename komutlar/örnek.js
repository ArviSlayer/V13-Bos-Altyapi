const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setTitle("Komut Başlığı")
    .setDescription("**Arena Development**")
    .setColor("BLUE")
    .setFooter(`Kullanan ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "örnek"
};










//https://discord.gg/kRkHsq9BbT <= [Bunu Silmeyin]