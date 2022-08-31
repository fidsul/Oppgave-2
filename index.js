const { Client, Intents } = require('discord.js');



const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = "!";

const cheerio = require('cheerio');

const request = require('request');





client.on('message', message => {
  if (message.content.startsWith('-monday')) {
    message.channel.send(`https://cdn.discordapp.com/attachments/704089008980099102/800859908006346782/monday.mp4`);
  }
});


client.on('message', message => {
  if (message.content.startsWith('-tuesday')) {
    message.channel.send(`https://cdn.discordapp.com/attachments/704089008980099102/805774485272789052/tuesday.mp4`);
  }
});


client.on('message', message => {
  if (message.content.startsWith('-wednesday')) {
    message.channel.send(`https://cdn.discordapp.com/attachments/704089008980099102/800859696545136670/wednesday.mp4`);
  }
});


client.on('message', message => {
  if (message.content.startsWith('-thursday')) {
    message.channel.send(`https://cdn.discordapp.com/attachments/704089008980099102/806846702279065650/thursday.mp4`);
  }
});


client.on('message', message => {
  if (message.content.startsWith('-friday')) {
    message.channel.send(`https://cdn.discordapp.com/attachments/704089008980099102/827620267953881118/friday.mp4`);
  }
});

client.on('message', message => {
  if (message.content.startsWith('-saturday')) {
    message.channel.send(`https://cdn.discordapp.com/attachments/704089008980099102/845887567047557151/saturday.mp4`);
  }
});

client.on('message', message => {
  if (message.content.startsWith('-sunday')) {
    message.channel.send(`https://cdn.discordapp.com/attachments/704089008980099102/795342972328869918/sunday.mp4`);
  }
});


client.on('message', (message) => {
  if (message.content.startsWith("!fyou")) {

    const wallpapers = [
      `https://cdn.discordapp.com/attachments/497608217501761556/703660937126739968/fuck_you.mp4`, `https://cdn.discordapp.com/attachments/704089008980099102/759555102066999306/fyou2.mp4`, `https://cdn.discordapp.com/attachments/704089008980099102/818172534418964490/fyou3.mp4`,
    ];

    const response = wallpapers[Math.floor(Math.random() * wallpapers.length)];
    message.channel.send(response);
  }
});

client.on('message', (message) => {
  if (message.content.startsWith("!fuckyou")) {

    const wallpapers = [
      `https://cdn.discordapp.com/attachments/497608217501761556/703660937126739968/fuck_you.mp4`, `https://cdn.discordapp.com/attachments/704089008980099102/759555102066999306/fyou2.mp4`, `https://cdn.discordapp.com/attachments/704089008980099102/818172534418964490/fyou3.mp4`,
    ];

    const response = wallpapers[Math.floor(Math.random() * wallpapers.length)];
    message.channel.send(response);
  }
});


client.on('message', (message) => {
  if (message.content.startsWith("!f you")) {

    const wallpapers = [
      `https://cdn.discordapp.com/attachments/497608217501761556/703660937126739968/fuck_you.mp4`, `https://cdn.discordapp.com/attachments/704089008980099102/759555102066999306/fyou2.mp4`, `https://cdn.discordapp.com/attachments/704089008980099102/818172534418964490/fyou3.mp4`,
    ];

    const response = wallpapers[Math.floor(Math.random() * wallpapers.length)];
    message.channel.send(response);
  }
});



client.on('message', (message) => {
  if (message.content.startsWith("!fuck you")) {

    const wallpapers = [
      `https://cdn.discordapp.com/attachments/497608217501761556/703660937126739968/fuck_you.mp4`, `https://cdn.discordapp.com/attachments/704089008980099102/759555102066999306/fyou2.mp4`, `https://cdn.discordapp.com/attachments/704089008980099102/818172534418964490/fyou3.mp4`,
    ];

    const response = wallpapers[Math.floor(Math.random() * wallpapers.length)];
    message.channel.send(response);
  }
});





client.on('message', message => {
  if (message.content.startsWith('hey friend')) {
    message.channel.send(`hey ${message.author.username}\n`);
  }
});


client.on('message', message => {
  if (message.content.startsWith('hows it going')) {
    message.channel.send(`its going good how about you ${message.author.username}\n`);
  }
});


client.on('message', message => {
  if (message.content.startsWith('!ipgrab')) {
    message.channel.send(`https://cdn.discordapp.com/attachments/742426421837824131/870121854784921680/ipgrab.PNG`);
  }
});



client.on('message', message => {
  if (message.content.startsWith('!sus')) {
    message.channel.send(`https://cdn.discordapp.com/attachments/742426421837824131/870088777471782922/eufgerhfgh.mp4`);
  }
});





