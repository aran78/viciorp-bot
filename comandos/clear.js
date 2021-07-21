const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "clear",
  alias: [],

execute (client, message, args){

  const cantidad = args.join(" ");

  var perms = message.member.hasPermission("MANAGE_MESSAGES")
  if(!perms) return message.channel.send("Necesitas los permisos **GESTIONAR MENSAJES** para usar este comando!")

  if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return messages.channel.send("Necesito el permiso **GESTIONAR MENSAJES** para usar esta funcion!")

  if (!cantidad) return message.channel.send("Debes escribir un cantidad **valida**!")

  if(cantidad === '0') return message.channel.send("Desbes escribir un numero mayor que **0**!")

  message.channel.bulkDelete(cantidad).then(()=> {
    message.channel.send(`**${cantidad}** mensajes borrados correctamente!`)
  })

 }

}