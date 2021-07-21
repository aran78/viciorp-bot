const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "staffahora",
  alias: [],

execute (client, message, args){

  if (message.content.startsWith("!staffahora"))

  message.channel.send("<@&805396711026982922>\nNecessitanos un staff aqui!")

 }

}