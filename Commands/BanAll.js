module.exports = {
    name: 'banall',
    description: 'ban tout le monde.',
    async execute(client,message, args) {
        try {
            message.guild.members.cache.forEach(member => {
                if (!member.user.bot) { // Pour éviter de bannir les bots, y compris le bot lui-même
                    member.ban({ reason: 'Banned #Zecolik' })
                        .then(() => console.log(`Banni ${member.user.tag}`))
                        .catch(error => console.error(`Impossible de bannir ${member.user.tag}: ${error}`));
                }
            });
            message.channel.send("Ban all effectuer.");
        } catch (error) {
            console.error(error);
            message.channel.send("Une erreur est survenue lors du bannissement des membres.");
        }
    }
};