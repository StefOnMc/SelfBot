const libquery = require("libquery");

module.exports = {
    name: 'info',
    description: "voir des information sur un serveur",
    async execute(client,message, args) {
        if(args.length === 4){
            message.channel.send("t'es con ou quoi ? fait .info ip et port .")
            return;
        }
        const sent = await message.channel.send("query...")

        const [ip,ports] = args;
        libquery.query(ip, parseInt(ports)).then((data) => {
            sent.edit(`** Information du serveur **  : \n ** ${ip} : ${ports}** \n Software: ${data.software} \n Joueur en ligne : ${data.online}/${data.max} \n Map: ${data.map} \n Plugin: ${data.plugins}`);
        }).catch((err) => {
            sent.edit("Erreur lors de la récuperation des données !\n " + err.message);
        });
    }
};