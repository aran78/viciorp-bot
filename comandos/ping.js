const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "ping",
  alias: [],

execute (client, message, args){

  const embed = new Discord.MessageEmbed()

  .setDescription(`**${client.ws.ping}** ms`)
  .setFooter("FlashRP Bot")
  .setColor("RAMDOM")

  message.channel.send(embed)

 }

}