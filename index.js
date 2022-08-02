const { Client, Message, MessageEmbed, Collection } = require("discord.js");
const client = new Client({ intents: ["GUILDS", "GUILD_INVITES", "GUILD_MEMBERS", "GUILD_MESSAGES"], partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "USER"] });
const fs = require("fs");
const ayarlar = require("./config.json");
const token = process.env.TOKEN

module.exports = client;

require("./events/message.js")
require("./events/ready.js")

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  console.log(`Toplamda ${files.length} Komut Var`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    console.log(`${props.help.name} İsimli Komut Aktif`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

if(!token){
  console.log("Bu Proje Glitch Özel Uyarlanmıştır, .env Dosyasına Discord Bot Tokeninizi Yazınız")
} else { 
client.login(token).catch(e => {
  console.log("Projeye Yazılan Token Hatalı Veya Discord Botunuzun Intentleri Kapalı")
})
}

client.login(process.env.TOKEN)