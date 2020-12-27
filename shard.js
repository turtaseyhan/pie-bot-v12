const { ShardingManager } = require('discord.js');

const bumbe = new ShardingManager('./pie.js', { //main dosyanızı yazın!
	totalShards: 2, //Auto yazılabilir veya farklı bir sayı yazabilirsiniz.
    token: "Njk2MzMzNDEwNDUyNTA0NTk2.XonNBg.MnIjKKapB6TzPCZuajKZGLQY164" //Tokeninizi giriniz
});
bumbe.spawn();

bumbe.on('shardCreate', shard => {
    console.log(`${shard.id} İDli shard başlatıldı!`);
});
