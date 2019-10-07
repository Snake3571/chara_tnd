const Discord = require('discord.js');
const ytdl = require('ytdl-core');


exports.truth = function (pseudo, random){
    
    bot.on('message', message => {

    if (pseudo === 'Lefaser' || pseudo === 'lefaser' || pseudo === 'faser' || pseudo === 'Faser'){
        message.channel.send("Lefaser hum. . .")
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
    } else if (pseudo === 'Tiberias 84' || pseudo === 'Tiberias' || pseudo === 'tibe' || pseudo === 'Tibe' || pseudo === 'tibé' || pseudo === 'Tibé'){
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
    } else if (pseudo === 'Chapito' || pseudo === 'chapito' || pseudo === 'Chapi' || pseudo === 'chapi'){
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
    } else if (pseudo === 'Snake3571' || pseudo === 'Snake' || pseudo === 'snake' || pseudo === 'snake3571'){
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
    } else if (pseudo === 'MCR3306' || pseudo === 'mcr3306' || pseudo === 'Mcr' || pseudo === 'mcr' || pseudo === 'MCR'){
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
    } else if (pseudo === 'MPH3306' || pseudo === 'mph3306' || pseudo === 'Mph' || pseudo === 'mph' || pseudo === 'MPH'){
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
    } else if (pseudo === 'Comafuret95' || pseudo === 'comafuret95' || pseudo === 'Comafuret' || pseudo === 'Coma' || pseudo === 'coma'){
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
    } else if (pseudo === 'ChanceCoquin' || pseudo === 'Chancecoquin' || pseudo === 'chancecoquin'){
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

    } else if (pseudo === 'ChanceCoquine' || pseudo === 'Chancecoquine' || pseudo === 'chancecoquine'){
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
    } else if (pseudo === 'Denver' || pseudo === 'denver' || pseudo === 'DinosaureBen' || pseudo === 'Dinosaureben' || pseudo === 'dinosaureben'){
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
    } else if (pseudo === 'GenieShamo' || pseudo === 'Genieshamo' || pseudo === 'genieshamo' || pseudo === 'Genie' || pseudo === 'genie' || pseudo === 'Shamo' || pseudo === 'shamo'){
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
    } else if (pseudo === 'Perry' || pseudo === 'perry'){
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