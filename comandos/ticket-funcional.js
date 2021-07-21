const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "ticketfuncional",
  alias: [],

execute (client, message, args){

  var perms = message.member.hasPermission("ADMINISTRATOR")
  if(!perms) return message.channel.send("No tienes suficientes permisos!")

  const embed = new Discord.MessageEmbed()

  .setTitle("**Ticket ya funcional**")
  .setDescription("El ticket ya es funcional ya pueden hablar")
  .setFooter("FlashRP Tickets")
  .setColor("#2EFF00")


  message.channel.send(embed)

 }

}