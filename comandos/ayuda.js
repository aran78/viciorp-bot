const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "help",
  alias: ["ayuda"],

execute (client, message, args){

  const embedcargando = new Discord.MessageEmbed()

  .setDescription("Espera a que cargen las reacciones")

  const embedprincipal = new Discord.MessageEmbed()

  .setTitle("Ayuda")
  .setDescription("Reacciona en <:1556blurplerules:864784598738534401> para ir al apartado de administracion.\n\nReacciona en <:3527blurplevoicechannel:864784599347625995> para ir al apartado de musica.\n\n<a:loading:864785800339390464>")

  const embed1 = new Discord.MessageEmbed()

  .setTitle("Administracion <:1556blurplerules:864784598738534401>")
  .setDescription("**Comandos:**\n\n**v!ban** (Banear a un usuario)\n\n**v!banid** (Banear a un usuarios por id)\n\n**v!unban** (Desbanear a alguien por id)\n\n**v!warn** (Poner un warn a un usuario)\n\n**v!warns** (Ver cuantos warns tiene un usuario)\n\n**v!say** (Hablar como si fueras el bot)\n\n**v!clear** (Limpiar mensajes 1-100 (solo los mensajes que no pasan de 14 dias) )")

  const embed2 = new Discord.MessageEmbed()
  .setTitle("Musica <:3527blurplevoicechannel:864784599347625995>")
  .setDescription("**Comandos:**\n\n**v!play/v!p** (Poner una cancion)\n\n**v!stop** (Eliminar el queue)\n\n**v!queue** (Ver la lista de canciones)\n\n**v!pause** (Para parar la cancion (no del todo) )\n\n**v!continue** (Para seguir la cancion pausada)\n\n**v!loop** (Repetir cancion, queue, etc...)")

  message.channel.send(embedcargando).then(msg => {
    msg.react("864784598738534401")
    msg.react("864784599347625995").then(m => {
      msg.edit(embedprincipal)
      msg.awaitReactions((reaction, user) => {
        if(message.author.id !== user.id) return;
        if(reaction.emoji.id === '864784598738534401'){
          msg.edit(embed1)
        }
        if(reaction.emoji.id === '864784599347625995'){
          msg.edit(embed2)
        }
      })
    })
  })

 }

}