const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "normativastreamer",
  alias: [],

execute (client, message, args){

  const embed = new Discord.MessageEmbed()

  .setTitle("**Normativa Streamer**")
  .setDescription("1) No tener sanciones administrativas reiteradas.\n2) Hacer 2 directos mínimo a la semana.\n3) A ser posible que el directo se resuba y que no se elimine, a ser posible.\n4) Si estas en directo abtenerse a los /report, solo cuando sea de extrema necesidad.\n5) Al poner tu canal en el de streams, el contenido deberá de ser de FlashRP y no de otros juegos o servidores.\n6) Tener un comportamiento ejemplar.\n7) En el titulo de la transmisión, poner el nombre del servidor.\n8) A la hora de rolear como banda/mafia o ir a puntos calientes, se tendra que tapar el minimapa para evitar conflictos con MG.")
  .setFooter("*FlashRP Normativas*")
  .setThumbnail("https://i.imgur.com/HoI9z6X.png")

  message.channel.send(embed)

 }

}