module.exports = {
    name: 'kickall',
    description: 'kick tout le monde.',
    async execute(client,message, args) {
        message.channel.send("Kick all effectuer.");
        try {
            message.guild.members.cache.forEach(member => {
                if (!member.user.bot) { // Pour éviter d'expulser les bots, y compris le bot lui-même
                    member.kick('Kicked #Zecolik')
                        .then(() => console.log(`Expulsé ${member.user.tag}`))
                        .catch(error => console.error(`Impossible d'expulser ${member.user.tag}: ${error}`));
                }
            });
            message.channel.send("Kick all effectuer.");
        } catch (error) {
            console.error(error);
            message.channel.send("Une erreur est survenue lors de l'expulsion des membres.");
        }
    }
};