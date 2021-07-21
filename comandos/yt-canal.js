const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch')
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "youtube",
  alias: [],

execute (client, message, args){

    let channel = message.member.voice.channel;
    if(!channel) return message.channel.send("Tienes que estar en un canal de voz")

    fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
            max_age: 86400,
            max_uses: 0,
            target_application_id: "755600276941176913",
            target_type: 2,
            temporary: false,
            validate: null
        }),
        headers: {
            "Authorization": `Bot ${process.env.TOKEN}`,
            "Content-Type": "application/json"
        }
    })
    
    .then(res => res.json())
    .then(invite => {
        if(!invite.code) return message.channel.send(":x: Error del bot")
        const emb = new Discord.MessageEmbed()
        .setDescription(`[Click Aqui ☝](https://discord.com/invite/${invite.code})`)
        .setColor("BLUE")
        message.channel.send(emb)
    })
    }
}