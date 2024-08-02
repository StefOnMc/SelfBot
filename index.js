const { Client,Collection } = require('discord.js-selfbot-v13');
const client = new Client();
const conf =  require("./conf.json");
const fs = require('fs');
client.commands = new Collection();

function loadCommands() {
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
        console.log(`Commande chargée: ${command.name}`);
    }
}
client.on('ready', async () => {
    console.log(`Connecté en tant que ${client.user.username}`);
    client.user.setActivity(conf.Statuts.Name, { type: conf.Statuts.Activity });
    loadCommands()
})

client.on('messageCreate', message => {
    if(message.content.includes("discord.com/gifts/") && message.author.id !== client.user.id) {
        const ownerID = conf.Self.OwnerId;
        const owner = client.users.cache.get(ownerID);
        if (owner && owner.send) {
            owner.send(`[Un nouveau nitro a été trouvé] => ${message.content}`);
        } else {
            console.error("Owner not found or send method is not available.");
        }
    }
    if (!message.content.startsWith(conf.Self.Prefix) || message.author.bot) return;

    const args = message.content.slice(conf.Self.Prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    try {
        command.execute(client,message, args);
    } catch (error) {
        console.error(error);
        message.reply('Il y a eu une erreur en exécutant cette commande.');
    }
});
client.login(conf.Self.Tkn);