const {PermissionFlagsBits} = require("discord.js");
module.exports = {
    name: 'genlink',
    description: 'link gen.',
    execute(client,message, args) {
        if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) {
            return message.reply("Vous n'avez pas la permission d'executer cette comande !");
        }
        if(args.length === 0){
            return message.reply("usage: .genlink id");
        }
        const [idbot] = args;
        const id = `https://discord.com/oauth2/authorize?client_id=${idbot}&permissions=8&integration_type=0&scope=bot`;
        message.reply(`Voici le lien de ton bot \n ${id} .`)
    }
}