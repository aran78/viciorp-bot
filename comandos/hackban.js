const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "banid",
  alias: ["hackban"],

async execute (client, message, args){

  var perms = message.member.hasPermission("BAN_MEMBERS")
  if(!perms) return message.channel.send("No tienes permisos para usar este comando!")

  if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("No tengo suficientes permisos para usar este comando [Necesito los permisos Benear Miembros]")

  const id = args.join(' ')
  if(!id) return message.channel.send("Debes colocar una id")

  const member = await client.users.fetch(id)
  message.guild.members.ban(member.id)

  message.channel.send(`El usuario **${member.username}** fue baneado correctamente`)

 }

}