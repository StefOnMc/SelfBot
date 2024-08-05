module.exports = {
    name: 'unbanall',
    description: 'unban tout le monde.',
    async execute(client,message, args) {
        try {
            const bans = await message.guild.bans.fetch();
            if (bans.size === 0) {
                return message.channel.send("Il n'y a aucun membre banni.");
            }

            // Débannir chaque membre
            bans.forEach(banInfo => {
                message.guild.members.unban(banInfo.user.id)
                    .then(() => console.log(`Débanni ${banInfo.user.tag}`))
                    .catch(error => console.error(`Impossible de débannir ${banInfo.user.tag}: ${error}`));
            });
            message.channel.send("Unban effectuer.");
        } catch (error) {
            console.error(error);
            message.channel.send("Une erreur est survenue lors du débannissement des membres.");
        }
    }
};