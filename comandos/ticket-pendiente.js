const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "ticketpendiente",
  alias: [],

execute (client, message, args){

  var perms = message.member.hasPermission("ADMINISTRATOR")
  if(!perms) return message.channel.send("No tienes suficientes permisos!")

  const embed = new Discord.MessageEmbed()

  .setTitle("**Ticket Pendiente de Revision**")
  .setDescription("El ticket se ha puesto en revision!")
  .setFooter("FlashRP Tickets")
  .setColor("#FFCD00")


  message.channel.send(embed)

 }

}