client.on('message', message => {
  if (message.content.startsWith('!bozo')) {
    message.channel.send(`https://cdn.discordapp.com/attachments/742426421837824131/869985637317627974/rip.mov`);
  }
});

client.on('message', message => {
  if (message.content.startsWith('how is it going')) {
    message.channel.send(`its going good how about you ${message.author.username}\n`);
  }
});

client.on('message', message => {
  if (message.content.startsWith('hows it going?')) {
    message.channel.send(`its going good how about you ${message.author.username}\n`);
  }
});

client.on('message', message => {
  if (message.content.startsWith('how is it going?')) {
    message.channel.send(`its going good how about you ${message.author.username}\n`);
  }
});

client.on('message', message => {

  if (!message.guild) return;


  if (message.content.startsWith('!kick')) {

    const user = message.mentions.users.first();

    if (user) {

      const member = message.guild.members.resolve(user);

      if (member) {


        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {

            message.channel.send(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {

            message.channel.send('I was unable to kick the member');

            console.error(err);
          });
      } else {
        message.channel.send("That user isn't in this guild!");
      }
    } else {
      message.channel.send("You didn't mention the user to kick!");
    }
  }
});

client.on('message', (message) => {
  if (message.content.startsWith('!greg')) {

    const wallpapers = [
      `https://cdn.discordapp.com/attachments/843230011943026698/844640978555895808/inframe.PNG`, `https://cdn.discordapp.com/attachments/806212585715793920/844594682624213012/20210519_161741.jpg`, `https://cdn.discordapp.com/attachments/806212585715793920/843961231471673384/20210517_143826.jpg`, `https://cdn.discordapp.com/attachments/806212585715793920/843413210094633000/20210509_112538.jpg`, `https://cdn.discordapp.com/attachments/843230011943026698/844642258283528202/unknown.png`, 'https://cdn.discordapp.com/attachments/840991504600268817/845299867621392454/20210520_073820.jpg'
    ];

    const response = wallpapers[Math.floor(Math.random() * wallpapers.length)];
    message.channel.send(response);
  }
});

client.on('message', (message) => {
  if (message.content === 'https://cdn.discordapp.com/attachments/843230011943026698/844642258283528202/unknown.png') {
    message.channel.send('this is monke greg truly a rare sight')
  }
})


client.on('message', msg => {
  if (msg.content === 'yes') {
    console.log('someone said yes');
  }
});

client.on('message', msg => {
  if (msg.content === 'Yes') {
    console.log('someone said yes');
  }
});




client.on("ready", () => {
  client.user.setPresence({
    status: "dnd",
    game: {
      name: "to yes",
      type: "Listening"
    }
  });
});

const express = require("express");
const app = express();




app.use('/ping', (req, res) => {
  res.send(new Date());
});

const Discord = require("discord.js");
const fs = require("fs");








client.on('message', message => {
  if (message.content === `${prefix}server stats`) {
    message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  }
});

client.on('message', message => {
  if (message.content === `${prefix}me`) {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id} 
    ${message.author.displayAvatarURL({ dynamic: true })}`);
  }
});




client.on('message', message => {
  if (message.content === '!cock') {
    message.channel.send('https://cdn.discordapp.com/attachments/843230011943026698/844252335873720320/red-rooster-cock-side-view-abstract_1284-16627.png')
  }
})



client.on('message', message => {
  if (message.content === '-yes') {
    message.channel.send('https://cdn.discordapp.com/attachments/704089008980099102/712037214644863046/yes.mp4')
  }
})



client.on('message', (message) => {
  if (message.content === 'https://cdn.discordapp.com/attachments/842140485886803990/844976377379684372/tenor.gif')
    message.channel.send('ping pong ching chong!')
})


client.on('message', (message) => {
  if (message.content.startsWith('!pussy')) {

    const wallpapers = [
      `https://cdn.discordapp.com/attachments/840991504600268817/844644109754826842/20210226_1333302.jpg`, `https://cdn.discordapp.com/attachments/840991504600268817/844644200150859790/20210501_112157.jpg`, 'https://cdn.discordapp.com/attachments/840991504600268817/844644200724168784/received_907942652943741.jpeg', 'https://cdn.discordapp.com/attachments/843230011943026698/844645276831449088/unknown.png', 'https://cdn.discordapp.com/attachments/843230011943026698/844645394448253018/unknown.png'
    ];

    const response = wallpapers[Math.floor(Math.random() * wallpapers.length)];
    message.channel.send(response);
  }
});

