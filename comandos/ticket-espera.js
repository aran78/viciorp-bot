const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "ticketespera",
  alias: [],

execute (client, message, args){

  var perms = message.member.hasPermission("ADMINISTRATOR")
  if(!perms) return message.channel.send("No tienes suficientes permisos!")

  const embed = new Discord.MessageEmbed()

  .setTitle("**Ticket en espera**")
  .setDescription("El ticket se ha puesto en espera, porfavor no hablen!")
  .setFooter("FlashRP Tickets")
  .setColor("#FF0000")


  message.channel.send(embed)

 }

}