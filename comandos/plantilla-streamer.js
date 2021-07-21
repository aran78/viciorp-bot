const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "plantillastreamer",
  alias: [],

execute (client, message, args){

  const embed = new Discord.MessageEmbed()

  .setTitle("**Plantilla streamer**")
  .setDescription("º URL del perfil de steam:\nº ¿Cuál es tu nombre IC?\nº ¿Que edad OOC tienes?\nº ¿Cuál es la media de espectadores que tienes?\nº ¿Tienes algun mod a tu cargo?\nº ¿Cuanto tiempo llevas en el servidor?\nº ¿Cuantas horas totales llevas jugando al RP?")
  .setFooter("*FlashRP Plantillas*")
  .setThumbnail("https://i.imgur.com/HoI9z6X.png")

  message.channel.send(embed)

 }

}