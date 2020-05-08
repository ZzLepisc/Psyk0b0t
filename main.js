const Discord = require("discord.js");
const client = new Discord.Client();


//------------------------------------------------IMPORANT/SECRET---------------------------------------


client.on("ready", () => {
    console.log("PSYK0B0T vient de démmarrer");
  });
  
  
  client.login(process.env.TOKEN);
  
  
  client.on ( "ready" ,  ( )  =>  { 
    client.user.setActivity ( "https://www.twitch.tv/psyk0tr0pe" ,  {  type : "STREAMING" } ) 
  } );
  
  
  let prefix = "p!"


  //------------------------------------------------IMPORANT/SECRET---------------------------------------
  //--------------------------------------------------ms-----------------------------------------------------


client.on("message", (message) => {
    if (message.content.startsWith("p!ms")) {
      message.delete()
          console.log("La commande !ms viens d'être réaliser par un utilisateur")
      message.channel.send('Le ping est de : `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
    }
}); 
  
  
//--------------------------------------------------ms----------------------------------------------------

//----------------------------------------------MESSAGE DE BIENVENUE-----------------------------------------------


client.on('guildMemberAdd', member => {
const channel = member.guild.channels.cache.find(ch => ch.name === '🛬bienvenue');
if (!channel) return;
channel.send(`Bienvenue sur le serveur, ${member}`, (BienvenueEmbed));
});

//----------------------------------------------MESSAGE DE BIENVENUE-----------------------------------------------

//------------------------------------------------------CLEAR-----------------------------------------------------------


client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
  
    if (args[0].toLowerCase() === prefix + "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let count = parseInt(args[1])
        if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer")
        if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
        if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
        message.channel.bulkDelete(count + 1, true)
    }});
  
  
  
  //------------------------------------------------------CLEAR-----------------------------------------------------------
  
  
  //-------------------------------------------------------KICK------------------------------------------------------------
  
  client.on('ready', () => {
    console.log('Commande kick fonctionnel !');
  });
  
  client.on('message', message => {
    if (!message.guild) return;
    
    if (message.content.startsWith('p!kick')) {
      const user = message.mentions.users.first();
      
      if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Cette utilisateur est trop puissant pour que vous puissiez le kick ! J'suis d'accord c'est trop nul ... mais c'est les règles !")
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick('Raison facultative qui s affichera dans les logs')
            .then(() => {
              message.reply("Le méchant garçon a était kick !");
            })
            .catch(err => {
              message.reply("Je n'ai pas pu virer le membre");
              console.error(err);
            });
        } else {
          message.reply("Cet utilisateur n'est pas dans cette guilde!");
        }
      } else {
        message.reply("Vous n'avez pas mentionné d'utilisateur à kick !");
      }
    }
  });
  
  
  //-------------------------------------------------------KICK------------------------------------------------------------
  
  
  //----------------------------------------------------BAN----------------------------------------------------
  
  
  client.on('message', message => {
    if (!message.guild) return;
  
    if (message.content.startsWith('p!ban')) {
      const user = message.mentions.users.first();
      if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(banRatéEmbed)
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          
          member
            .ban({
              reason: 'Raison facultative qui s affichera dans les logs (ban)',
            })
            .then(() => {
              message.reply('Vous avez réussis a BANNIR un méchant garçon ! Bien fait pour lui ! Les règles ça se respecte !!!!');
            })
            .catch(err => {
              message.reply("Cette utilisateur est trop puissant pour que vous puissiez le BANNIR !! J'suis d'accord c'est trop nul ... mais ce sont les règles !!");
              console.error(err);
            });
        } else {
          message.reply("Cet utilisateur n'est pas dans cette guilde!");
        }
      } else {
        message.reply("Vous n'avez pas mentionné d'utilisateur à kick !");
      }
    }
});
  
  
//----------------------------------------------------BAN---------------------------------------
  

//----------------------------------------créateur----------------------------------------

client.on("message", (message) => {
    if (message.content.startsWith("p!créateur")) {
      message.delete()
          console.log("La commande !twitch viens d'être réaliser par un utilisateur")
      message.channel.send("Ce bot a était créé par @Zz_Lepisc#8288 pour la caumunauté du grand streamer Psyk0tr0pe");
    }
});


//-----------------------------------------------reseaux-----------------------------------


client.on("message", (message) => {
  if (message.content.startsWith("p!twitter")) {
    message.delete()
        console.log("La commande p!twitter viens d'être réaliser par un utilisateur")
    message.channel.send("Mon twitter : https://twitter.com/Psyk0tr0peTV");
  }
});


client.on("message", (message) => {
  if (message.content.startsWith("p!youtube")) {
    message.delete()
        console.log("La commande p!youtube viens d'être réaliser par un utilisateur")
    message.channel.send("Ma chaine youtube : https://www.youtube.com/channel/UCaC3O3ZWwzg2MzpUerqeQ_Q");
  }
});


client.on("message", (message) => {
  if (message.content.startsWith("p!snap")) {
    message.delete()
        console.log("La commande p!snap viens d'être réaliser par un utilisateur")
    message.channel.send("Mon snap : psykotropetv");
  }
});


client.on("message", (message) => {
  if (message.content.startsWith("p!twitch")) {
    message.delete()
        console.log("La commande !twitch viens d'être réaliser par un utilisateur")
    message.channel.send(" Mon twitch : https://www.twitch.tv/psyk0tr0pe ");
  }
});




//----------------------------------------------projet--------------------------------------------

client.on("message", (message) => {
  if (message.content.startsWith("p!projet")) {
    message.delete()
        console.log("La commande p!projet viens d'être réaliser par un utilisateur")
    message.channel.send("Nouvelles émotes de subs et nouveau badges à venir pour participer à l'amélioration : https://twitch.streamlabs.com/psyk0tr0pe");
  }
});


//---------------------------------------------setup-----------------------------------------



client.on("message", (message) => {
  if (message.content.startsWith("p!setup")) {
    message.delete()
        console.log("La commande p!setup viens d'être réaliser par un utilisateur")
    message.channel.send("https://panels-images.twitch.tv/panel-145435385-image-1c4cbca7-dafc-451e-8926-27b7a13a217f");
  }
});

