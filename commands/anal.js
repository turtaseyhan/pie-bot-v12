/*const Discord = require('discord.js');
const DabiImages = require("dabi-images");
const DabiClient = new DabiImages.Client();
const data = require('quick.db');


exports.run = async (client, message, args) => {
if(message.channel.nsfw == false) return message.channel.send(new Discord.MessageEmbed().setTitle('Bir hata oldu!').setImage('https://support.discord.com/hc/article_attachments/360007795191/2_.jpg').setDescription(`${message.author} **Kanal __NSFW__ olarak aktif değil. Kontrol et!**`).setColor('#00001'))
if(await data.fetch(`slm.${message.author.id}.${message.guild.id}.an`)) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`**10 saniyenin altında hızlı kullanamazsın!**`));
DabiClient.nsfw.real.random().then(json => {
message.channel.send(new Discord.MessageAttachment(json.url));
data.set(`slm.${message.author.id}.${message.guild.id}.an`, 'Code World');
setTimeout(() => {
data.delete(`slm.${message.author.id}.${message.guild.id}.an`)
}, 10000);
})
};
const discord = require("discord.js");
const superagent = require("superagent");

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent
      .get("https://nekobot.xyz/api/image")
      .query({ type: "anal" })
      .end((err, response) => {
        msg.channel.send({ file: response.body.message });
      });
  } else {
    msg.channel.send("This isn't NSFW channel!");
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "anal"
};*/

const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'pgif'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("Bu kanal bir NSFW kanalı değil!")
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['porno','4k'],
  permLevel: 0
};

exports.help = {
  name: 'pgif',
  description: 'NSFW Resimleri Gösterir',
  usage: 'pgif'
};
