const Discord = require("discord.js");
const data = require("quick.db");

exports.run = async (client, message, args) => {
    if(message.author.id === message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setTitle('**Seni gidi seni, Sunucu sahibisin sana __AFK__ yakışmaz ^^**'));
  message.channel
    .send(
      new Discord.MessageEmbed().setThumbnail(
        message.author.avatarURL()
          ? message.author.avatarURL({ dynamic: true })
          : "https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png"
      )
    )

    .then(a => a.delete({ timeout: 10000 }));
  data.set(
    `name.${message.author.id}.${message.guild.id}`,
    message.member.displayName
  );
  message.member.setNickname(message.member.displayName);
  //data.set(`kullanıcı.${message.author.id}.${message.guild.id}`, reason);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "afkkapat"
};
