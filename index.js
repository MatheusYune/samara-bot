const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("ready", () => {
    client.user.setActivity(`on ${client.guilds.size} servers`);
    console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
  });

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);
