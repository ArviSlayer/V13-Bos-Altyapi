const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setTitle("Discord.JS V13 Boş Altyapı")
    .setDescription("**ArviS#0011 V13 Boş Altyapı**")
    .setColor("BLUE")
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    return message.channel.send({embeds : [embed]});

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "örnek"
};
