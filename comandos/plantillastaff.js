const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "plantillastaff",
  alias: [],

execute (client, message, args){

  const embed = new Discord.MessageEmbed()

  .setTitle("Plantilla de Staff")
  .setDescription(`1) ¿Nombre IC?\n2) ¿Edad OOC?\n3) ¿Cuánto tiempo llevas en el servidor?\n4) ¿Cuántas horas tienes en total jugando a RP?\n5) ¿Tienes experiencia como STAFF en otro servidor? ¿Si es asi, que puesto has desempeñado, que experiencias has obtenido?\n6) ¿Por qué te gustaría ser STAFF?\n7) ¿Que consideras que puedes aportar al equipo?\n8) Disponibilidad horaria (¿cuantas horas podrías estar de STAFF?)`)
  .setThumbnail("https://i.imgur.com/HoI9z6X.png")
  .setColor("YELLOW")

  message.channel.send(embed)

 }

}