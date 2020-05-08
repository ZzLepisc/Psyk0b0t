const Discord = require("discord.js");
const client = new Discord.Client();
new Discord.MessageEmbed();


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

//----------------------------------------background------------------------------------------



client.on("message", (message) => {
  if (message.content.startsWith("p!background")) {
    message.delete()
        console.log("La commande p!background viens d'être réaliser par un utilisateur")
    message.channel.send("Background RP : Le personnage que j'incarne est Victor MacAllen, il a 30 ans, il est dans la police depuis plusieurs années et il est particulièrement intéressé par les enquêtes. Il a une peur panique à l'idée de monter dans un hélicoptère. Il est veuf et pour le reste... Viens le découvrir sur le stream");
  }
});

//-----------------------------------------donnation------------------------------------------

client.on("message", (message) => {
  if (message.content.startsWith("p!donnation")) {
    message.delete()
        console.log("La commande p!donnation viens d'être réaliser par un utilisateur")
    message.channel.send("https://static-cdn.jtvnw.net/jtv_user_pictures/panel-145435385-image-478b7834-12c7-4a4b-8793-b687dc1e2acb");
    message.channel.send("Les donations ne sont pas obligatoire mais ça fait toujours énormément plaisir ! Elles serviront en partie a améliorer le stream et a pouvoir prendre du nouveau matos. Vous pouvez me proposer des échanges dans la limite du raisonnable mais sachez que moi je ne le suis pas ; Les dons de skins serviront en général pour des giveaway !")
    message.channel.send("Article 894 du code civil : La donation est un acte par lequel le donateur s'engage à abandonner la somme donnée. Un don est irrévocable. Il n'y aura donc aucun remboursement, quel qu'il soit !    ")
    message.channel.send("https://streamlabs.com/psyk0tr0pe/tip")
  }
});


//-------------------------------------------------------ig-----------------------------------------


client.on("message", (message) => {
  if (message.content.startsWith("p!ig")) {
    message.delete()
        console.log("La commande p!ig viens d'être réaliser par un utilisateur")
    message.channel.send("https://panels-images.twitch.tv/panel-145435385-image-49dfd073-fa63-49e3-91ca-cfb664c37fb3");
    message.channel.send("En achetant tes jeux avec ce lien en cliquant sur l'image tu m'aides à financer mes giveaways !!!!")
  }
});

//--------------------------------------------information------------------------------------------

client.on("message", (message) => {
  if (message.content.startsWith("p!help")) {
    message.delete()
        console.log("La commande p!help viens d'être réaliser par un utilisateur")
    message.channel.send(helpEmbed)
}});


const helpEmbed = new Discord.MessageEmbed()
.setTitle("Voici les commandes !")
.setAuthor("Lepisc_bot")
.setColor(0xeb0b0b)
.setThumbnail("https://cdn.discordapp.com/attachments/707929619478610040/708364009031598110/Psyk0_face_112.png")
.setDescription("Psyk0b0t est hébergé sur héroku, il est codé en Java scrypte par Zz_Lepisc#8288. Les commandes possibles sont :")
.addField("Les commande p!ban, p!kick, p!clear, sont pour la modération !", true)
.addField("La commande p!ms, vous donne le ping de Psyk0b0t,", true)
.addField("La commande p!twitch, vous donne le lien twitch de Psyk0tr0pe,", true)
.addField("La commande p!twitter, vous donne le twitter de Psyk0tr0pe,", true)
.addField("La commande p!youtube, vous donne la chaine youtube de Psyk0tr0pe,", true)
.addField("La commande p!snap, vous donne le snapchat de Psyk0tr0pe", true)
.addField("La commande p!projet, vous donne le projet future de Psyk0tr0pe,", true)
.addField("La commande p!setup, vous donne le setup de Psyk0tr0pe,", true) 
.addField("La commande p!donnation, vous donne le lien de donnation,", true)
.addField("La commande p!background, vous donne le background de Victor MacAllen,", true)
.addField("La commande p!topd, vous donne le tableau des tops dons twitch.", true)

//--------------------------------------------Top donnation-------------------------------------


client.on("message", (message) => {
  if (message.content.startsWith("p!topd")) {
    message.delete()
        console.log("La commande p!topd viens d'être réaliser par un utilisateur")
    message.channel.send("https://panels-images.twitch.tv/panel-145435385-image-d7b535cf-b6a3-41a7-9d2c-edbf05ac883a");
    message.channel.send("Merci Beaucoup les bros :")
    message.channel.send("O: BELAKoZo O: : 1229.15 €")
    message.channel.send("O: Nelief_tv O: : 620.00 €")
    message.channel.send("<3<3<3<3 TeeMx <3<3<3<3: 308.73 €")
    message.channel.send("<3<3 ledieudeslicornes <3<3 : 261.99 €")
    message.channel.send("<3<3 iRyzeNH1 <3<3: 149.25 €")
    message.channel.send("<3 farelas06 <3 : 139.00 €")
    message.channel.send("<3<3 Hellzafr <3<3 : 138.00 €")
    message.channel.send("<3 MCSTF_Panda <3 : 122.00 €")
    message.channel.send("<3 MimiSako <3 : 100 €")
    message.channel.send("<3 Perfidious <3 : 80 €")
  }
});