module.exports = {
    name: 'status',
    description: 'edit le status du bot.',
    async execute(client,message, args) {
        if (args.length < 2) {
            return message.channel.send('Vous devez fournir un type de statut et un message. Exemples : `.status online Jouer à un jeu` ou `.status dnd Occupé`.');
        }

        const [statusType, ...statusMessage] = args;
        const status = statusMessage.join(' ');

        if (!['online', 'idle', 'dnd', 'invisible'].includes(statusType)) {
            return message.channel.send('Type de statut invalide. Les types valides sont : `online`, `idle`, `dnd`, `invisible`.');
        }

        try {
            await client.user.setPresence({
                status: statusType,
                activities: [{ name: status }]
            });
            message.channel.send(`Statut du bot mis à jour : ${statusType} - ${status}`);
            console.log(`Statut du bot mis à jour : ${statusType} - ${status}`)
        } catch (error) {
            console.error('Erreur lors de la mise à jour du statut :', error);
            message.channel.send('Erreur lors de la mise à jour du statut.');
        }
    }
};