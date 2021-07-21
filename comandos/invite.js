const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "invitacion",
  alias: ["invite"],

execute (client, message, args){

  const embed1 = new Discord.MessageEmbed()

  .setDescription("Generando nueva invitacion...")

  message.channel.send(embed1)


  message.channel.send("https://dsc.gg/viciorp")

 }

}