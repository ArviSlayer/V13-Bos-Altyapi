const client = require("../index");

client.on("ready", () => {
    console.log(`${client.user.tag} İsmimli Bot Aktif`)
    client.user.setActivity(`ArviS#0011`)
});
