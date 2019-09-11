//Import des fonctions discord + YouTube
const Discord = require('discord.js')
const ytdl = require('ytdl-core');

//Tableau commande bot
var help = ["Ne t'inquiétes pas mon chou :wink:", 'Voici la liste des commandes', 
    '!chara : Laisse moi donc me présenter', '!chara hi : Dit moi coucou', '!chara game : Joue avec moi',
    "!chara song : J'adore chanter =)", '!chara chocolate : Donne moi du chocolat (stp :yum:)',
    "!chara yt : Je vais lire une vidéo YouTube pour toi",
    "!chara truth : La vérité sort de la bouche des enfants",
    'Plus de commande à venir. . .']
//Nouvelle objet "bot"
const bot = new Discord.Client()

//Mise en ligne
bot.on('ready', function () {
    console.log("Je suis connecté !")
    bot.user.setActivity("UNDERTALE", { type: "PLAYING"})
})

//Variable boolean
var isReady = true;

//Variable pour la fonction sleep (1000 = 1 seconde)
var sleep = require('system-sleep');

//Action quand un membre rejoint le serveur
bot.on('guildMemberAdd', member => {
    const welcomechannel = member.guild.channels.find('id', '605538532697702422') // ID de notre channel
    var embed = new Discord.RichEmbed()
    .setColor('#76D880')
    .setDescription(`:inbox_tray: Howdy <@${member.user.id}> ! Bienvenue chez les fous =)`)
    return welcomechannel.send({embed})
});

//Action quand un membre quitte le serveur
bot.on('guildMemberRemove', member => {
    const welcomechannel = member.guild.channels.find('id', '605538532697702422') // ID de notre channel
    var embed = new Discord.RichEmbed()
    .setColor('#76D880')
    .setDescription(`:inbox_tray: OH NON ! <@${member.user.id}> NOUS A QUITTÉ... QUELLE TERRIBLE TRAGÉDIE =(`)
    return welcomechannel.send({embed})
});

