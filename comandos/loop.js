const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "loop",
  alias: ["repeat"],

execute (client, message, args){

  const queue = client.distube.getQueue(message)

  if(!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz!")

  if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("Debes estar en el mismo canal que estoy yo!")

  if(!queue) return message.channel.send("No hay canciones reproduciendose")

  const opcion = args[0]
  if(!opcion) return message.channel.send("Debes escribir una opcion ('0' Desactivar repeticion / '1' Activar repeticion / '2' Repeticion de todo el queue)")

  if(opcion !== '0'){
    if(opcion !== '1'){
      if(opcion !== '2'){
        return message.channel.send("Eso no es una opcion valida!")
      }
    }
  }

  if(opcion === '0'){
    client.distube.setRepeatMode(message, 0)
    message.channel.send("La repeticion ha sido **desactivada**")
    return;
  }

  if(opcion === '1'){
    client.distube.setRepeatMode(message, 1)
    message.channel.send("Se ha activado la repeticion a la cancion **actual**")
    return;
  }

  if(opcion === '2'){
    client.distube.setRepeatMode(message, 2)
    message.channel.send("Se ha activado la repeticion del **queue entero**")
    return;
  }

 }

}