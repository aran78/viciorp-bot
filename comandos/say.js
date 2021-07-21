const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "say",
  alias: [],

execute (client, message, args){

  var perms = message.member.hasPermission("ADMINISTRATOR")
  if(!perms) return message.channel.send("No tienes el permiso **ADMINISTRATOR** para usar este comando!")

  let texto = args.join(' ')
  if(!texto) return message.channel.send("Debes escribir un texto!")

  message.channel.send(texto)

 }

}