client.on('message', (message) => {
  if (message.content === '!verify') {
    message.member.roles.add('863842732123619369')
  }
})



client.on('message', (message) => {
  if (message.content === '!Verify') {
    message.member.roles.add('863842732123619369')
  }
})



client.on('message', (message) => {
  if (message.content === 'verify') {
    message.member.roles.add('863842732123619369')
  }
})

client.on('message', (message) => {
  if (message.content === 'Verify') {
    message.member.roles.add('863842732123619369')
  }
})


client.on('message', (message) => {
  if (message.content.startsWith('!ping')) {

    const wallpapers = [
      `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `https://cdn.discordapp.com/attachments/842140485886803990/844976377379684372/tenor.gif `
    ];

    const response = wallpapers[Math.floor(Math.random() * wallpapers.length)];
    message.reply(response);
  }
});


client.on('message', (message) => {
  if (message.content.startsWith('!flip')) {

    const wallpapers = [
      `https://cdn.discordapp.com/attachments/843230011943026698/844688641586495488/unknown.png`, `https://cdn.discordapp.com/attachments/843230011943026698/844688681578266624/unknown.png`,
    ];

    const response = wallpapers[Math.floor(Math.random() * wallpapers.length)];
    message.channel.send(response);
  }
});


client.on('message', (message) => {
  if (message.content === '!pc') {
    message.channel.send('https://cdn.discordapp.com/attachments/843230011943026698/844690395610742785/0a356142c7184ae283480e277bf81dda.gif')
  }
})


client.on('message', (message) => {
  if (message.content === '!nfr')
    message.channel.send('https://gfycat.com/warmlongangora')
})









client.on('message', (message) => {
  if (message.content.startsWith('!howgay')) {

    const wallpapers = [
      'straight', '1%', '2%', '3%', '4%', '5%', '6%', '7%', '8%', '9%', '10%', '11%', '12%', '13%', '14%', '15%', '16%', '17%', '18%', '19%', '20%', '21%', '22%', '23%', '24%', '25%', '26%', '27%', '28%', '29%', '30%', '31%', '32%', '33%', '34%', '35%', '36%', '37%', '38%', '39%', '40%', '41%', '42%', '43%', '44%', '45%', '46%', '47%', '48%', '49%', 'bi', '51%', '52%', '53%', '54%', '55%', '56%', '57%', '58%', '59%', '60%', '61%', '62%', '63%', '64%', '65%', '66%', '67%', '68%', '69%', '70%', '71%', '72%', '73%', '73%', '74%', '75%', '76%', '77%', '78%', '79%', '80%', '81%', '82%', '83%', '84%', '85%', '86%', '87%', '88%', '89%', '90%', '91%', '92%', '93%', '94%', '95%', '96%', '97%', '98%', '99%', '100%', 'mega gay'
    ];

    const response = wallpapers[Math.floor(Math.random() * wallpapers.length)];
    message.reply(response);
  }
});

client.on('message', (message) => {
  if (message.content === '!verify') {
    message.delete()
  }
})



client.on('message', (message) => {
  if (message.content === '!Verify') {
    message.delete()
  }
})


client.on('message', (message) => {
  if (message.content == 'verify') {
    message.delete()
  }
})


client.on('message', (message) => {
  if (message.content === 'Verify') {
    message.delete()
  }
})


client.on('message', (message) => {
  if (message.content.startsWith('!sexuality')) {

    const wallpapers = [
      'is normal', 'is gay', 'is bi', 'https://cdn.discordapp.com/attachments/843230011943026698/845704171184324668/200.gif', 'is mayonaise',
    ];

    const response = wallpapers[Math.floor(Math.random() * wallpapers.length)];
    message.reply(response);
  }
});



client.on('message', (message) => {
  if (message.content.startsWith('!Ping')) {

    const wallpapers = [
      `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `pong! ${Date.now() - message.createdTimestamp}ms. `, `https://cdn.discordapp.com/attachments/842140485886803990/844976377379684372/tenor.gif `
    ];

    const response = wallpapers[Math.floor(Math.random() * wallpapers.length)];
    message.channel.send(response);
  }
});





const userIDP = "821754988480299025";

client.on("message", function(message) {
  if (message.author.id === userIDP) {
    message.channel.send('https://tenor.com/view/toes-foot-gif-9925914');
  }
});


client.on('message', (message) => {
  if (message.content === 'https://cdn.discordapp.com/attachments/852178436553834506/925905492209987675/frost.png') {
    message.delete()
  }
})




client.login('ODUzNzI3NTQ4MjE4Mjc3ODk3.GYxihv.Ezs93fJOUZbwejEk29W1wjUppAyR9dwJXID5hk');