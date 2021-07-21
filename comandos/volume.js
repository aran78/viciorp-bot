const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "volume",
  alias: ["vol"],

execute (client, message, args){

  const serverQueue = client.distube.getQueue(message)

  if(!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz!")

  if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("Debes estar en el mismo canal que estoy yo!")

  if(!serverQueue) return message.channel.send("No hay canciones reproduciendose!")

  const volume = args[0]
  if(!volume) return message.channel.send("Debes decir un volumen!")
  if(!isNaN) return message.channel.send("Debes decir un numero!")

  if(volume < 1) return message.channel.send("El numero tiene que ser mayor que 0!")
  if(volume > 100) return message.channel.send("El numero tiene que ser menor de 100!")

  client.distube.setVolume(message, volume)
  message.channel.send(`El volumen se ha establecido a **${volume}**`)

 }

}