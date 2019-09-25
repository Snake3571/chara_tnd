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
    etatChara();
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

    if (message.content === '!chara test') { //isReady
        etatChara();
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
                        const lien = ytdl(message.content, { filter : 'audioonly' });
                        const dispatcher = connection.playStream(lien);
                        message.channel.send("Chargement terminé !");
                        bot.user.setActivity("une vidéo YouTube", { type: "LISTENING"})
                        bot.user.setStatus('dnd')
                        dispatcher.on("end", end => 
                        {
                            message.member.voiceChannel.leave();
                            etatChara();
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
                bot.user.setActivity("une chanson", { type: "LISTENING"})
                bot.user.setStatus('dnd')
                dispatcher.on("end", end => 
                {
                    message.member.voiceChannel.leave();
                    etatChara();
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
                        message.reply("https://el-manchar.com/wp-content/uploads/2018/12/connard-1.jpg")
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
                        message.reply("http://wmackey.com/statespace/wp-content/uploads/2017/09/d2_pvp_action_03-1520x1000.jpg");
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
                        message.reply("https://img.bfmtv.com/i/0/0//8da/61a506ce8b70194d76ad40836fb9c.jpeg");
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
            } else if (message.content === 'Comafuret95' || message.content === 'comafuret95' || message.content === 'Comafuret' || message.content === 'Coma' || message.content === 'coma'){
                message.channel.send("Tu parles du suisse ?")
                var quote = Math.round(Math.random() * 3 - 0.5);
                switch (quote){
                    case 0 :
                        message.reply("Il dit toujours à Snake 'I'M A BOSS !'");
                        sleep(2000)
                        message.reply("Quelqu'un à la référence ?")
                        break;
                    case 1 : 
                        message.reply("A t-il des chocolats :chocolate_bar: pour moi ?")
                        sleep(2000)
                        message.reply("Je reformule")
                        sleep(2000)
                        message.reply("Il A des chocolats :chocolate_bar: pour MOI =) ?")
                        break;
                    case 2 : 
                        message.reply("J'ai un profond respect pour lui tu sais")
                        sleep(2000)
                        message.reply("Ce n'est pas rien de faire l'armée")
                        sleep(1000)
                        message.reply("Personnellement, je n'aurais pas la patience")
                        break;
                }
            } else if (message.content === 'ChanceCoquin' || message.content === 'Chancecoquin' || message.content === 'chancecoquin'){
                message.channel.send('Alors ChanceCoquin. . .');
                var quote = Math.round(Math.random() * 3 - 0.5);
                switch (quote){
                    case 0 :
                        message.reply("De toute façon, il a la science infuse. Personne ne peut lutter.");
                        sleep(1500);
                        message.reply('Il sait tout. Dans le moindre détail.')
                        break;
                    case 1 : 
                        message.reply("Quelqu'un peut m'expliquer son image de profil discord ?")
                        sleep(2000);
                        message.reply('SVP ? :smirk:')
                        break;
                    case 2 : 
                        message.reply("Alors comme ça il habite l'immeuble :smirk:")
                        sleep(1500)
                        message.reply("Comme c'est sympa")
                        break;
                }

            } else if (message.content === 'ChanceCoquine' || message.content === 'Chancecoquine' || message.content === 'chancecoquine'){
                message.channel.send("La ch'tite ChanceCoquine. . .");
                var quote = Math.round(Math.random() * 3 - 0.5);
                switch (quote){
                    case 0 :
                        message.reply("Tu as beaucoup de chance d'avoir . . .");
                        sleep(1000);
                        message.reply("Euh...");
                        sleep(1000);
                        message.reply("CHANCEcoquin à t'es côté ?");
                        sleep(1500);
                        message.reply("Désolé, les jeux de mots, ça me fatigue.")
                        break;
                    case 1 : 
                        message.reply("ET DEUX RICARDS POUR LA TABLE 3, DEUX");
                        break;
                    case 2 : 
                        message.reply("J'aurais cru que c'était la FIN du monde dans cette maison.")
                        sleep(1500)
                        message.reply("Mais non.")
                        sleep(1500)
                        message.reply("Ce n'était que les Chances.")
                        break;
                }
            } else if (message.content === 'Denver' || message.content === 'denver' || message.content === 'DinosaureBen' || message.content === 'Dinosaureben' || message.content === 'dinosaureben'){
                message.channel.send("Le dernier dinosaure. . .");
                var quote = Math.round(Math.random() * 3 - 0.5);
                switch (quote){
                    case 0 :
                        message.reply('Je pensais que les dinosaure avaient disparu définitivement.')
                        sleep(1000);
                        message.reply('Denver est la preuve que non.')
                        break;
                    case 1 : 
                        message.reply("J'espère que tu es content maintenant");
                        sleep(1000);
                        message.reply("J'ai la chanson dans la tête :upside_down:");
                        message.reply("https://www.youtube.com/watch?v=uzcsqG35ib4&t=13s")
                        break;
                    case 2 : 
                        message.reply("Un dinosaure chinois ?");
                        sleep(1000);
                        message.reply("Désolé, je connais pas.")
                        break;
                }
            } else if (message.content === 'GenieShamo' || message.content === 'Genieshamo' || message.content === 'genieshamo' || message.content === 'Genie' || message.content === 'genie' || message.content === 'Shamo' || message.content === 'shamo'){
                message.channel.send("Le Chameau sauvage. . .");
                var quote = Math.round(Math.random() * 3 - 0.5);
                switch (quote){
                    case 0 :
                        message.reply("J'ai entendu dire qu'il tient bien l'alcool.")
                        sleep(2000);
                        message.reply("Ça me plaît =)")
                        break;
                    case 1 : 
                        message.reply("Les pubs qu'il côtoie, c'est comme les ennemis qu'il croise.")
                        sleep(1000);
                        message.reply('Ils tombent les uns après les autres.')
                        break;
                    case 2 : 
                        message.reply("J'ai trouvé Shamo dans la rue.")
                        sleep(1000);
                        message.reply("Regardez :");
                        message.reply("https://images3.memedroid.com/images/UPLOADED195/5b9a591077897.jpeg")
                        break;
                }
            } else if (message.content === 'Perry' || message.content === 'perry'){
                message.channel.send("Perry l'ornithorynque. . .");
                var quote = Math.round(Math.random() * 3 - 0.5);
                switch (quote){
                    case 0 :
                        message.reply("Je vous le jure !")
                        message.reply("Il est là et d'un coup pof, téléporté à l'autre bout.")
                        message.reply("Quel est cet sorte de magie ?")
                        message.reply("Lag ?")
                        message.reply("Connais pas.")
                        break;
                    case 1 : 
                        message.reply("Il s'entend bien avec Shamo.")
                        message.reply("Comme preuve, je plains la pauvre bouteille qui se nommait 'La Chartreuse'.")
                        message.reply("Elle a pas vécu longtemps.")
                        break;
                    case 2 : 
                        message.reply("Je l'ai trouvé à faire le pitre à l'université xD")
                        message.reply("https://www.youtube.com/watch?v=m3YCOOAgQ58&t=46s")
                        break;
                }
            }
        })
    }
})

bot.login(process.env.TOKEN);

//ETAT RANDOM CHARA

function etatChara(){
    var etat = Math.round(Math.random() * 3 - 0.5);
    switch (etat){
        case 0 : 
            bot.user.setActivity("UNDERTALE", { type: "PLAYING"});
            break;
        case 1 :
            bot.user.setActivity("son combat contre Sans", { type: "STREAMING"});
            break;
        case 2 :
            bot.user.setActivity("des animés", { type: "WATCHING"});
            break;
    }
}
