const config = require('./config.json');
const logger = require('./utils/logger');
const Discord = require('discord.js');
const Statcord = require("statcord.js");
const { token } = require('./utils/variables.js');


const manager = new Discord.ShardingManager('./index.js', {
  token: token,
 autoSpawn: true, // if crash restart
  //totalShards: 'auto' // if you want to create shards auto
  totalShards: 4 // starting 4 shards
});

manager.spawn();

manager.on('shardCreate', shard => logger.info(`Launching Shard ${shard.id + 1} | Pogy`, { label: `Shard` }));
