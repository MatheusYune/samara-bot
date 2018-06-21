
const Discord = require('discord.js');
const client = new Discord.Client();
const ID_DBREAKER = "230878441006825474"
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

function calculaChances() {
    
}

client.on('message', (message) => {
    if (message.author.id == ID_DBREAKER && calculaChances()) {
        message.channel.send(" Nadavê issaí que tu falou, nem existe counter pick")
    }
});
client.login(process.env.BOT_TOKEN);