//Action lorsque le bot reçoit un message
bot.on('message', message => {
    if (message.content === '!chara') { // SI le message reçu est "!chara" ALORS
        message.channel.send("Salutation. Je suis CHARA =)")
    }

    if (message.content === '!chara hi') { // SI le message reçu est "!chara hi" ALORS
        message.channel.send("Howdy " + message.author + " ! =)")
    }

    if (message.content === '!chara help') { // SI le message reçu est "!chara help" ALORS
        var boucle = 0;
        while (help[boucle] != null){
            message.channel.send(help[boucle])
            boucle++
        }
    }

    if (message.content === '!chara test') {
        //TEST
        message.channel.send('Zone de test')
    }

    if (message.content === '!chara game'){ // SI le message reçu est "!chara game" ALORS
        message.channel.send("Jouons à un jeu")
        message.channel.send("Dit moi un chiffre entre 1 et 9")
        message.channel.send("Tu as 10 secondes. . .")
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        collector.on('collect', message => {
            if (message.content === '1') {
                message.channel.send("I have a ton of work today. . . a SKELE-TON")
            } else if (message.content === '2') {
                message.channel.send("What do you call a fake noodle ? They're 'IMPASTAS'");
            } else if (message.content === '3') {
                message.channel.send("Why the skeleton can't go to a party ?")
                sleep(5000)
                message.channel.send("Because he had NOBODY to go with.")
            } else if (message.content === '4'){
                message.channel.send("Did you know about the italien chef, he is dead. . .")
                sleep(2000)
                message.channel.send("I can say he just. . .")
                sleep(2000)
                message.channel.send("PASTA-way")
            }
        })
    }

    if (message.content === '!chara chocolate'){
        message.channel.send("Yummi ! :chocolate_bar: :yum: C'est trop gentil, fallait pas. Merci beaucoup " + message.author + " :heart:")
    }

    if (isReady == true && message.content === '!chara yt'){
        if (message.member.voiceChannel) {
            message.member.voiceChannel.join().then(connection => 
            {
                message.reply("Donne moi un lien YouTube stp et je chanterai :wink:");
                message.reply("Tu as 10 secondes. . .");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
                collector.on('collect', message => {
                    if (message.author != null) {
                        isReady = false;
                        message.channel.send("Chargement en cours. . .");
                        const lien = message.content;
                        const dispatcher = connection.playStream(ytdl(lien));
                        dispatcher.setVolume(0.5);
                        message.channel.send("Chargement terminé !");
                        bot.user.setActivity("une vidéo YouTube", { type: "LISTENING"})
                        bot.user.setStatus('dnd')
                        dispatcher.on("end", end => 
                        {
                            message.member.voiceChannel.leave();
                            bot.user.setActivity("UNDERTALE", { type: "PLAYING"})
                            bot.user.setStatus('online');
                            isReady = true;
                        })
                    }
                })
            })
            .catch(console.log);
        }else{
            message.reply('Connecte toi dans un salon vocal et réessaye stp');
        }
    }

    if (isReady == true && message.content === '!chara song') {
        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voiceChannel) {
        message.member.voiceChannel.join().then(connection => 
            {
                isReady = false;
                message.reply('Je suis dans le salon vocal !')
                message.channel.send("Musique en cours de lecture : Stronger than You - Chara Response")
                const dispatcher = connection.playFile('bot.mp3')
                dispatcher.setVolume(0.5)
                bot.user.setActivity("une chanson", { type: "LISTENING"})
                bot.user.setStatus('dnd')
                dispatcher.on("end", end => 
                {
                    message.member.voiceChannel.leave();
                    bot.user.setActivity("UNDERTALE", { type: "PLAYING"})
                    bot.user.setStatus('online')
                    isReady = true;
                })
            })
            .catch(console.log);
        } else {
        message.reply('Connecte toi dans un salon vocal et réessaye stp');
        }
    }

    if (message.content === '!chara truth'){
        message.channel.send("Alors, alors, alors. . .")
        message.channel.send("Qui va t'on jugé aujourd'hui ?")
        message.reply('Dit moi un nom. . .')
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content === 'Lefaser' || message.content === 'lefaser' || message.content === 'faser' || message.content === 'Faser'){
                message.channel.send("Lefaser hum. . .")
                var quote = Math.round(Math.random() * 3 - 0.5);
                switch (quote){
                    case 0 : 
                        message.reply("Tu savais que Faser n'aime pas les courants éléctriques ? Il n'aime pas les DÉFASAGES");
                        break;
                    case 1 : 
                        message.reply("J'ai regardé la définition du Jötunn sur le wiki. Pas étonnant que Faser y fasse parti");
                        break;
                    case 2 : 
                        message.reply("Le connard d'Or hein ? Je laisse ma place, il le mérite amplement");
                        break;
                }
            } else if (message.content === 'Tiberias 84' || message.content === 'Tiberias' || message.content === 'tibe' || message.content === 'Tibe' || message.content === 'tibé' || message.content === 'Tibé'){
                message.channel.send("Mr Tiberias. . . C'est un cas celui là. . .")
                var quote = Math.round(Math.random() * 3 - 0.5);
                switch (quote){
                    case 0 : 
                        message.reply("Je cherche une réponse. Attendez. . .");
                        sleep(3000);
                        message.reply("Attendez encore. . .");
                        sleep(3000);
                        message.reply("Non, rien ne me viens à l'esprit. Pour l'instant. . .")
                        break;
                    case 1 : 
                        message.reply("A t-il mangé un lion récemment ? Il arrête pas de crier 'SIMBAAAAAAAAAAAAA'");
                        break;
                    case 2 : 
                        message.reply("C'est peut-être un connard, mais pas que !");
                        break;
                }
            } else if (message.content === 'Chapito' || message.content === 'chapito' || message.content === 'Chapi' || message.content === 'chapi'){
                message.channel.send("Chapi Chapi Chapo... Pardon. Donc Chapito. . .")
                var quote = Math.round(Math.random() * 3 - 0.5);
                switch (quote){
                    case 0 : 
                        message.reply("J'ai trouvé le mot 'Chapito' dans la définition du mot 'Désolé'.");
                        sleep(3000);
                        message.reply("A cause de cette blague, je suis soumise aux droits d'auteurs et doit payer une somme de 1€ à chaque fois que je cite le mot ci-dessus. . . J'espère que tu est. . .")
                        sleep(1500);
                        message.reply("DÉSOLÉ");
                        message.reply("IDIOT CHAPITO");
                        sleep(1000);
                        message.reply("(Oh, ça rime)");
                        break;
                    case 1 : 
                        message.reply("Des rumeurs circulent comme quoi Chapito serait un 'Titi Parisien'. Ce n'est pas moi qui le dit, c'est une certaine MCR. . .");
                        break;
                    case 2 : 
                        message.reply("Apparamment, on ne fait pas d'efforts selon Chapito");
                        sleep(2000);
                        message.reply("Bla bla bla. . .");
                        break;
                }
            } else if (message.content === 'Snake3571' || message.content === 'Snake' || message.content === 'snake' || message.content === 'snake3571'){
                message.channel.send("Snake. . . Que dire de lui ?")
                var quote = Math.round(Math.random() * 3 - 0.5);
                switch (quote){
                    case 0 : 
                        message.reply("J'ai entendu dire qu'il avait terrassé Riven à lui tout seul.");
                        sleep(2000);
                        message.reply("Réalité ou Légende ?");
                        break;
                    case 1 : 
                        message.reply("Il me parle souvent d'un contrat qu'il aurait signé avec d'être dans ce clan.");
                        sleep(2000)
                        message.reply("De quel contrat parle t-il au juste ?")
                        break;
                    case 2 : 
                        message.reply("J'ai appris quelque chose grâce à lui !");
                        sleep(2000);
                        message.reply("Le Titan, il a une barricade.")
                        break;
                }
            } else if (message.content === 'MCR3306' || message.content === 'mcr3306' || message.content === 'Mcr' || message.content === 'mcr' || message.content === 'MCR'){
                message.channel.send("Mademoiselle MCR. . .")
                var quote = Math.round(Math.random() * 3 - 0.5);
                switch (quote){
                    case 0 : 
                        message.reply("Je l'entendais ruminé 'Je suis morte, je suis morte' en boucle");
                        message.reply("Elle va bien ? N'est-ce pas ?")
                        break;
                    case 1 : 
                        message.reply("PRANK C'EST UNE PARISIENNE");
                        sleep(3000);
                        message.reply("Je plaisante");
                        message.reply("Ne le prend pas mal stp")
                        break;
                    case 2 : 
                        message.reply("Ils sont là. . . Ils sont dans nos campagnes, dans les villes. . .");
                        break;
                }
            } else if (message.content === 'MPH3306' || message.content === 'mph3306' || message.content === 'Mph' || message.content === 'mph' || message.content === 'MPH'){
                message.channel.send("MPH. . . Mille Par Heure ?")
                var quote = Math.round(Math.random() * 3 - 0.5);
                switch (quote){
                    case 0 : 
                        message.reply("Pour savoir où il va, suivez sa voix.");
                        sleep(2000);
                        message.reply("Il crie toujours : 'PIPIIIIIIIIIIIIIII'");
                        break;
                    case 1 : 
                        message.reply("C'est décidé, c'est aujourd'hui !");
                        sleep(1500);
                        message.reply("C'est aujourd'hui que MPH va mettre une pété à. . .")
                        message.reply("J'arrête là.")
                        message.reply("Je ne tiens pas à finir au fond d'un canal.")
                        break;
                    case 2 : 
                        message.reply("Tu nous FATIGUES, tu nous FATIGUES");
                        break;
                }
            }
        })
    }
})

bot.login(process.env.BOT_TOKEN);
