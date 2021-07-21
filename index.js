const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

const dbs = require('discord-buttons');

const { Client, Collection, Guild, MessageEmbed } = require("discord.js")

const fs = require('fs')

let prefix = 'v!' //Esto define un prefix

///////////////HANDLER////////////////////////

client.command = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
  const command = require(`./comandos/${file}`);
  client.command.set(command.name, command);
}

///////////////HANDLER////////////////////////

///////////////DELETE MESSAGE////////////////////////

client.on('message', msg => {
  if(msg.content.includes('say')
     || msg.content.includes('ticketespera')
     || msg.content.includes('ticketpendiente')
     || msg.content.includes('ticketfuncional')
    ){msg.delete()
    }});

///////////////DELETE MESSAGE////////////////////////

///////////////////PRESENCE///////////////////

const estados = [`VicioRP`, ``]

client.on('ready', () => {

  setInterval(() => {
    function presence() {
      client.user.setPresence({
        status: 'on',
        activity: {
          name: estados[Math.floor(Math.random() * estados.length)],
          type: 'WATCHING',
    }
    })
  }
  presence()
}, 4000);

console.log('FlashRP Bot esta listo!')

});

///////////////////PRESENCE///////////////////

client.on('message', (message) => { 

if (!message.content.startsWith(prefix)) return
if (message.author.bot) return;

let usuario = message.mentions.members.first() || message.member; //definimos usuario
const args = message.content.slice(prefix.length).trim().split(/ +/g); //defenimos los argumentos
const command = args.shift().toLowerCase(); //definimos el comando

///////////////HANDLER////////////////////////

let cmd = client.command.find((c) => c.name === command || c.alias && c.alias.includes(command));
if(cmd){
  cmd.execute(client, message, args)
}

});

///////////////////24/7

client.on('guildMemberAdd', (member) => {

  if(member.guild.id === '838313701953110046'){

const embed = new Discord.MessageEmbed()

.setTitle("Un usuario se ha unido!")
.setDescription(`El usuario **${member.user.username}** se ha unido al servidor!`)
.setFooter("Gracias por unirte!")
.setColor("RAMDOM")

client.channels.cache.get('838313701953110049').send(embed)

  }

})

//////////////DISTUBE///////////////

const Distube = require("distube")
client.distube = new Distube(client, {
  emitNewSongonly: true, 
  searchSongs: false,
  leaveOnStop: true,
  leaveOnFinish: true, 
  leaveOnEmpty: true
});

client.distube.on("addList", (message, queue, playList) => {

  const embedaddlist = new Discord.MessageEmbed()

  .setTitle("Musica")
  .setDescription(`Playlist: **${playlist.name}**`)
  .setColor("RANDOM")

  message.channel.send(embedaddlist)
})

client.distube.on("addSong", (message, queue, song) => {

  const embedaddsong = new Discord.MessageEmbed()

  .setTitle("Musica")
  .setTitle(`Cancion añadida: **${song.name}** - **${song.formattedDuration}**`)
  .setColor("RANDOM")

  message.channel.send(embedaddsong)
})

client.distube.on("playSong", (message, queue, playsong) => {

  const embedplaysong = new Discord.MessageEmbed()

  .setTitle("Muscia")
  .setDescription(`Reproduciendo ahora: **${playsong.name}** - **${playsong.formattedDuration}**`)
  .setColor("RANDOM")


  message.channel.send(embedplaysong)
})

client.distube.on("playList", (message, queue, playlist) => {

  const embedplaylist = new Discord.MessageEmbed()

  .setTitle("Musica")
  .setDescription(`Reproducciendo playlist: **${playlist.name}**`)
  .setColor("RANDOM")

  message.channel.send(embedplaylist)

})

client.distube.on("error", (message, error) => {
  console.log(error)
})

//////////////DISTUBE///////////////

client.login(process.env.TOKEN)